'use client';
import { useState, useEffect, useRef } from 'react';

export default function ChatComponent({ isKiai = false }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', { // Ensure this matches your route path
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          isKiai: isKiai
        }),
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        throw new Error('No reply received');
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '⚠️ Error: Unable to connect to MobilityAI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-black text-white font-bold border-b border-gray-700">
        {isKiai ? 'KIAI Dashboard' : 'MobilityAI Assistant'}
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Start by typing your vehicle question below.</p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
            }`}>
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-500 p-3 rounded-lg animate-pulse text-xs italic">
              MobilityAI is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white flex gap-2">
        <input
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={input}
          placeholder="Ask about your vehicle..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
