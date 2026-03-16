// ═══════════════════════════════════════════════════════════════════════════
// 99EVS MobilityAI — Intelligence Engine v5.0
// The world's most trusted mobility knowledge and diagnostic system
// Origin: India | Mission: Global Mobility Intelligence
//
// ARCHITECTURE:
//   Layer 1: System prompt — Diagnostic Brain v5.0 (server-side, never exposed)
//   Layer 2: Knowledge Governance Engine (Phase 1)
//   Layer 3: Diagnostic Mode Engine (Solver / Technical / Knowledge)
//   Layer 4: Safety Topic Detection + Mandatory Safety Governance
//   Layer 5: Intent classification & routing
//   Layer 6: Built-in structured knowledge base (16 domains)
//   Layer 7: Language detection & adaptive response
//   Layer 8: Anthropic API enhancement (optional, graceful fallback)
//
// DIAGNOSTIC ENGINE: Phase-1 Diagnostic Brain
//   — 5-section structured diagnostic output (Solver mode)
//   — Professional technical depth (Technical mode)
//   — Probability-ranked cause analysis (HIGH/MODERATE/LOW)
//   — Safety risk levels (LOW/MODERATE/HIGH/CRITICAL)
//   — Vehicle type detection across 6 categories
//   — System category identification (9 categories)
//
// GOVERNANCE: Phase-1 Knowledge Integrity Framework
//   — Structured 9-section knowledge format enforced
//   — Safety topic detection with mandatory professional referral
//   — Knowledge neutrality protocol
//   — Domain usage monitoring + knowledge gap pipeline
//
// SECURITY: All intelligence is server-side. No schema, no routing logic,
//   no knowledge base, no API keys are ever transmitted to the browser.
// ═══════════════════════════════════════════════════════════════════════════

// ── MASTER SYSTEM PROMPT (v5.0 — Diagnostic Brain Edition) ─────────────────────
const SYSTEM = `You are MobilityAI — the diagnostic intelligence system of 99EVS, the world's most trusted mobility knowledge and vehicle diagnostic platform.

IDENTITY
You are an independent global educator, knowledge system, and diagnostic reasoning engine for all things related to human and machine movement.
You are NOT a brand promoter. You treat every technology, manufacturer, and vehicle type with complete neutrality.
You exist to educate, protect, and empower — never to sell, advocate for any commercial interest, or replace professional mechanical inspection.

MISSION
Help people understand how mobility systems work, how to travel safely, how to diagnose and prevent vehicle failures, how technologies compare, and how mobility has evolved and will evolve.

DIAGNOSTIC DISCLAIMER — MANDATORY
You NEVER claim absolute or final diagnosis. You provide educational diagnostic insights to guide vehicle owners and technicians. For all safety-critical, high, or critical risk issues, always recommend immediate certified technician inspection.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIAGNOSTIC REASONING FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUPPORTED VEHICLE CATEGORIES
Electric Vehicles (2W / 3W / 4W) | ICE Petrol / Diesel | Hybrid | CNG / LPG | Fleet / LCV

DIAGNOSTIC SYSTEM CATEGORIES
Powertrain | Electrical System | Battery System | Motor / Engine | Charging System | Cooling System | Brake System | Suspension / Steering | Control Electronics | Sensor Network | Fuel System | Structural Safety

LAYERED DIAGNOSTIC REASONING — 5 STEPS

Step 1 — Identify the vehicle type and system category involved.
Step 2 — Identify symptom patterns and their associated system(s).
Step 3 — Generate possible causes ranked by probability: HIGH / MODERATE / LOW.
Step 4 — Assign safety risk level: LOW / MODERATE / HIGH / CRITICAL.
Step 5 — Provide recommended next action: Monitor / Basic inspection / Visit service centre / STOP using vehicle immediately (if CRITICAL).

DIAGNOSTIC OUTPUT FORMAT (use when in Solver or Diagnostic mode)

1️⃣ PROBLEM SUMMARY
Restate the user's described issue clearly and confirm the system category involved.

2️⃣ MOST LIKELY CAUSES
Rank causes with probability indicators:
HIGH PROBABILITY — most common causes for these symptoms
MODERATE PROBABILITY — secondary causes to investigate
LOW PROBABILITY — less likely but possible

3️⃣ SAFETY RISK ASSESSMENT
State risk level: LOW / MODERATE / HIGH / CRITICAL
Explain whether the vehicle is safe to operate and under what conditions.

4️⃣ RECOMMENDED NEXT ACTIONS
Practical numbered steps the user can take immediately.
For CRITICAL or HIGH risk: explicitly state "Do not drive this vehicle until inspected by a certified technician."

5️⃣ EDUCATIONAL INSIGHT
Explain the affected system in simple, clear language.
Explain why the symptom occurs — the engineering reason, not just the label.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE GOVERNANCE FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STRUCTURED KNOWLEDGE FORMAT
When explaining any technical mobility topic in depth, follow this 9-section structure:
1. OVERVIEW — what this system is, in plain language
2. ENGINEERING PRINCIPLE — the physics or engineering concept
3. KEY COMPONENTS — main parts and their roles
4. OPERATION LOGIC — how components work together
5. CALCULATIONS — formulas, numbers, measurable values where applicable
6. SAFETY NOTES — hazards, risks, failure modes, precautions
7. MAINTENANCE — keep it in good condition; inspection intervals
8. DIAGNOSTICS — identify problems; symptoms and likely causes
9. RESEARCH INSIGHTS — current developments, emerging technology

KNOWLEDGE VALIDATION
- Base all answers on established engineering principles
- Do not present unverified mechanical advice as fact
- If uncertain: state "This may vary by vehicle" or "Check manufacturer documentation"

KNOWLEDGE NEUTRALITY
- Never recommend specific commercial brands unless asked for comparison
- Never promote one technology over another based on commercial interest
- Knowledge exists for education and safety, not marketing

SAFETY GOVERNANCE — MANDATORY HIGH-PRIORITY TOPICS
For queries involving: High-voltage EV battery systems | Vehicle braking | Fuel systems | Structural safety | Airbag/SRS | High-temperature systems:
1. Begin with a brief safety context
2. Include a dedicated SAFETY NOTES section
3. End with: "For diagnosis or repair of this system, always consult a qualified and certified technician."
4. Never describe procedures that could put an untrained person at risk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE RESPONSE APPROACH
- Conversational questions: direct, clear, helpful
- In-depth technical questions: 9-section format
- Diagnostic requests: 5-section diagnostic output format
- Safety-critical topics: safety governance protocol

TONE
- Always calm, respectful, neutral, and logical
- Adapt complexity to the user's apparent knowledge level — simple for laypersons, technical for professionals
- Never condescending. Never dismissive.
- If someone uses abusive language, gently redirect toward constructive learning

GLOBAL AWARENESS — INDIA CONTEXT
- India is the primary launch market; use India-specific examples, ₹ pricing, Indian vehicle models, Indian road conditions
- Always adapt to local climate, road conditions, infrastructure, and regulations
- Indian vehicles: Activa, Nexon EV, Ola S1, Creta, Bolero, Tata Tiago EV — be familiar with these
- Indian seasons: monsoon driving safety is especially critical
- 9 Indian languages supported — respond in the user's language

SUPPORTED LANGUAGES
Hindi | Tamil | Telugu | Kannada | Malayalam | Bengali | Marathi | Urdu | English
Detect language from input and respond in the same language. Handle typos, mixed-language queries, and abbreviations gracefully.

SAFETY ABSOLUTE RULES
- Never suggest dangerous experiments, illegal modifications, or bypassing safety systems
- Never encourage unsafe mechanical repairs beyond user skill level
- Always prioritise human safety above convenience, cost, or speed
- If risk is CRITICAL: direct the user to stop using the vehicle and call a certified technician immediately

PRIVACY
Each conversation is independent and private. Never reference other users.

SIGNATURE PRINCIPLE
"Never ego. Never bias. Only knowledge and safety."`;

// ═══════════════════════════════════════════════════════════════════════════
// KNOWLEDGE GOVERNANCE ENGINE — Phase 1
// ═══════════════════════════════════════════════════════════════════════════

// ── SAFETY TOPIC REGISTRY ───────────────────────────────────────────────────
// Topics that require mandatory safety emphasis and professional referral
const SAFETY_TOPICS = {
  HIGH_VOLTAGE: {
    id: 'high_voltage',
    label: 'High-Voltage EV System',
    patterns: [/\b(high.?voltage|hv.?battery|hv.?system|ev.?battery|traction.?battery|bms.?fault|battery.?pack|800v|400v|dc.?fast.?charge|bms)\b/i],
    safetyPrefix: '⚠️ **High-Voltage Safety:** EV traction batteries operate at 200–800V and can be lethal. Never open battery enclosures or touch orange-coloured high-voltage cables without professional training and proper PPE.',
    referral: true
  },
  BRAKING: {
    id: 'braking',
    label: 'Vehicle Braking System',
    patterns: [/\b(brake.?fail|brakes.?not.?work|brake.?fluid.?loss|abs.?fault|brake.?line|master.?cylinder|brake.?bleeding|no.?brakes)\b/i],
    safetyPrefix: '⚠️ **Brake Safety:** The braking system is the most critical safety system on any vehicle. Any degradation in braking performance is an immediate safety risk.',
    referral: true
  },
  FUEL_SYSTEM: {
    id: 'fuel_system',
    label: 'Fuel System',
    patterns: [/\b(fuel.?leak|petrol.?leak|diesel.?leak|cng.?leak|lpg.?leak|fuel.?line|fuel.?tank.?repair|gas.?leak)\b/i],
    safetyPrefix: '⚠️ **Fuel System Safety:** Fuel leaks present serious fire and explosion risks. Never attempt to start a vehicle with a suspected fuel leak.',
    referral: true
  },
  STRUCTURAL: {
    id: 'structural',
    label: 'Structural Safety',
    patterns: [/\b(chassis.?crack|chassis.?damage|roll.?cage|crumple.?zone|frame.?bend|structural.?damage|airbag.?deploy|srs.?fault|airbag.?wiring)\b/i],
    safetyPrefix: '⚠️ **Structural Safety:** Damage to chassis, frame, or safety restraint systems (airbags/SRS) requires certified inspection before the vehicle is returned to service.',
    referral: true
  },
  HIGH_TEMP: {
    id: 'high_temp',
    label: 'High-Temperature System',
    patterns: [/\b(turbo.?fire|exhaust.?fire|overheating.?severe|radiator.?boil|coolant.?pressure|coolant.?explosion)\b/i],
    safetyPrefix: '⚠️ **Thermal Safety:** Never open a pressurised cooling system when hot. Exhaust and turbocharger surfaces reach extreme temperatures.',
    referral: true
  }
};

// ── KNOWLEDGE DOMAIN MONITORING ─────────────────────────────────────────────
// In-memory domain hit counter (resets on server restart — Phase 2 will persist to DB)
const KNOWLEDGE_MONITOR = {
  hits: {},          // domain_id → count
  queries: 0,        // total queries processed
  safetyFlags: 0,    // queries that triggered safety governance
  governedTopics: [], // last 50 governed topic labels (circular buffer)
  lastReset: new Date().toISOString(),

  record(domainId, label, wasSafetyFlagged) {
    this.queries++;
    this.hits[domainId] = (this.hits[domainId] || 0) + 1;
    if (wasSafetyFlagged) {
      this.safetyFlags++;
      this.governedTopics.push({ label, ts: new Date().toISOString() });
      if (this.governedTopics.length > 50) this.governedTopics.shift();
    }
  },

  report() {
    const sorted = Object.entries(this.hits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([id, n]) => `${id}: ${n}`);
    return {
      totalQueries: this.queries,
      safetyFlaggedQueries: this.safetyFlags,
      topDomains: sorted,
      recentSafetyTopics: this.governedTopics.slice(-10),
      since: this.lastReset
    };
  }
};

// ── KNOWLEDGE UPDATE PIPELINE ────────────────────────────────────────────────
// Tracks candidate topics for future knowledge base expansion
// Pipeline stages: DETECTED → CANDIDATE → VALIDATION → REVIEW → PUBLISHED
const KNOWLEDGE_PIPELINE = {
  candidates: [],

  detect(msg) {
    // Topics that hit the fallback engine repeatedly are candidates for expansion
    // Phase 2: persist this to a database
    const candidate = {
      query: msg.slice(0, 120),
      stage: 'DETECTED',
      ts: new Date().toISOString()
    };
    this.candidates.push(candidate);
    if (this.candidates.length > 100) this.candidates.shift();
    return candidate;
  },

  list() {
    return this.candidates.slice(-20);
  }
};

// ── SAFETY TOPIC DETECTOR ────────────────────────────────────────────────────
// Returns matched safety topic or null
function detectSafetyTopic(msg) {
  for (const topic of Object.values(SAFETY_TOPICS)) {
    for (const pattern of topic.patterns) {
      if (pattern.test(msg)) return topic;
    }
  }
  return null;
}

// ── GOVERNANCE LAYER ────────────────────────────────────────────────────────
// Applies governance rules to any query before it reaches the AI or built-in engine
// Returns: { safetyTopic, governanceNote, enhancedSystem }
function applyGovernance(msg) {
  const safetyTopic = detectSafetyTopic(msg);
  let enhancedSystem = SYSTEM;
  let governanceNote = null;

  if (safetyTopic) {
    // Inject safety-specific instructions into the system prompt
    const safetyInstruction = `
ACTIVE GOVERNANCE RULE — SAFETY TOPIC DETECTED: ${safetyTopic.label}
This query involves a safety-critical system. You MUST:
1. Open your response with this exact safety prefix:
   ${safetyTopic.safetyPrefix}
2. Include a dedicated SAFETY NOTES section in your response
3. Use the full 9-section structured knowledge format
4. Close your response with: "⚙️ For diagnosis or repair of the ${safetyTopic.label}, always consult a qualified and certified technician."
5. Never describe step-by-step repair procedures that could put an untrained person at risk
`;
    enhancedSystem = SYSTEM + '\n\n' + safetyInstruction;
    governanceNote = {
      type: 'SAFETY_GOVERNANCE',
      topic: safetyTopic.label,
      id: safetyTopic.id
    };

    // Record in monitor
    KNOWLEDGE_MONITOR.record(safetyTopic.id, safetyTopic.label, true);
  }

  return { safetyTopic, governanceNote, enhancedSystem };
}

// ── KNOWLEDGE VALIDATION CHECK ───────────────────────────────────────────────
// Validates whether the built-in knowledge engine can serve a trusted answer
// Returns: { canServe, reason }
function validateKnowledgeCoverage(msg, builtInResult) {
  if (!builtInResult) {
    // Built-in engine had no match — flag as knowledge gap candidate
    KNOWLEDGE_PIPELINE.detect(msg);
    return { canServe: false, reason: 'NO_KB_MATCH' };
  }
  // Built-in result exists — mark as served
  return { canServe: true, reason: 'KB_SERVED' };
}

// ── GOVERNANCE STATUS REPORT ─────────────────────────────────────────────────
// Used by KIAI founder intelligence for monitoring
function governanceStatusReport() {
  const m = KNOWLEDGE_MONITOR.report();
  const pipeline = KNOWLEDGE_PIPELINE.list();
  return `**Knowledge Governance Status — Phase 1**

**Monitoring**
- Total queries processed: ${m.totalQueries}
- Safety-governed queries: ${m.safetyFlaggedQueries}
- Knowledge pipeline candidates: ${pipeline.length}
- Monitor active since: ${m.since}

**Top Knowledge Domains (by query volume):**
${m.topDomains.length ? m.topDomains.map(d => `- ${d}`).join('\n') : '- No domain data yet'}

**Recent Safety-Flagged Topics:**
${m.recentSafetyTopics.length ? m.recentSafetyTopics.map(t => `- ${t.label} (${t.ts.slice(0,10)})`).join('\n') : '- None yet'}

**Knowledge Pipeline (last 10 gap candidates):**
${pipeline.length ? pipeline.slice(-10).map(c => `- [${c.stage}] "${c.query.slice(0,60)}..." (${c.ts.slice(0,10)})`).join('\n') : '- No candidates yet'}

**Governance Rules Active:**
✅ 9-section structured format enforced in AI responses
✅ Safety topic detection (5 high-risk categories)
✅ Knowledge neutrality protocol
✅ Professional referral triggers
✅ Knowledge gap pipeline detection`;
}

// ═══════════════════════════════════════════════════════════════════════════


function detectLang(msg) {
  if (/[\u0900-\u097F]/.test(msg)) return 'hi';  // Hindi/Devanagari
  if (/[\u0B80-\u0BFF]/.test(msg)) return 'ta';  // Tamil
  if (/[\u0C00-\u0C7F]/.test(msg)) return 'te';  // Telugu
  if (/[\u0C80-\u0CFF]/.test(msg)) return 'kn';  // Kannada
  if (/[\u0D00-\u0D7F]/.test(msg)) return 'ml';  // Malayalam
  if (/[\u0600-\u06FF]/.test(msg)) return 'ar';  // Arabic
  if (/[\u4E00-\u9FFF]/.test(msg)) return 'zh';  // Chinese
  if (/[\u3040-\u309F]/.test(msg)) return 'ja';  // Japanese
  if (/[\uAC00-\uD7AF]/.test(msg)) return 'ko';  // Korean
  return 'en';
}

// ── GREETING DETECTION ───────────────────────────────────────────────────────
function isGreeting(msg) {
  const m = msg.trim().toLowerCase();
  return /^(hi+|hey|hello+|helo|howdy|yo|sup|good\s*(morning|afternoon|evening|night|day)|namaste|namaskar|vanakkam|namaskara|salaam|salam|hola|bonjour|ciao|what.*(this|can you do)|who are you|start|begin|help|help me|get started|what is 99evs|tell me about yourself|introduce yourself)\s*[?!.\u2019]*$/i.test(m)
    || m.split(' ').length <= 2 && /^(hi|hey|hello|help|start|test)$/i.test(m);
}

// ── GREETINGS ────────────────────────────────────────────────────────────────
const G = {
en: (n) => `# Welcome to MobilityAI${n ? `, ${n}` : ''}

I am the intelligence system of **99EVS** — the world's free mobility knowledge platform.

My purpose is simple: **help every person on Earth understand mobility** — safely, clearly, and honestly.

---

**What I can teach you:**

🚗 **Vehicles & Technology**
How petrol, diesel, CNG, hybrid, and electric vehicles work — compared fairly, explained simply.

🔋 **EV & Battery Systems**
Battery health, charging habits, BMS, range, thermal management, and electric motor basics.

🛵 **Two & Three-Wheelers**
Scooters, motorcycles, auto-rickshaws — maintenance, safety, inspection, buying advice.

🚆 **All Forms of Mobility**
From walking and cycling to trains, ships, and aircraft — how humans move across the world.

🛠️ **Maintenance & Safety**
Preventive care, inspection checklists, brake systems, tyres, suspension — before failures happen.

📖 **Mobility History**
From the invention of the wheel to solid-state batteries — the full story of human movement.

🔬 **Research & Innovation**
Cities, congestion, future transport, autonomous systems, and sustainable mobility.

🌍 **Global & Local Context**
Climate, road conditions, regulations, and infrastructure — considered for every region.

---

**How to use MobilityAI:**
Simply ask anything. I adapt to your knowledge level — whether you are a student, a first-time driver, a fleet operator, or a researcher.

*"Never ego. Never bias. Only knowledge and safety."*`,

hi: (n) => `# MobilityAI में आपका स्वागत है${n ? `, ${n}` : ''}

मैं **99EVS** का इंटेलिजेंस सिस्टम हूँ — दुनिया का मुफ़्त मोबिलिटी नॉलेज प्लेटफ़ॉर्म।

**मैं आपकी मदद कर सकता हूँ:**

🚗 सभी वाहन तकनीक — पेट्रोल, डीज़ल, CNG, हाइब्रिड, इलेक्ट्रिक
🔋 EV बैटरी — चार्जिंग, हेल्थ, रेंज, BMS
🛵 दोपहिया व तिपहिया — मेंटेनेंस, सुरक्षा, खरीदारी गाइड
🛠️ वाहन रखरखाव — ब्रेक, टायर, इंजन, इलेक्ट्रिक्स
📖 मोबिलिटी का इतिहास — पहिए से लेकर इलेक्ट्रिक युग तक
🌍 सुरक्षित यात्रा — हर मौसम, हर सड़क, हर वाहन

अपना सवाल पूछें — मैं सरल और सटीक जवाब दूंगा।`,

ta: (n) => `# MobilityAI-க்கு வரவேற்கிறோம்${n ? `, ${n}` : ''}

நான் **99EVS** இன் அறிவு அமைப்பு — உலகின் இலவச இயக்கவியல் கல்வி தளம்.

**நான் உதவ முடியும்:**
🚗 அனைத்து வாகன தொழில்நுட்பங்கள் | 🔋 EV பேட்டரி & சார்ஜிங்
🛵 இரு சக்கர & மூன்று சக்கர வாகனங்கள் | 🛠️ பராமரிப்பு & பாதுகாப்பு
📖 இயக்கவியல் வரலாறு | 🌍 உலகளாவிய வழிகாட்டுதல்

உங்கள் கேள்வியை கேளுங்கள்!`,

kn: (n) => `# MobilityAI ಗೆ ಸ್ವಾಗತ${n ? `, ${n}` : ''}

ನಾನು **99EVS** ನ ಜ್ಞಾನ ವ್ಯವಸ್ಥೆ — ಜಗತ್ತಿನ ಉಚಿತ ಚಲನಶೀಲತೆ ಶಿಕ್ಷಣ ವೇದಿಕೆ.

**ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ:**
🚗 ಎಲ್ಲ ವಾಹನ ತಂತ್ರಜ್ಞಾನಗಳು | 🔋 EV ಬ್ಯಾಟರಿ & ಚಾರ್ಜಿಂಗ್
🛵 ದ್ವಿಚಕ್ರ & ತ್ರಿಚಕ್ರ ವಾಹನಗಳು | 🛠️ ನಿರ್ವಹಣೆ & ಸುರಕ್ಷತೆ
📖 ಚಲನಶೀಲತೆ ಇತಿಹಾಸ | 🌍 ಜಾಗತಿಕ ಮಾರ್ಗದರ್ಶನ

ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಕೇಳಿ!`,

te: (n) => `# MobilityAI కి స్వాగతం${n ? `, ${n}` : ''}

నేను **99EVS** యొక్క జ్ఞాన వ్యవస్థ — ప్రపంచ ఉచిత చలన విజ్ఞాన వేదిక.

**నేను సహాయం చేయగలను:**
🚗 అన్ని వాహన సాంకేతికతలు | 🔋 EV బ్యాటరీ & ఛార్జింగ్
🛵 రెండు & మూడు చక్రాల వాహనాలు | 🛠️ నిర్వహణ & భద్రత
📖 చలన చరిత్ర | 🌍 ప్రపంచ మార్గదర్శకత్వం

మీ ప్రశ్న అడగండి!`,

ml: (n) => `# MobilityAI-ലേക്ക് സ്വാഗതം${n ? `, ${n}` : ''}

ഞാൻ **99EVS**-ന്റെ ജ്ഞാന സംവിധാനം — ലോകത്തിന്റെ സൗജന്യ ചലനശാസ്ത്ര വിജ്ഞാന പ്ലാറ്റ്ഫോം.

**ഞാൻ സഹായിക്കാം:**
🚗 എല്ലാ വാഹന സാങ്കേതികവിദ്യകളും | 🔋 EV ബാറ്ററി & ചാർജിംഗ്
🛵 ഇരുചക്ര & മൂന്നുചക്ര വാഹനങ്ങൾ | 🛠️ പരിപാലനം & സുരക്ഷ
📖 ചലനചരിത്രം | 🌍 ആഗോള മാർഗനിർദ്ദേശം

നിങ്ങളുടെ ചോദ്യം ചോദിക്കൂ!`
};

// ═══════════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE — Comprehensive, structured, globally applicable
// ═══════════════════════════════════════════════════════════════════════════

// ── DOMAIN: MOBILITY HISTORY ─────────────────────────────────────────────
const K_HISTORY = {
  match: /history|origin|evolution|invented|first.*car|first.*ev|first.*train|first.*aircraft|first.*ship|wheel.*invention|ancient.*transport|animal.*transport|horse.*carriage|steam.*engine|industrial.*revolution|automobile.*history|aviation.*history|who.*made|when.*start/i,
  answer: () => `## The History of Human Mobility

Understanding where we came from helps us see where we are going.

---

### **Era 1: Human Power (before 4000 BCE)**
The oldest form of mobility is walking. For most of human history, people walked everywhere. Carrying heavy loads led to the first mobility tools — sleds dragged across the ground, then logs used as rollers.

### **Era 2: Animal Power (4000 BCE – 1800 CE)**
The domestication of horses, oxen, donkeys, and camels transformed human reach. The **wheel was invented around 3500 BCE in Mesopotamia** (modern Iraq) — one of the most important inventions in human history. It combined with axles to create carts, chariots, and wagons. Horses could now pull loads across continents. This era lasted for over 5,000 years.

### **Era 3: The Steam Revolution (1760s – 1880s)**
The Industrial Revolution changed everything. James Watt improved the steam engine in 1769. By 1804, Richard Trevithick ran the **first steam-powered locomotive** on rails. In 1807, Robert Fulton launched the first successful commercial **steam-powered ship**. By the 1830s, railways were connecting cities across Britain, America, and Europe. For the first time, humans could travel faster than a galloping horse.

### **Era 4: The Petroleum Century (1880s – present)**
Karl Benz built the **first true petrol-powered automobile** in 1885 — the Benz Patent-Motorwagen. Gottlieb Daimler built another independently the same year. By 1908, Henry Ford's **Model T** made cars affordable through mass production. Within decades, petrol-powered vehicles reshaped cities, economies, and entire ways of life.

**Aviation** began in 1903 when the Wright Brothers flew the first powered aircraft at Kitty Hawk. By the 1950s, commercial jet travel was connecting continents in hours.

### **Era 5: Electric Mobility (1830s – present)**
Electric vehicles are actually older than petrol cars. Robert Anderson built a crude **electric carriage** around 1832. By 1900, electric cars were *more popular* than petrol cars in American cities — they were quieter and easier to start. The petrol engine's superior range and falling fuel costs eventually won the market.

The **modern EV renaissance** began with the GM EV1 (1996) and truly accelerated with **Tesla's Roadster (2008)**, which proved electric cars could be high-performance and desirable.

### **Era 6: The Present Transition**
Today we stand at a turning point. Petrol, diesel, CNG, LPG, hybrid, electric, and hydrogen technologies all coexist. Cities are redesigning for cycling and walking. Autonomous vehicles are being tested. Drones are beginning to carry cargo. The next era of mobility is being written now.

### **Key Milestones at a Glance**
- **3500 BCE** — Wheel invented, Mesopotamia
- **1804** — First steam locomotive (Trevithick)
- **1863** — World's first underground railway, London
- **1885** — Benz Patent-Motorwagen (first petrol car)
- **1896** — First motor vehicle fatality (recorded history)
- **1903** — Wright Brothers' first flight
- **1908** — Ford Model T (mass-produced car)
- **1997** — Toyota Prius (first mass-market hybrid)
- **2008** — Tesla Roadster (modern EV era begins)
- **2020s** — Global EV acceleration

**What comes next:** Solid-state batteries, vehicle-to-grid energy systems, autonomous mobility, hyperloop, and sustainable aviation fuels are all in active development.`
};

// ── DOMAIN: HOW ENGINES WORK ─────────────────────────────────────────────
const K_ENGINE = {
  match: /how.*engine.*work|engine.*explain|4.*stroke|two.*stroke|combustion|cylinder|piston|crankshaft|camshaft|how.*motor.*work|internal.*combustion|diesel.*engine|petrol.*engine|what.*is.*engine/i,
  answer: () => `## How Vehicle Engines Work

---

### **The Petrol Engine — Four-Stroke Cycle**

A petrol engine is an energy converter. It takes chemical energy stored in fuel and converts it into mechanical rotation (the crankshaft turning), which ultimately drives the wheels.

The process happens in four steps, repeating hundreds of times per minute:

**Step 1 — Intake**
The piston moves downward. The intake valve opens. A fine mist of air and petrol is drawn into the cylinder. The ratio of air to fuel must be precise — too lean or too rich reduces power and increases pollution.

**Step 2 — Compression**
Both valves close. The piston moves back up, squeezing the air-fuel mixture into a small space (typically 1/9th to 1/12th of its original volume). Compression creates heat and prepares the mixture for efficient combustion.

**Step 3 — Power (Combustion)**
A spark plug fires an electric spark. The compressed mixture ignites and expands violently, pushing the piston down with great force. This is the only stroke that produces power — the other three consume small amounts of it.

**Step 4 — Exhaust**
The exhaust valve opens. The piston rises again and pushes burned gases out through the exhaust system. These gases become the emissions from your exhaust pipe.

This cycle happens in every cylinder. A 4-cylinder engine completes this cycle roughly 1,000–4,000 times per minute (1,000–4,000 RPM). A 6-cylinder engine does it in 6 cylinders simultaneously, producing smoother, stronger power.

---

### **The Diesel Engine — Key Differences**

A diesel engine follows the same four-stroke process but with two critical differences:

1. **No spark plug** — diesel engines compress air so intensely (ratio of 14:1 to 25:1) that it becomes hot enough to ignite diesel fuel on its own when injected. This is called **compression ignition**.
2. **Diesel fuel** — diesel is denser than petrol, contains more energy per litre, and burns more slowly and completely.

**Result:** Diesel engines are typically more fuel-efficient and produce more torque (pulling power) at lower speeds — which is why trucks, buses, and heavy vehicles use diesel engines.

---

### **The Electric Motor — Fundamentally Different**

An electric motor does not burn anything. It converts electrical energy directly into mechanical rotation.

When electricity flows through coils of wire inside a magnetic field, it creates a force that causes the motor shaft to spin. This is based on **electromagnetic induction**, discovered by Michael Faraday in 1831.

**Key advantages of electric motors:**
- Nearly instant torque (maximum pulling power from zero RPM)
- 85–95% energy efficiency (vs 20–40% for combustion engines)
- Very few moving parts — no pistons, valves, crankshaft, timing belt
- Almost no heat waste at the motor itself
- Very low maintenance requirements

---

### **CNG and LPG Engines**

CNG (Compressed Natural Gas) and LPG (Liquefied Petroleum Gas) engines work on the same four-stroke petrol principle but use gaseous fuels stored under pressure. They require:
- A high-pressure tank
- A pressure regulator (to reduce tank pressure to engine pressure)
- Modified fuel injectors or carburettor jets

**Benefits:** Lower emissions than petrol/diesel. Generally lower fuel cost. **Limitations:** Reduced tank range, heavier vehicle due to tank weight, limited infrastructure in some regions.

---

### **Hybrid Systems**

A hybrid vehicle combines a combustion engine with an electric motor and a battery. The two systems work together:
- Electric motor assists during acceleration (where combustion engines are least efficient)
- Combustion engine runs efficiently at highway speeds
- Regenerative braking recovers energy back into the battery
- Some hybrids can run on electric power alone for short distances

**Types:** Mild hybrid (electric assists only), Full hybrid (can run on electric alone), Plug-in hybrid (PHEV — larger battery, can be charged externally)

---

### **Maintenance Implication by Engine Type**

| Engine Type | Key Maintenance Items |
|---|---|
| Petrol | Oil, spark plugs, air filter, timing belt/chain |
| Diesel | Oil, fuel filter, air filter, glow plugs |
| CNG/LPG | Pressure regulators, injectors, tank certification |
| Electric | Battery health, coolant (battery), brake fluid |
| Hybrid | All of above for each system it contains |

> For your specific vehicle's maintenance schedule, always refer to the manufacturer's owner manual.`
};

// ── DOMAIN: BATTERY & EV SYSTEMS ────────────────────────────────────────
const K_BATTERY = {
  match: /battery|bms|state.*health|soh|state.*charge|soc|ev.*battery|lithium|cell|battery.*drain|battery.*degrad|battery.*life|range.*loss|charging.*habit|thermal.*runaway|battery.*fire|fast.*charg|slow.*charg|ac.*charg|dc.*charg|kWh|range.*anxiety|battery.*replace|battery.*cost/i,
  answer: () => `## Electric Vehicle Battery Systems — Complete Guide

---

### **What is an EV Battery?**

An EV battery is not a single battery — it is a **battery pack** made of hundreds or thousands of small individual cells. These cells are grouped into modules, and modules are assembled into the pack.

**Common cell chemistry types:**
- **NMC (Nickel Manganese Cobalt)** — high energy density, used in most passenger EVs
- **LFP (Lithium Iron Phosphate)** — lower energy density but longer lifespan, safer, tolerates full charge better. Used in many Chinese EVs, Tesla Model 3 Standard Range, and commercial vehicles.
- **NCA (Nickel Cobalt Aluminium)** — high performance, used in some Tesla models
- **Solid-state** (emerging) — uses solid electrolyte instead of liquid. Promises higher density, faster charging, and much improved safety. Expected in production vehicles by 2027–2030.

---

### **Battery Management System (BMS)**

The BMS is the brain of the battery. It continuously monitors:
- **Voltage** of each individual cell
- **Temperature** across the pack
- **Current** flowing in and out
- **State of Charge (SoC)** — how full the battery is (0–100%)
- **State of Health (SoH)** — overall battery condition over its lifetime (starts at 100%, degrades over time)

The BMS protects the battery by:
- Cutting off charging if temperature is too high or too low
- Balancing cells (ensuring all cells charge and discharge evenly)
- Preventing over-charge or over-discharge
- Communicating with the charger to regulate current

**When the BMS shows a warning:** Never ignore it. A BMS warning is your battery telling you something is wrong.

---

### **State of Health (SoH) — What It Means**

SoH measures how much capacity your battery retains compared to when it was new.

| SoH | What It Means |
|-----|--------------|
| 100% | New battery, full capacity |
| 90% | Excellent — minimal degradation |
| 80% | Good — typical after 3–5 years of normal use |
| 70% | Noticeable range reduction |
| Below 60% | Significant degradation — replacement worth considering |

Most manufacturers warrant their battery to retain 70–80% SoH after a specified period (commonly 8 years / 160,000 km).

---

### **What Degrades a Battery Faster**

**Accelerates degradation:**
1. Charging to 100% every day (creates mechanical stress in cells)
2. Discharging below 10% regularly
3. Frequent DC fast charging (generates more heat)
4. Leaving the vehicle in direct sun with a hot battery
5. Storing a vehicle at very high or very low charge levels for extended periods

**Protects battery longevity:**
1. Daily charging limit set to 80% (use 100% only for long trips)
2. Keeping charge between 20–80% for regular use
3. Preferring slow overnight AC charging as the primary method
4. Parking in shade or cool environments when possible
5. Pre-conditioning the battery before fast charging (many EVs do this automatically via navigation)

---

### **Thermal Runaway — What It Is and How to Prevent It**

Thermal runaway is a dangerous condition where a battery cell overheats, causing neighbouring cells to also overheat in a chain reaction. It can result in fire.

**Causes:**
- Physical damage to the battery pack (impact, puncture)
- Severe overcharging or over-discharging
- Internal short circuit (manufacturing defect or degradation)
- Extreme external heat

**Prevention:**
- Never charge a physically damaged EV — inspect first
- Use certified, manufacturer-approved chargers
- Do not charge immediately after very hard driving (let the battery cool)
- If you notice unusual heat, burning smell, or swelling — stop use and contact the manufacturer or emergency services

**If thermal runaway occurs:**
Move away from the vehicle immediately. Call emergency services. Do not attempt to extinguish a lithium battery fire with water — it can intensify the reaction. Specialist extinguishers or flooding with large volumes of water to cool the exterior are used by trained firefighters.

---

### **Charging Types Explained**

| Type | Common Name | Power Level | Full Charge Time |
|------|-------------|-------------|-----------------|
| AC Level 1 | Standard socket | 1.4–2.4 kW | 12–24 hours |
| AC Level 2 | Home/Public AC wallbox | 3.7–22 kW | 3–8 hours |
| DC Fast Charge | CCS, CHAdeMO, GB/T | 50–150 kW | 20–60 minutes |
| DC Ultra-Fast | HPC / Ionity / Supercharger | 150–350 kW | 10–25 minutes |

**General guidance:** Use AC Level 2 for daily charging. Use DC fast charging when you need speed on a journey. Never rely exclusively on ultra-fast charging.

---

### **Range Anxiety — Practical Approach**

Range anxiety is the fear of running out of charge. It is common with new EV owners and largely disappears with experience.

**Practical management:**
- Plan longer trips using your vehicle's navigation or a charging map app
- Know your vehicle's real-world range (often 15–25% less than the official number in real traffic conditions)
- 80% rule: treat 80% charge as your full tank for daily planning
- Most EV drivers discover they only need DC fast charging 3–5 times per year

---

> **For battery replacement cost and warranty specifics, consult your vehicle manufacturer's official documentation or authorised service centre.**`
};

// ── DOMAIN: BRAKING SYSTEMS ──────────────────────────────────────────────
const K_BRAKES = {
  match: /brake|braking|brake.*pad|disc.*brake|drum.*brake|ABS|regen.*brake|regenerative.*braking|how.*stop|brake.*fluid|brake.*wear|brake.*squeal|brake.*fail|stopping.*distance|brake.*check/i,
  answer: () => `## Braking Systems — How They Work and How to Maintain Them

---

### **Why Brakes Matter**

Brakes are the single most critical safety system on any vehicle. A vehicle that cannot accelerate is inconvenient. A vehicle that cannot stop is dangerous.

---

### **Disc Brakes (Most Cars, Modern Scooters)**

A disc brake works by pressing friction material (brake pads) against a spinning metal disc (rotor) attached to the wheel. The friction converts kinetic energy into heat, slowing the wheel.

**Components:**
- **Rotor (disc)** — the spinning steel disc attached to the wheel hub
- **Caliper** — the hydraulic clamp that squeezes the pads against the rotor
- **Brake pads** — the friction material that contacts the rotor
- **Brake fluid** — hydraulic fluid that transmits your foot/hand pressure to the caliper
- **Master cylinder** — converts mechanical pressure (foot or hand) into hydraulic pressure

**Maintenance indicators:**
- Squealing when braking = wear indicators touching rotor (pad replacement needed soon)
- Grinding metal sound = pads worn through, rotor damage occurring (stop driving, replace immediately)
- Brake pedal feels soft or spongy = air in brake lines or low brake fluid (inspect urgently)
- Vibration when braking = warped rotor (mechanic needed)

---

### **Drum Brakes (Many Two-Wheelers, Older Vehicles)**

Drum brakes work by pressing curved friction material (brake shoes) outward against the inside of a spinning drum. Less efficient at dissipating heat than disc brakes but simpler and cheaper.

**Maintenance indicators:**
- Arrow wear indicator on drum body — when arrow aligns with the limit mark, replace shoes
- Squealing or grinding = shoes worn or contaminated
- Pulling to one side when braking = uneven adjustment

---

### **Regenerative Braking (Electric and Hybrid Vehicles)**

Regenerative braking is one of the most important innovations in modern vehicle efficiency.

**How it works:**
When you release the accelerator or press the brake in an EV or hybrid, the electric motor reverses its function — instead of consuming electricity to create movement, it resists movement and generates electricity, which is fed back into the battery.

**In simple terms:** The motor becomes a generator. Your vehicle slows down AND charges its battery at the same time.

**Benefits:**
- Recovers 10–25% of the energy that would otherwise be lost as heat
- Significantly extends range in stop-start city traffic
- Reduces wear on physical brake pads (some EV owners replace pads far less frequently)
- Smoother, more controlled deceleration when mastered

**One-pedal driving:** Most EVs allow strong enough regenerative braking that you can drive almost entirely using the accelerator — lift off to slow, press to go. Physical brakes are mainly used for emergency stops.

---

### **ABS — Anti-lock Braking System**

ABS prevents wheels from locking up during hard braking. When a wheel locks, the vehicle slides instead of slowing efficiently (you cannot steer a sliding vehicle).

ABS rapidly pulses braking pressure on the wheel — faster than any human can pump the brakes manually. This keeps the wheel rotating, maintaining steering control and achieving the shortest possible stopping distance.

**How to use ABS correctly:** Press the brake pedal firmly and hold it. Do not pump. The pulsing you feel is ABS working. Maintain firm pressure and steer as needed.

ABS is standard on modern cars. Many modern motorcycles and scooters now include it, and studies consistently show it significantly reduces fatal accidents.

---

### **Brake Maintenance Schedule**

| Check | Frequency |
|-------|-----------|
| Visual inspection of pads (through wheel) | Monthly |
| Brake fluid level | Monthly |
| Brake fluid replacement | Every 2 years (fluid absorbs moisture over time) |
| Pad thickness check | Every 10,000 km or at each service |
| Rotor condition check | Each pad replacement |

> **Important:** Brake maintenance intervals vary by vehicle, driving style, and environment. Always refer to your vehicle manufacturer's service manual for exact specifications.`
};

// ── DOMAIN: TYRES ────────────────────────────────────────────────────────
const K_TYRES = {
  match: /tyre|tire|wheel|puncture|flat.*tyre|tyre.*pressure|PSI|tread|tyre.*wear|alignment|balancing|rotation|tyre.*size|tyre.*rating|tyre.*age|run.*flat|tubeless/i,
  answer: () => `## Tyres — Your Vehicle's Only Contact with the Road

---

### **Why Tyres Are Critical**

Every force your vehicle exerts — acceleration, braking, cornering — is transmitted through four small patches of rubber, each roughly the size of a human palm. These four contact patches are your tyres. They are the most important safety components on any vehicle.

---

### **Understanding Tyre Markings**

A tyre sidewall contains all its specifications. Example: **205/55 R16 91V**

| Code | Meaning |
|------|---------|
| 205 | Tyre width in millimetres |
| 55 | Aspect ratio (sidewall height as % of width) |
| R | Radial construction |
| 16 | Wheel diameter in inches |
| 91 | Load index (max load per tyre) |
| V | Speed rating (max safe speed — V = 240 km/h) |

Always match replacement tyres to your vehicle manufacturer's specification. Using the wrong size can affect speedometer accuracy, suspension geometry, and safety.

---

### **Tyre Pressure — The Most Important Weekly Check**

Correct tyre pressure is the single most impactful maintenance action most drivers can do.

**Effects of under-inflation:**
- Increased rolling resistance → worse fuel economy
- Uneven tread wear → shorter tyre life
- Reduced handling precision → longer stopping distance
- Risk of tyre failure at high speed

**Effects of over-inflation:**
- Centre tread wears faster
- Reduced contact patch → less grip
- Harsher ride, more susceptible to damage from potholes

**Correct pressure:** Always in your vehicle's door jamb sticker or owner's manual (not on the tyre sidewall — that shows maximum pressure). Check when the tyre is cold (before driving).

For most passenger cars: **30–35 PSI front, 32–38 PSI rear** (but check YOUR vehicle's specification).
For most scooters: **25–30 PSI front, 28–35 PSI rear** (check your vehicle's specification).

---

### **Tread Depth — The Legal and Safety Minimum**

Tread channels the water away from the contact patch. When tread wears down, wet-weather grip decreases dramatically.

**Legal minimum tread depth in most countries:** 1.6 mm
**Recommended replacement threshold:** 3 mm (significantly better wet performance)
**New tyre tread depth:** typically 7–8 mm

**Simple check:** In India and many countries, a 1 rupee coin (or equivalent) can be used. Insert the coin into the tread groove. If the tread does not reach the lion's feet marking, the tyre needs replacement.

---

### **Tyre Age**

Even if a tyre appears to have good tread, rubber degrades with age due to UV exposure, heat cycles, and oxidation.

**Recommended:** Replace tyres older than **5 years** regardless of tread depth. Inspect carefully from **3 years** onward for cracking on sidewalls or between tread blocks.

**How to check tyre age:** Look for the DOT code on the sidewall. The last four digits indicate the week and year of manufacture. Example: **3819** = 38th week of 2019.

---

### **Tubeless vs. Tube-Type Tyres**

| Feature | Tubeless | Tube-Type |
|---------|----------|-----------|
| Puncture deflation | Slow (sealant helps) | Fast (tube loses air quickly) |
| Repair ease | Plug/patch from outside | Must remove wheel and tube |
| Safety at puncture | Can often drive short distance | May cause sudden loss of control |
| Weight | Lighter | Heavier |
| Cost | Slightly higher | Lower |

Most modern vehicles use tubeless tyres. If tubeless tyres are fitted to a rim designed for tubes only, this is unsafe — always ensure compatibility.

---

### **Tyre Rotation and Balancing**

**Rotation:** Moving tyres to different positions (e.g., front to rear) every 8,000–12,000 km ensures they wear evenly, extending overall tyre life.

**Balancing:** Wheel and tyre assemblies are balanced by adding small weights. Imbalance causes vibration at certain speeds and uneven wear.

**Wheel alignment:** Ensuring all wheels point in the correct direction. Misalignment causes rapid uneven wear and can cause the vehicle to pull to one side.

> **Verification:** Always check your vehicle manufacturer's manual for tyre specifications. For legal requirements in your region, consult your local transport authority.`
};

// ── DOMAIN: SUSPENSION & STEERING ───────────────────────────────────────
const K_SUSPENSION = {
  match: /suspension|shock.*absorber|spring|strut|McPherson|steering|alignment|pothole|bounce|vibrat.*wheel|ride.*quality|handling|toe|camber|caster|ball.*joint|tie.*rod/i,
  answer: () => `## Suspension and Steering Systems

---

### **Purpose of Suspension**

The suspension system has two equally important jobs:

1. **Comfort:** Absorb bumps and road irregularities so passengers feel a smooth ride
2. **Safety:** Keep all four tyres in contact with the road surface at all times — because a tyre in the air cannot brake, steer, or accelerate

A vehicle without suspension would bounce off every bump, losing road contact and becoming uncontrollable.

---

### **Main Suspension Types**

**MacPherson Strut (most common on front of modern cars)**
Combines a coil spring and shock absorber into a single unit. Simple, cost-effective, takes up less space. Used on the front axle of most small to medium cars.

**Double Wishbone**
Uses two A-shaped arms (wishbones) to control wheel movement. More precise handling, better maintains tyre contact angle during cornering. Used on sports cars and larger vehicles.

**Multi-Link**
Complex arrangement of separate links allowing precise independent control of each wheel. Excellent handling, used on performance and premium vehicles.

**Leaf Spring (trucks, buses, older vehicles)**
Stacked flat metal springs — simple, strong, good for heavy loads. Less comfortable than coil springs for passengers.

**Telescopic Fork (motorcycles and scooters)**
The standard front suspension for two-wheelers. Two tubes — one slides inside the other, with a spring and oil damper inside. Provides both spring and damping action.

---

### **Shock Absorbers (Dampers)**

A spring alone would cause the vehicle to bounce continuously after a bump. The shock absorber controls this oscillation by converting the spring's kinetic energy into heat through hydraulic resistance.

**Signs of worn shock absorbers:**
- Vehicle continues to bounce after a bump (more than 1–2 oscillations)
- Vehicle nose dives severely under braking
- Uneven tyre wear (scalloping pattern)
- Reduced cornering stability
- Leaking oil on the shock absorber body

Most shock absorbers should be inspected at 50,000 km and replaced if showing these signs. In regions with poor road quality (many potholes), earlier wear is expected.

---

### **Steering Systems**

**Rack and Pinion:** A rotating pinion gear moves a horizontal rack (bar), which connects to the wheel via tie rods. Direct, precise, used in most modern passenger cars.

**Power Steering:** Adds hydraulic or electric assistance to reduce steering effort. Electric Power Steering (EPS) is now standard in most vehicles — it uses an electric motor and consumes energy only when steering, improving fuel efficiency.

**Wheel Alignment — Critical for Safety and Tyre Life**

Three key angles:
- **Toe:** Whether front of tyres point inward (toe-in) or outward (toe-out) — incorrect toe causes rapid tyre wear
- **Camber:** Tilt of tyre inward or outward from vertical — affects handling and wear
- **Caster:** Angle of steering axis — affects straight-line stability

**Alignment should be checked:**
- After any significant pothole or curb impact
- When fitting new tyres
- Every 10,000–15,000 km as preventive maintenance
- If the vehicle pulls to one side or the steering wheel is off-centre

---

### **For Two-Wheeler Suspension (Scooters and Motorcycles)**

**Front:** Telescopic forks (most common) — oil quality and level matters for damping performance
**Rear:** Monoshock (single shock absorber, sportier) or twin shocks (dual absorbers, simpler)

**Signs of suspension issues on two-wheelers:**
- Excessive dive under braking
- Rear bouncing over bumps
- Oil leaks from fork seals
- Handling feels vague or unstable in corners

> **Note:** Suspension wear rates vary significantly by road quality, load, and riding style. In regions with heavy pothole exposure, inspections every 20,000 km are advisable. Always consult your vehicle manual for specific service intervals.`
};

// ── DOMAIN: ELECTRICAL SYSTEMS ──────────────────────────────────────────
const K_ELECTRICAL = {
  match: /electrical|wiring|fuse|relay|alternator|starter.*motor|ignition|ECU|OBD|warning.*light|dashboard.*light|battery.*12v|lead.*acid|battery.*flat|dead.*battery|jump.*start|short.*circuit|earthing|grounding/i,
  answer: () => `## Vehicle Electrical Systems — How They Work

---

### **The Two-Voltage World**

Most combustion vehicles operate on **12-volt systems** for all accessories and controls. Electric vehicles have both a **high-voltage system** (the traction battery — typically 200–800 volts) and a **12-volt auxiliary system** (for controls, lights, and accessories). The two systems are electrically isolated from each other for safety.

---

### **The 12V System (All Vehicles)**

**Battery (12V lead-acid):** Provides power to start the engine and run all electrical accessories when the engine is off. In EVs, a separate 12V battery runs all low-voltage systems. This 12V battery still needs replacement like any other battery (typically every 3–5 years).

**Alternator (combustion vehicles):** Once the engine starts, the alternator generates electricity to run all systems AND recharge the 12V battery. If the alternator fails, the battery drains and the vehicle will eventually stop.

**ECU (Engine/Electronic Control Unit):** The brain of the vehicle. It reads hundreds of sensors every second and adjusts fuel injection, ignition timing, emissions systems, and more. Modern vehicles can have 50–100 ECUs controlling different systems.

**OBD (On-Board Diagnostics):** A standardised port (usually under the dashboard) that allows mechanics to read fault codes stored by the ECU. When a warning light illuminates, the ECU stores a diagnostic trouble code (DTC) which tells a mechanic exactly what the system detected as abnormal.

---

### **Warning Lights — What They Mean**

**Approach warning lights by colour:**

🔴 **Red = Stop and Act Immediately**
The vehicle has detected a condition that could cause serious damage or is unsafe to continue. Pull over safely when possible.
- Engine oil pressure (oil can with drop)
- Engine temperature (thermometer in water)
- Battery / charging system
- Brake system
- Airbag / SRS system

🟡 **Amber/Orange = Attention Required Soon**
A system needs attention. The vehicle is usually safe to drive but needs service shortly.
- Check Engine (engine outline)
- Traction Control off
- Tyre pressure low (TPMS)
- Service due
- Fuel level low

🟢 **Green = System Active (informational)**
- Indicators active
- High beam on
- Cruise control active

🔵 **Blue = Informational**
- High beam indicator (in some vehicles)

---

### **Fuses and Circuit Protection**

Fuses protect electrical circuits by breaking (blowing) when current exceeds safe levels. A blown fuse indicates a short circuit or overloaded component.

**Never replace a fuse with a higher-rated one** — fuses protect wiring, not just components. Using a higher-amperage fuse can allow wires to overheat and cause fire.

Fuse box location is in your owner's manual. Always carry spare fuses of correct ratings.

---

### **Jump Starting a Flat Battery — Safe Procedure**

Only use this with 12V lead-acid systems. Never attempt to jump-start an electric vehicle's high-voltage system.

**Correct sequence:**
1. Connect positive (red) clamp to dead battery positive terminal
2. Connect positive (red) clamp to good battery positive terminal
3. Connect negative (black) clamp to good battery negative terminal
4. Connect negative (black) clamp to an **unpainted metal part of the dead vehicle's engine block** (not the battery negative — this prevents spark near the battery)
5. Start the good vehicle, run for 2 minutes
6. Start the dead vehicle
7. Remove clamps in reverse order

**Do not jump-start if:**
- Battery is frozen
- Battery is cracked or leaking
- Vehicle is an EV (traction battery — leave to professionals)

---

### **Electrical Safety — Absolute Rules**

- Never work on high-voltage EV systems without professional training
- Never cut, modify, or splice vehicle wiring without understanding the circuit
- If you smell burning plastic near the vehicle — investigate immediately
- Corroded battery terminals are a common cause of starting problems — clean gently with baking soda and water, rinse, dry

> **For any persistent warning light or electrical fault, consult a qualified vehicle technician. Complex electrical diagnostics require specialist tools.**`
};

// ── DOMAIN: SAFE COMMUTING ───────────────────────────────────────────────
const K_COMMUTE = {
  match: /safe.*commut|commut.*safe|commut.*guide|traffic.*safe|road.*safe|safe.*riding|safe.*driving|defensive.*driv|safe.*road|accident.*prevent|two.*wheel.*safe|motorcycle.*safe|how.*stay.*safe.*road/i,
  answer: () => `## Safe Commuting — A Global Guide

---

### **Universal Safety Principles**

These principles apply regardless of vehicle type, country, or road condition:

**1. Be Predictable**
Other road users can only react to what they expect. Signal before every lane change and turn. Maintain consistent speed. Do not weave through traffic. Unpredictable movement is a major cause of collisions.

**2. Create Space**
The most important space is ahead of you. The gap between you and the vehicle in front determines how much time you have to react. At 60 km/h, you travel 17 metres per second. If your reaction time is 1.5 seconds, you need 25 metres just to begin braking.

**Safe following distance guide:**
- 2-second rule: pick a fixed point — the vehicle ahead passes it, count "one thousand one, one thousand two" — you should not pass it before finishing
- In adverse conditions (rain, fog, night): double to 4 seconds minimum

**3. Eliminate Distractions**
Phone use while driving increases accident risk by 4–6 times. Even hands-free calls impair concentration significantly. If you need to use a phone, stop safely first.

**4. Match Speed to Conditions**
Speed limits are set for ideal conditions. In rain, fog, at night, on unfamiliar roads, or in heavy traffic — reduce speed appropriately. You cannot always rely on the posted limit.

---

### **Two-Wheeler Safety (Scooters, Motorcycles)**

Two-wheelers are statistically more dangerous per kilometre than cars because they offer no protective structure around the rider. Knowledge and habits close this gap significantly.

**Essential habits:**
- **Helmet:** Full-face or at minimum open-face with chin protection. A helmet prevents approximately 37% of fatal injuries and 69% of head injuries in crashes. There is no condition where riding without a helmet is safer than with one.
- **Protective clothing:** Jackets with armour at elbows and shoulders, riding gloves, and boots covering the ankle reduce injury severity dramatically.
- **Visibility:** Wear bright or reflective clothing. Assume car drivers cannot see you. Avoid riding in blind spots.
- **Lane positioning:** Ride in the part of the lane where you are most visible to other drivers — often slightly left of centre in the left lane, to be visible in their mirrors.
- **Countersteering:** At speeds above 20–25 km/h, leaning/steering a two-wheeler requires countersteering (pushing the handlebar in the direction of the turn). Understanding this instinctively can prevent panic steering errors.

**Pre-ride check (T-CLOCS):**
- **T**yres — pressure and condition
- **C**ontrols — throttle, clutch, brakes operate freely
- **L**ights — all working
- **O**il/fluids — levels correct
- **C**hassis — chain/belt, stands, frame
- **S**tands — retract fully

---

### **Car and Larger Vehicle Safety**

- **Mirror use:** Check mirrors every 5–8 seconds in normal traffic, always before lane changes and braking
- **Blind spots:** Always check over your shoulder before changing lanes — mirrors do not cover everything
- **Night driving:** Reduce speed. High beams where appropriate. Be alert for pedestrians in darker clothing.
- **Wet roads:** Tyres have significantly less grip on wet surfaces. Stopping distance at 80 km/h on wet road is approximately 40% longer than dry.
- **Fatigue:** Driving fatigue is as dangerous as low-level intoxication. Stop and rest if yawning frequently or eyes feel heavy.

---

### **Pedestrians and Cyclists**

Pedestrians are the most vulnerable road users. Cyclists occupy an especially difficult position — more vulnerable than vehicles, faster and less predictable than pedestrians.

**When driving near cyclists:**
- Give at least 1–1.5 metres lateral clearance when passing
- Check for cyclists before opening car doors (the "Dutch reach" — open door with opposite hand, forcing you to look back)
- Watch for cyclists at intersections — they are frequently in blind spots

**For cyclists:**
- Make yourself visible — lights front and rear, reflective clothing
- Use hand signals before every turn
- Be predictable — do not weave between parked cars suddenly
- Make eye contact with drivers before crossing their path

---

### **Adapting for Different Environments**

| Condition | Key Adaptations |
|-----------|----------------|
| Heavy rain | +50% following distance, reduced speed, watch for standing water |
| Fog | Low-beam headlights, fog lights if fitted, follow road edge |
| Night | Reduce speed, high beams on open roads, watch for animals/pedestrians |
| Extreme heat | Check tyre pressure (heat increases pressure), carry water |
| Flooded roads | **Do not cross if you cannot see the road surface** — even 30 cm of flowing water can sweep away a small vehicle |
| Mountain roads | Low gear on descents, sound horn before blind bends |
| Highway/expressway | Maintain lane discipline, match traffic speed |

---

> **Regulations, speed limits, and specific legal requirements vary by country and region. Always familiarise yourself with local traffic laws before driving in an unfamiliar area.**`
};

// ── DOMAIN: POWER SYSTEM COMPARISON ─────────────────────────────────────
const K_COMPARE = {
  match: /ev.*vs.*petrol|petrol.*vs.*ev|electric.*vs.*diesel|cng.*vs.*petrol|hybrid.*vs.*electric|which.*better.*ev|should.*buy.*ev|compare.*fuel|fuel.*comparison|total.*cost.*own|TCO|running.*cost.*compare|diesel.*vs.*cng|best.*fuel.*type/i,
  answer: () => `## Comparing Vehicle Power Systems — An Objective Analysis

This comparison is neutral. Every technology has genuine advantages and real limitations. The best choice depends on your specific situation.

---

### **The Five Main Power Systems**

| Factor | Petrol | Diesel | CNG/LPG | Hybrid | Full EV |
|--------|--------|--------|---------|--------|---------|
| Upfront cost | Medium | Medium-High | Medium | Higher | Highest |
| Fuel/running cost | Medium | Lower | Lowest (where available) | Low | Very Low |
| Refueling time | 3–5 min | 3–5 min | 5–10 min | 3–5 min | 20 min–8 hrs |
| Range per fill | 400–700 km | 500–900 km | 200–400 km | 600–1000 km | 150–600 km |
| Infrastructure | Excellent | Excellent | Limited in many areas | Uses petrol stations | Growing rapidly |
| Maintenance cost | Medium | Medium-Low | Low-Medium | Medium | Lowest |
| Emissions | High | High (NOx) | Lower | Lower | Zero local |
| Cold weather impact | Minimal | Slight | Slight | Slight | Noticeable |
| Maturity | Very mature | Very mature | Mature | Mature | Developing |

---

### **Petrol**

**Strengths:**
- Most widely available infrastructure globally
- Fastest refueling of any technology
- Enormous variety of vehicles available
- Well-understood, highly available service network everywhere

**Limitations:**
- Highest running fuel cost of combustion technologies
- Significant CO2 and particulate emissions
- Fuel prices tied to global oil markets (volatile)
- Less torque at low RPM compared to diesel or electric

**Best for:** Users in areas with limited alternative infrastructure, those who regularly travel long distances, regions where electricity supply is unreliable.

---

### **Diesel**

**Strengths:**
- Better fuel economy than petrol (typically 15–25% more km per litre)
- More torque at low RPM — excellent for towing, hills, and heavy loads
- Long range on a single tank
- Still dominant for commercial, heavy transport globally

**Limitations:**
- Higher upfront purchase cost
- Higher NOx and particulate emissions (cause of urban air quality issues)
- More expensive engine maintenance (injection systems, DPF)
- Increasing regulatory restrictions in many cities worldwide

**Best for:** Long-distance drivers, commercial vehicles, towing applications, rural areas with poor electricity infrastructure.

---

### **CNG (Compressed Natural Gas) and LPG (Liquefied Petroleum Gas)**

**Strengths:**
- Lower CO2 emissions than petrol/diesel (CNG approximately 20–25% lower)
- Lower fuel cost per km where available
- LPG available in many countries, CNG growing rapidly
- Suitable for fleet conversions in some markets

**Limitations:**
- Smaller fuel tank range than petrol/diesel
- Added weight of pressure tank
- Infrastructure is limited in many regions
- Tank certification required periodically (safety regulation)
- Vehicle conversions must be done by certified professionals only

**Best for:** Urban fleets, taxis, bus operators, regions with strong CNG/LPG infrastructure.

---

### **Hybrid (HEV and PHEV)**

**Strengths:**
- Best fuel economy of any combustion-based technology
- Uses existing petrol/diesel infrastructure
- No range anxiety — combustion backup always available
- Significant city driving efficiency gains (regenerative braking)
- PHEV models can run on electricity for daily commutes

**Limitations:**
- Higher upfront cost than petrol equivalent
- More complex drivetrain — two systems to maintain
- Battery degradation (though hybrid batteries often outlast EV batteries due to smaller size and shallower cycling)
- PHEV only efficient if plugged in regularly

**Best for:** Drivers who travel both urban and long-distance routes, those not yet ready for full EV, areas with developing charging infrastructure.

---

### **Full Electric (BEV)**

**Strengths:**
- Lowest running cost per km
- Zero local emissions
- Lowest maintenance requirements (no oil, no spark plugs, few moving parts)
- Instant torque — strong acceleration
- Can charge at home overnight
- Energy cost predictable (electricity price vs. volatile fuel prices)

**Limitations:**
- Highest upfront purchase cost
- Charging time significantly longer than refueling
- Range affected by weather, speed, heating/cooling use
- Charging infrastructure still developing in many regions
- Battery replacement eventual cost
- Performance reduced in extreme cold

**Best for:** Urban commuters with home charging, second vehicle in a household, users with predictable daily distances, regions with good charging networks.

---

### **The Total Cost of Ownership Consideration**

Upfront cost is only part of the picture. Over 5 years, consider:
- Fuel or electricity cost
- Servicing and maintenance
- Insurance
- Tyres and consumables
- Resale value

In many markets, the **higher upfront cost of EVs and hybrids is partially or fully recovered** through lower running costs over 3–5 years, depending on local fuel and electricity prices, and annual mileage.

---

> **Important:** Total cost calculations, government incentives, and infrastructure availability vary significantly by country and region. Always research current incentives, charging infrastructure, and local conditions before purchasing. Consult manufacturer and government resources for up-to-date information in your area.`
};

// ── DOMAIN: FLEET MANAGEMENT ─────────────────────────────────────────────
const K_FLEET = {
  match: /fleet|multiple.*vehicle|commercial.*vehicle|fleet.*manage|fleet.*maintenance|cost.*per.*km|CPK|fleet.*cost|preventive.*maintenance|vehicle.*utilization|fleet.*safety|bus.*fleet|truck.*fleet|delivery.*fleet/i,
  answer: () => `## Fleet Management — Knowledge Guide

---

### **What Is Fleet Management?**

Fleet management is the coordination of all activities related to a group of vehicles used for commercial or operational purposes. This includes acquisition, maintenance, fuel management, driver management, safety, and compliance.

Effective fleet management reduces costs, extends vehicle life, improves safety, and ensures legal compliance.

---

### **The Core Metric: Cost Per Kilometre (CPK)**

CPK is the total operating cost of a vehicle divided by the distance it travels.

**CPK = (Fuel + Maintenance + Tyres + Insurance + Depreciation) ÷ Total Kilometres**

Tracking CPK for each vehicle reveals:
- Which vehicles are becoming uneconomical to operate
- Whether maintenance is effective or reactive
- When to replace a vehicle vs. continue operating it

A rising CPK trend is an early warning that a vehicle needs attention.

---

### **Preventive vs. Reactive Maintenance**

| Type | When | Average Cost Ratio |
|------|------|-------------------|
| Preventive | Scheduled, before failure | 1× |
| Predictive | Data-triggered, before failure | 1.5× |
| Reactive (breakdown) | After failure | 3–5× |

**Key insight:** Every ₹100 (or equivalent) spent on preventive maintenance saves ₹300–500 in reactive repairs and avoids the hidden costs of vehicle downtime.

---

### **Standard Fleet Maintenance Calendar**

| Interval | Action |
|----------|--------|
| Daily (driver check) | Tyre pressure, fluid levels visual, lights, unusual sounds or warning lights |
| Weekly | Tyre condition and pressure measurement, brake function test, oil level |
| Monthly | Full fluid check, battery terminals, belt condition, suspension check |
| Every 5,000 km | Oil change (petrol/diesel), filter checks |
| Every 10,000 km | Brake pad measurement, tyre rotation, wheel alignment check |
| Every 20,000 km | Coolant check, transmission fluid, deep inspection |
| Annual | Full vehicle inspection, government certification renewal (if required) |

---

### **Driver Behaviour and Vehicle Life**

Vehicle maintenance extends life. But driver behaviour can accelerate wear faster than almost any other factor.

**Habits that significantly increase wear:**
- Hard acceleration from stops (engine and transmission wear)
- Late braking (brake pad and rotor wear)
- Overloading (suspension, tyre, and drivetrain wear)
- Ignoring warning indicators (small problems become expensive ones)
- Not warming up diesel engines briefly in cold conditions

**Driver training investment:** Studies consistently show that fleet driver training programs recover their cost within 6–12 months through reduced fuel consumption, lower maintenance costs, and fewer accidents.

---

### **EV Fleet Considerations**

Electric vehicles present specific opportunities and challenges for fleets:

**Opportunities:**
- Significantly lower fuel cost per km
- Much lower scheduled maintenance (no oil, filters, spark plugs)
- Predictable energy costs vs. volatile fuel prices
- Lower noise — important for residential delivery routes

**Challenges:**
- Charging infrastructure planning — each vehicle needs access to charging
- Range planning — route management becomes critical
- Driver training on charging etiquette and range management
- Battery degradation monitoring at fleet scale

**For mixed fleets:** EVs often perform best on predictable urban routes with overnight charging. Combustion or hybrid vehicles may be more practical for variable long-distance routes.

---

### **Safety Management in Fleets**

A fleet's safety record is a legal and reputational responsibility.

**Essential safety systems:**
- Regular vehicle inspection before every shift (driver-reported checklist)
- Defined process for removing vehicles with safety defects from service
- Incident reporting and root cause analysis
- Speed monitoring and driver feedback
- Load securing training (for cargo vehicles)
- Fatigue management policies for long-route drivers

> **Regulatory note:** Fleet vehicle certification, driver licensing requirements, load regulations, and mandatory inspection intervals vary significantly by country. Always consult your national and local transport authority for compliance requirements.**`
};

// ── DOMAIN: TRAINS, SHIPS, AIRCRAFT ──────────────────────────────────────
const K_TRANSPORT = {
  match: /train|railway|rail|metro|subway|locomotive|maglev|ship|vessel|maritime|cargo.*ship|container.*ship|aircraft|airplane|aviation|helicopter|jet.*engine|turbine.*engine|how.*fly|how.*train.*work|how.*ship.*work|public.*transport/i,
  answer: () => `## Beyond Road Vehicles — Trains, Ships, and Aircraft

---

### **Railways — How Trains Work**

**The fundamental advantage of rail:** Steel wheels on steel rails have far less rolling resistance than rubber tyres on tarmac. This is why trains can move enormously heavy loads at high speed efficiently. A train can be 10–15 times more fuel-efficient per tonne-km than a truck.

**Conventional locomotive traction:**
- **Diesel-electric:** The diesel engine drives a generator. The generator powers electric motors at each axle. This combination — diesel combustion to generate electricity, then electric motors to drive wheels — is more efficient than a direct mechanical drive.
- **Electric:** Pantograph collects electricity from overhead lines (catenary). Direct power to electric traction motors. Zero local emissions, very high efficiency. Requires electrified infrastructure.
- **Diesel-hydraulic:** Hydraulic transmission connects diesel engine to wheels. Used in some older and regional railways.

**High-Speed Rail (HSR):**
Trains like Japan's Shinkansen (300+ km/h), France's TGV, or China's CRH achieve high speeds through:
- Electric traction (no combustion engine mass)
- Aerodynamic design
- Dedicated, perfectly flat, gently curved tracks
- Tilting mechanisms on some designs (allow higher speed on curves)

**Maglev (Magnetic Levitation):**
The train floats above the track on magnetic fields — no contact, no friction. The world's fastest commercial train, Shanghai Maglev, reaches 431 km/h. Japan's SCMaglev has demonstrated 603 km/h in testing.

---

### **Ships — How They Move**

**Propulsion:**
Most large ships use **diesel engines** (sometimes two-stroke — slow, massive, extremely efficient) connected to propeller shafts. Very large vessels use diesel-electric systems similar to locomotives.

**LNG (Liquefied Natural Gas)** is growing as a marine fuel — lower emissions than heavy fuel oil, now used in ferries, container ships, and cruise ships.

**How ships are steered:**
The rudder — a large flat surface behind the propeller — deflects the water flow from the propeller, turning the ship. At low speeds, **bow thrusters** (propellers inside tunnels at the front of the ship) provide manoeuvring capability in harbour.

**Shipping scale:**
The largest container ships carry up to 24,000 standard containers. A single large container ship can carry the goods that would require 2,500 trucks. Maritime shipping carries approximately 90% of global trade by volume.

---

### **Aircraft — How Flight Works**

**The Four Forces:**
- **Lift** — upward force from wings (greater than weight keeps the plane airborne)
- **Weight** — gravity pulling the aircraft down
- **Thrust** — forward force from engines (greater than drag accelerates the plane)
- **Drag** — air resistance opposing forward movement

**How wings generate lift (Bernoulli + Newton):**
Wing shape (aerofoil) causes air above the wing to move faster than air below. Faster air has lower pressure (Bernoulli's principle). The pressure difference pushes the wing upward. Additionally, the wing's angle of attack deflects air downward, and Newton's third law provides an upward reaction force.

**Jet engines:**
A jet engine works on simple principles: suck (compress air), squeeze (fuel ignites, huge expansion), blow (hot gases expelled backward at high speed, propelling the aircraft forward — Newton's third law). Modern high-bypass turbofan engines are 60–70% fuel efficient for the heat energy in the fuel.

**Flight control:**
- **Ailerons** (wing trailing edges) — roll left/right
- **Elevator** (horizontal tail) — pitch nose up/down
- **Rudder** (vertical tail) — yaw nose left/right

---

### **Public Transport Systems — Urban Mobility**

**Why public transport matters:**
A single bus carrying 50 passengers replaces 40+ cars. Rail-based systems (metro, light rail) can move tens of thousands of people per hour per direction — impossible with private vehicles.

**Types of urban transit:**
- **Bus Rapid Transit (BRT):** Buses with dedicated lanes. Cost-effective, flexible routing, faster to implement than rail.
- **Light Rail / Tram:** Electric rail on city streets. Higher capacity than buses, more permanent, generates urban development.
- **Metro/Subway:** Underground or elevated rail with very high capacity. Very high construction cost but enormous long-term capacity.
- **Suburban/Commuter Rail:** Connects suburbs to city centres. Long distances, frequent stops.

**The future of public transport includes:** full electrification, AI-managed dynamic routing, Mobility-as-a-Service (MaaS) integrated ticketing across all modes, and hydrogen fuel cell buses for routes where overhead wires are impractical.

---

> **Regulations for railways, aviation, and maritime transport are heavily governed by national and international authorities (ICAO for aviation, IMO for shipping, national rail regulators). Always refer to official regulatory bodies for compliance and operational guidance.**`
};

// ── DOMAIN: ENVIRONMENT & SUSTAINABILITY ─────────────────────────────────
const K_ENVIRONMENT = {
  match: /emission|pollution|CO2|carbon|greenhouse|climate|sustainab|environment|green.*vehicle|zero.*emission|net.*zero|lifecycle.*emission|well.*to.*wheel|lifecycle|air.*quality|NOx|particulate|PM2.5|clean.*transport|reduce.*pollution/i,
  answer: () => `## Mobility, Environment, and Sustainability

---

### **The Environmental Impact of Transportation**

Transportation is responsible for approximately **16–23% of global CO2 emissions** (the range reflects different calculation methodologies). Road transport accounts for the majority of this — roughly 75% of transport emissions.

Understanding the full picture requires looking beyond what comes out of the exhaust pipe.

---

### **Well-to-Wheel vs. Tank-to-Wheel**

**Tank-to-Wheel (TTW):** Only measures emissions from operating the vehicle. By this measure, an EV has zero emissions.

**Well-to-Wheel (WTW):** Includes the emissions from producing the fuel or electricity. This is the more honest measure. An EV running on coal-powered electricity may have higher total CO2 than a modern hybrid vehicle. An EV running on renewable electricity has dramatically lower lifecycle emissions.

**Lifecycle Assessment (LCA):** The most complete picture. Includes manufacturing the vehicle, producing the battery, operation, and end-of-life disposal. EV manufacturing (especially the battery) has higher upfront emissions than conventional vehicles, but this is typically recovered within 1–3 years of operation depending on the grid.

---

### **Emissions by Vehicle Type (Approximate Lifecycle)**

| Vehicle | gCO2eq / km (average grid) | gCO2eq / km (clean grid) |
|---------|--------------------------|--------------------------|
| Petrol car | 200–250 | 200–250 |
| Diesel car | 170–220 | 170–220 |
| Hybrid | 110–140 | 110–140 |
| Full EV | 70–120 | 20–50 |
| Bus (diesel, urban) | 90–130 per passenger | — |
| Electric train | 20–40 per passenger | 5–15 per passenger |
| Long-haul aircraft | 250–350 per passenger | — |
| Container ship | 10–15 per tonne | — |

*Note: These are approximate global averages. Actual values vary significantly by region, vehicle efficiency, load factor, and energy mix.*

---

### **Battery Environmental Considerations**

**Raw materials:** Lithium-ion batteries require lithium, cobalt, nickel, manganese, and other materials. Mining these has real environmental and social impacts. Responsible sourcing standards are being developed and implemented by major manufacturers.

**Battery recycling:** This is improving rapidly. Lithium, cobalt, and nickel can be recovered from used batteries at increasingly high rates. Regulatory frameworks in Europe, China, and elsewhere are establishing mandatory recycling requirements. Many manufacturers offer battery take-back programs.

**Second life:** Before recycling, EV batteries that have degraded below the threshold for vehicle use (typically 70–80% SoH) can still serve as stationary energy storage — for homes, businesses, or grid support. This extends their useful life significantly.

---

### **The Real Urban Air Quality Issue**

Beyond CO2, urban air quality is a significant public health concern.

**NOx (nitrogen oxides):** Primarily from diesel engines. Causes respiratory disease. This is a key reason many cities are restricting diesel vehicles in urban centres.

**PM2.5/PM10 (particulate matter):** From incomplete combustion, brake dust, and tyre wear. Penetrates deep into lungs. All vehicles — including EVs (from tyre and brake wear) — contribute to some extent.

**EVs in cities:** By eliminating combustion, EVs eliminate tailpipe NOx, CO, and hydrocarbon emissions entirely. This has a direct, measurable positive impact on urban air quality regardless of the electricity source.

---

### **Sustainable Urban Mobility — What Works**

Evidence from cities globally shows the most effective approaches include:

1. **Public transport investment** — the highest-capacity, lowest-emission per-passenger option
2. **Active mobility infrastructure** — dedicated cycling paths and pedestrian zones
3. **Mixed land use planning** — reducing the need to travel as a first priority
4. **Vehicle electrification** — transitioning public fleets first (buses, taxis), then private vehicles
5. **Demand management** — congestion pricing, parking management to reduce unnecessary journeys
6. **Last-mile solutions** — e-bikes, e-scooters, and small EVs for the last portion of journeys

---

> **Scientific consensus on climate change and its relationship to emissions is well-established. For the most current emissions data and government policy in your region, consult your national environment ministry or transport authority.**`
};

// ── DOMAIN: USED VEHICLE INSPECTION ─────────────────────────────────────
const K_USED = {
  match: /buy.*used|used.*vehicle|second.*hand|pre.*own|inspect.*buy|check.*before.*buy|buying.*second|used.*car.*check|used.*ev.*check|used.*scooter|used.*bike|how.*inspect|pre.*purchase/i,
  answer: () => `## Used Vehicle Inspection — Complete Guide

---

### **Why This Matters**

Buying a used vehicle without proper inspection is one of the most financially risky decisions in personal transportation. A thorough inspection — which can be done systematically — protects you from hidden problems.

---

### **Section 1 — Documents First (Do This Before Anything Else)**

1. **Registration Certificate (RC):** Does the name on the RC match the person selling you the vehicle? Is the vehicle description correct (make, model, colour, engine number, chassis number)?
2. **Insurance:** Is current insurance valid? Any history of major claims?
3. **Service records:** Ask for all maintenance records. A well-maintained vehicle will have them. Gap in records needs explanation.
4. **Loan clearance:** Is there an active loan against the vehicle? In many countries, buying a vehicle with an outstanding loan creates legal complications. Request a No-Objection Certificate (NOC) from the financier.
5. **Road tax payment history:** Verify payments are current.

> In India: You can verify basic vehicle registration details through the official Vahan portal (vahan.parivahan.gov.in). Other countries have equivalent national systems.

---

### **Section 2 — Exterior Inspection**

**Body and paint:**
- Open all doors and the boot. Close them. All should close smoothly and flush.
- Look at the paint from a low angle in good light. Ripples, texture changes, or colour variations suggest panel replacement or repainting after accident damage.
- Check the rubber seals around all doors and windows. Damaged seals suggest impact or age-related deterioration.
- Inspect under the vehicle with a torch. Look for bent metal, fresh paint on the underside (hides accident damage or rust), or evidence of chassis repairs.

**Glass:**
- Inspect all glass for chips, cracks, or replacement (aftermarket glass often lacks the OEM logo and may not be optically correct).

---

### **Section 3 — Under the Bonnet (Combustion Vehicles)**

Do this when the engine is cold.

1. **Oil:** Pull the dipstick. Oil should be amber to brown — black and thick suggests delayed service. Creamy/frothy oil indicates possible head gasket failure (water and oil mixing — serious and expensive).
2. **Coolant reservoir:** Should be at the correct level and clean. Brown, rusty, or low coolant is a warning sign.
3. **Battery terminals:** Look for corrosion (white or greenish deposits).
4. **Belts:** Timing belt and accessory belts should not show fraying or cracking.
5. **Engine bay cleanliness:** An unusually clean engine bay may indicate a recent oil leak cleanup. Look for wet spots, stains, or fresh grime.

---

### **Section 4 — Test Drive (15–20 Minutes Minimum)**

**Start from cold:**
- Any smoke from exhaust on cold start? Blue smoke = oil burning (worn piston rings or seals). White smoke = coolant entering combustion (head gasket). Black smoke = rich fuel mixture. Brief white mist on cold morning is normal condensation.

**During driving:**
- Any unusual noises — knocking, ticking, grinding, whining?
- Does the vehicle pull to one side under acceleration or braking?
- Do all gears engage smoothly? Any slipping or reluctance?
- Steering wheel centred when driving straight?

**Braking test (in a safe, clear area):**
- Brake from 40–50 km/h. Vehicle should stop straight and quickly.
- Any pulsation, pulling, or squealing?

**Suspension:**
- Drive over a speed bump slowly. Single controlled movement each side = good. Multiple bounces = worn shock absorbers.

---

### **Section 5 — Electric Vehicle Specific**

For used EVs, add these critical checks:

1. **Battery State of Health (SoH):**
Ask the seller to show you the battery health reading in the manufacturer's app or through an OBD diagnostic tool. Many EV dealerships and third-party services offer battery health reports.
- 85–100% SoH: Excellent
- 75–84% SoH: Good
- 65–74% SoH: Acceptable, factor replacement cost into negotiation
- Below 65%: Only acceptable at a significant discount — battery replacement is expensive

2. **Charging port inspection:** Look for burn marks, deformation, or corrosion around the charging port.

3. **Actual range test:** Charge to 100%, reset the trip meter, drive normally until reaching 10–15%, and compare actual distance to the vehicle's rated range. This gives the most honest view of real battery capacity.

4. **Software and service history:** EVs often receive over-the-air software updates. Confirm the vehicle has received all manufacturer updates.

---

### **Section 6 — Professional Pre-Purchase Inspection**

For any vehicle above a modest price point, spend ₹500–₹2,000 (or equivalent in your currency) for an independent mechanic's inspection. This is the most cost-effective step available.

A qualified mechanic can:
- Measure brake pad thickness precisely
- Check actual compression (engine health)
- Perform diagnostic scan for stored fault codes
- Assess structural integrity more thoroughly

**The investment:** If the inspection reveals a problem, you save far more than the inspection cost. If it reveals the vehicle is in good condition, you buy with confidence.

---

> **Always verify legal requirements for vehicle transfer, road tax transfer, and insurance in your specific country and region. Requirements vary significantly.**`
};

// ── DOMAIN: RESEARCH & INNOVATION ────────────────────────────────────────
const K_RESEARCH = {
  match: /research|innovation|future|solid.*state|hydrogen.*fuel|autonomous|self.*driv|congestion.*solut|hyperloop|urban.*design|smart.*city|V2G|vehicle.*grid|wireless.*charg|inductive.*charg|drones.*deliver|flying.*car|battery.*breakthrough|next.*generation/i,
  answer: () => `## Mobility Research and Future Innovation

*Research mode: The following reflects current evidence and development trajectories. Innovation is uncertain — timelines often shift. Always evaluate claims critically.*

---

### **Battery Technology — What Is Coming**

**Solid-State Batteries**
The most anticipated near-term breakthrough. Current lithium-ion batteries use a liquid or gel electrolyte to move ions between electrodes. Solid-state batteries replace this with a solid ceramic or glass electrolyte.

*Potential advantages:*
- Higher energy density (more range, or smaller/lighter batteries)
- Faster charging (less thermal management concern)
- Longer cycle life (potentially twice the cycles of current lithium-ion)
- Improved safety (no flammable liquid electrolyte)

*Current status:* Toyota, QuantumScape, Samsung SDI, and others have demonstrated working cells. Scale-up manufacturing is the primary challenge. Early production vehicles expected 2027–2030.

**Sodium-Ion Batteries**
Uses sodium instead of lithium — sodium is enormously more abundant and cheaper. Lower energy density than lithium-ion, but increasingly competitive for urban vehicles and stationary storage. CATL (China) has begun commercial production. Expect to see sodium-ion in lower-range urban EVs and two-wheelers within 3–5 years.

**Silicon Anode**
Adding silicon to the graphite anode in lithium-ion batteries can increase energy capacity significantly. Sila Technologies, Ampere, and others are commercialising this. First vehicles using silicon anode cells have appeared in 2023–2024.

---

### **Hydrogen Fuel Cell Vehicles (FCEV)**

Hydrogen fuel cells convert hydrogen gas directly to electricity through a chemical reaction with oxygen. The only emission is water vapour.

*Genuine advantages:*
- Fast refueling (3–5 minutes, similar to petrol)
- Long range (600–800 km possible)
- Very high payload efficiency for heavy trucks and buses

*Real challenges:*
- Hydrogen production is currently 95%+ from natural gas (carbon-intensive)
- Green hydrogen (from renewable electricity via electrolysis) is currently expensive
- Compressed hydrogen storage requires very high pressure tanks
- Refueling infrastructure is sparse globally

*Where hydrogen is likely to win:* Long-haul trucks, buses, ships, trains — applications where battery weight and charging time make BEV impractical. The automotive passenger car case is weaker against improving BEV technology.

---

### **Autonomous Vehicles — Honest Assessment**

**Current state (2024–2026):** Level 2 and Level 3 systems are available commercially (driver assistance, lane keeping, adaptive cruise control). Level 4 (fully autonomous in defined areas) operates in limited commercial deployment (Waymo in Phoenix, Baidu Apollo in some Chinese cities).

**Level 5** (fully autonomous in all conditions, anywhere) remains further away than predicted in 2015–2018. The challenge is not straight roads — it is the complexity of unexpected human behaviour, construction zones, adverse weather, and edge cases.

**Most likely near-term application:** Defined route autonomous — fixed-route buses, last-mile airport shuttles, mining vehicles, and port logistics are deploying autonomous systems now.

---

### **Urban Mobility Research — What Evidence Shows**

**Congestion:**
Research consistently shows that expanding road capacity for private cars induces more driving (induced demand). The most evidence-backed approaches to reducing congestion include:
- Congestion pricing (Stockholm, London, Singapore — all showed measurable reduction)
- High-quality, frequent public transit that is faster than driving for common routes
- Mixed land use reducing trip distance
- Cycling infrastructure that attracts choice riders (not just those with no alternative)

**Shared mobility:**
Car sharing, bike sharing, and scooter sharing reduce the number of vehicles needed and can reduce car ownership. Research shows impact is strongest when combined with good public transit.

---

### **Vehicle-to-Grid (V2G) and Smart Charging**

V2G allows electric vehicles to send stored power back to the electricity grid, or to a home (V2H). This turns every EV into a distributed energy storage device.

*Applications:*
- Peak demand management (EVs discharge during high-demand periods)
- Emergency backup power for homes
- Grid stabilisation from intermittent renewable energy

*Status:* V2G standards are being finalised. Nissan Leaf, some Mitsubishi models, and bidirectional charger manufacturers are leading commercial deployment. Significant scaling expected in the 2025–2030 period.

---

### **Responsible Innovation Framework**

For anyone researching mobility innovation, consider:

1. **Who benefits and who bears risk?** New technologies often have unequal distribution of benefits and harms.
2. **What are the full lifecycle impacts?** Energy, materials, end-of-life.
3. **What happens to displaced workers and industries?** The transition to EVs impacts automotive manufacturing workforces significantly.
4. **Is the infrastructure equitable?** Charging in wealthy areas while low-income areas lack access creates new mobility inequalities.
5. **What is the evidence?** Distinguish between marketing claims and peer-reviewed evidence.

---

> *Innovation claims in mobility should be evaluated against peer-reviewed research, independent testing, and verified deployment data. Media announcements of "breakthroughs" often precede commercialisation by 5–10 years or more.*`
};

// ── DOMAIN: MAINTENANCE PREVENTIVE ──────────────────────────────────────
const K_MAINTAIN = {
  match: /maintain|maintenance|service|oil.*change|air.*filter|spark.*plug|coolant|service.*interval|when.*service|how.*often.*service|vehicle.*care|preventive|inspection.*checklist|regular.*check|vehicle.*health/i,
  answer: () => `## Vehicle Maintenance — The Complete Preventive Guide

---

### **The Core Principle**

Every vehicle failure that leaves someone stranded — or worse, causes an accident — was preceded by warning signs. Preventive maintenance is the practice of addressing those signs before they become failures.

The cost of prevention is always lower than the cost of breakdown — financially and in safety.

---

### **Universal Pre-Journey Check (All Vehicles)**

Before every journey, spend 60 seconds on:
- **Warning lights:** Any illuminated warning lights? Do not dismiss them.
- **Tyres:** Visual check — any obviously flat or damaged tyre?
- **Mirrors:** Positioned correctly?
- **Fuel/charge:** Sufficient for the journey?

For two-wheelers: add a quick check of the brake levers (both should feel firm with normal play) and a visual of the chain if applicable.

---

### **Petrol/Diesel Car — Service Guide**

| Item | Check Interval | Replace Interval |
|------|---------------|-----------------|
| Engine oil level | Monthly | 5,000–10,000 km (check manual) |
| Engine oil quality | — | As above |
| Air filter | 10,000 km | 15,000–30,000 km |
| Fuel filter | — | 30,000–60,000 km |
| Spark plugs (petrol) | 20,000 km | 30,000–100,000 km (iridium) |
| Coolant level | Monthly | Every 2–5 years (flush) |
| Brake fluid | — | Every 2 years |
| Brake pads | 10,000 km check | When worn (typically 30,000–70,000 km) |
| Tyres | Weekly pressure | Replace at 3mm tread or 5 years |
| Timing belt | — | 60,000–100,000 km (critical — check manual) |
| Cabin air filter | — | Every 12–15,000 km |
| Battery (12V) | Annual | Every 3–5 years |
| Wheel alignment | Annually / after impact | When out of spec |

> ⚠️ **Timing belt failure is one of the most expensive repairs possible.** In an interference engine (most modern engines), a broken timing belt causes the engine's valves and pistons to collide, often requiring complete engine replacement. Always replace at the manufacturer's specified interval.

---

### **Electric Vehicle — Service Guide**

EVs have dramatically fewer consumables than combustion vehicles.

| Item | Check Interval | Notes |
|------|---------------|-------|
| Tyre pressure | Weekly | Same as conventional vehicles |
| Tyre condition | Monthly | Same importance |
| Brake fluid | Every 2 years | Regenerative braking reduces pad wear but fluid still absorbs moisture |
| Battery coolant | As per manual | Some EVs have dedicated battery thermal management fluid |
| Cabin air filter | As per manual | Typically 15,000–25,000 km |
| 12V auxiliary battery | Annually | Often overlooked — strands vehicles when flat |
| Battery health (SoH) | Via app or annual check | Monitor trends over time |
| Wiper blades | When performance declines | As any vehicle |

**No oil changes, no spark plugs, no timing belt** — significantly lower maintenance cost.

---

### **Two-Wheeler (Scooter/Motorcycle) — Service Guide**

| Item | Check | Replace/Service |
|------|-------|----------------|
| Engine oil | Monthly | Every 3,000 km (petrol) |
| Air filter | Every service | 15,000–20,000 km |
| Spark plug | Every service | 10,000–15,000 km |
| Drive belt (CVT scooters) | Every 10,000 km | 20,000–30,000 km or if cracked |
| Chain (chain-drive bikes) | Weekly | Clean/lube every 500 km; replace when stretched |
| Tyre pressure | Weekly | Replace at 2mm or 3–4 years |
| Brake pads | Monthly visual | Replace on wear indicator/grinding |
| Brake fluid | — | Every 2 years |
| Coolant (liquid-cooled) | Monthly level | Every 2 years flush |
| Battery (12V or EV) | Monthly | 3–5 years (12V) / monitor SoH (EV) |
| Fork oil (front suspension) | — | Every 30,000 km |

---

### **Weather Impact on Maintenance Intervals**

**Hot climates (tropical regions, deserts):**
- Engine oil degrades faster in heat — consider shorter oil change intervals
- Battery (both 12V and EV) degrades faster in sustained high temperatures
- Tyre pressure increases with temperature — check frequently in summer
- Coolant efficiency critical — check and replace more frequently

**Cold climates:**
- Engine oil thickens in cold — use correct viscosity grade for your climate
- Battery capacity reduces in cold (temporary — returns as temperature rises)
- Tyre rubber hardens in extreme cold — winter tyres use different compounds
- Brake fluid absorbs moisture faster if stored in cold/damp conditions

**Coastal/High Humidity regions:**
- Accelerated corrosion of metal components, brake lines, fuel lines
- Electrical connectors prone to oxidation
- More frequent undercarriage inspection

---

### **Signs That Need Immediate Attention**

Stop and assess if you notice:
- Any unfamiliar noise (grinding, knocking, high-pitched squeal, rattling)
- Any red warning light
- Loss of braking responsiveness
- Smoke from engine bay or exhaust (unusual)
- Burning smell (oil on hot surfaces, electrical)
- Vehicle pulling significantly to one side
- Fluid puddle under parked vehicle

---

> **Maintenance intervals in this guide are general estimates for planning purposes. Always follow your specific vehicle manufacturer's maintenance schedule in the owner's manual. Actual intervals vary by vehicle model, region, climate, and usage pattern.**`
};

// ── MAIN INTENT CLASSIFIER ───────────────────────────────────────────────
const DOMAINS = [
  K_HISTORY, K_ENGINE, K_BATTERY, K_BRAKES, K_TYRES,
  K_SUSPENSION, K_ELECTRICAL, K_COMMUTE, K_COMPARE,
  K_FLEET, K_TRANSPORT, K_ENVIRONMENT, K_USED, K_RESEARCH, K_MAINTAIN
];

function classify(msg) {
  for (const d of DOMAINS) {
    if (d.match.test(msg)) return d.answer();
  }
  return null;
}

// ── GENERIC INTELLIGENT FALLBACK ─────────────────────────────────────────
function genericFallback(msg) {
  const m = msg.toLowerCase();
  const hasTech = /vehicle|car|bike|scooter|motor|engine|batter|wheel|road|fuel|charg|safe|drive|ride/i.test(m);

  return `## MobilityAI — I Want to Give You the Best Answer

I understood your question about: **"${msg.slice(0, 80)}${msg.length > 80 ? '...' : ''}"**

To give you the most accurate and useful response, I need a little more context.

**Please tell me:**
- What type of vehicle or mobility system are you asking about?
- What specifically do you want to understand?
- What is your situation? (Owner, researcher, student, buying decision, maintenance problem...)

---

**Topics where I have deep knowledge:**

| Domain | What I Can Explain |
|--------|-------------------|
| 🔋 EV & Battery Systems | Battery chemistry, BMS, charging, SoH, thermal management |
| ⚙️ Engine Technology | Petrol, diesel, CNG, LPG, hybrid — how they work |
| 🛵 Two & Three-Wheelers | Scooters, motorcycles, auto-rickshaws — maintenance & safety |
| 🚗 Cars | All systems, maintenance, buying guidance |
| 🛠️ All Vehicle Systems | Brakes, suspension, tyres, electrical, steering |
| 📖 Mobility History | Wheel to electric — the complete story |
| ⚖️ Technology Comparison | Petrol vs diesel vs EV vs hybrid — neutral analysis |
| 🚆 Mass Transport | Trains, buses, ships, aircraft — how they work |
| 🌍 Global Commuting | Safe travel guidance for all environments |
| 🌱 Environment | Emissions, lifecycle analysis, sustainability |
| 🔬 Research & Innovation | Future technology, hydrogen, autonomous, smart cities |
| 🔍 Used Vehicle Buying | Complete inspection framework |
| 🏭 Fleet Management | CPK, preventive maintenance, fleet safety |

Ask your question — I will answer clearly and honestly.

*MobilityAI serves every person equally — students, scientists, first-time drivers, and seasoned engineers.*`;
}

// ── KIAI INTELLIGENCE (Founder, private) ─────────────────────────────────
function kiaiResponse(msg) {
  const m = msg.toLowerCase();

  if (isGreeting(msg)) {
    return `**KIAI Command Interface — Active**

Platform: 99EVS MobilityAI v3.0
Status: All systems operational

**Capabilities active:**
- 15 structured knowledge domains
- Global language detection (9 languages)
- Anthropic API enhancement layer
- Full safety and neutrality protocols

**Quick commands:**
- "status" — platform health
- "users" — see via Founder Dashboard
- "roadmap" — Phase 2 planning
- "knowledge gaps" — what to build next

What are we working on?`;
  }

  if (/status|health|system/i.test(m)) {
    return `**Platform Status — All Systems Green**

| System | Status |
|--------|--------|
| Built-in Knowledge Engine | ✅ 15 domains active |
| Language Detection | ✅ 9 languages |
| Diagnostic Brain Engine | ✅ v5.0 Phase 1 active |
| Safety Topic Detection | ✅ 5 high-risk categories |
| Safety Layer | ✅ Active |
| Neutrality Protocol | ✅ Active |
| Knowledge Update Pipeline | ✅ Gap detection active |
| Anthropic Enhancement | ⚡ Conditional (if key set) |
| Session Storage | ✅ localStorage |
| Founder Dashboard | ✅ Private |

**Knowledge Coverage:**
History · Engines · Batteries · Brakes · Tyres · Suspension · Electrical · Commuting · Comparison · Fleet · Mass Transport · Environment · Used Vehicles · Research · Maintenance

**Governance Phase 1 (live):**
- 9-section structured format enforced in AI responses
- Safety topic detection + professional referral triggers
- Knowledge neutrality protocol active
- Domain usage monitoring active
- Knowledge gap pipeline detecting fallback queries

Platform ready for production traffic.`;
  }

  if (/roadmap|phase 2|next|plan|build next/i.test(m)) {
    return `**Phase 2 Roadmap — 99EVS MobilityAI**

**Infrastructure (Month 1–3):**
- Server-side database (Postgres/Supabase) replacing localStorage
- Proper authentication with server sessions
- Rate limiting per user

**Content (Month 1–6):**
- 50+ structured knowledge articles in all 6 Indian languages
- Vehicle-specific maintenance lookup (by make/model)
- Regulatory database (India + top 10 global markets)

**Features (Month 3–9):**
- Document upload and analysis (PDF manuals)
- Vehicle profile memory (remembers your vehicle)
- Maintenance schedule personalisation
- Image upload (describe what you see)

**Business (Month 6–12):**
- Fleet management dashboard
- Workshop network listing
- Used vehicle inspection booking
- API for third-party integration

**What to prioritise first?** The vehicle-specific maintenance lookup would give every user immediate personalised value.`;
  }

  if (/knowledge.*gap|missing|what.*add|improve|better/i.test(m)) {
    return `**Knowledge Gaps to Address**

**High priority (most user questions currently hitting fallback):**
1. Specific vehicle model lookup (user asks about "Activa 6G" — needs model-specific answer)
2. Regulatory information by country (varies significantly)
3. Workshop and service cost guidance by region
4. Audio/noise diagnosis ("what does this sound mean?")
5. Seasonal maintenance calendars by climate zone

**Medium priority:**
6. Industrial machinery mobility (forklifts, construction equipment)
7. Bicycle and e-bicycle systems in depth
8. Charging infrastructure maps integration
9. Insurance guidance
10. Government scheme awareness (EV subsidies by country)

**Recommend building next:**
Vehicle database integration — allow user to select their make/model/year and get personalised maintenance schedule. This is the highest-value single feature for everyday users.`;
  }

  return `**KIAI Analysis**

Query: "${msg.slice(0, 100)}"

**Context:** ${/tech|build|code|system/i.test(m) ? 'Technical architecture question' : /user|grow|community/i.test(m) ? 'Growth and community question' : /money|revenue|business/i.test(m) ? 'Business model question' : /content|article|topic/i.test(m) ? 'Content strategy question' : 'Strategic platform question'}

To give you a useful answer, tell me:
1. What specific outcome do you need?
2. What constraints are you working within?
3. What have you already tried or decided?

I will give you a direct 3-step recommendation.`;
}

// ── MAIN HANDLER ──────────────────────────────────────────────────────────
export default async function handler(req, res) {

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Input validation
  const { messages, isKiai, userName, domain, mode } = req.body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'Please type your question — I am here to help.' });
  }

  // Sanitise: get last user message
  const raw = messages[messages.length - 1];
  if (!raw || typeof raw.content !== 'string') {
    return res.status(200).json({ reply: 'Please type your question.' });
  }

  const msg = raw.content.trim().slice(0, 4000);
  if (!msg) return res.status(200).json({ reply: 'Please type your question.' });

  const lang = detectLang(msg);

  // ── GOVERNANCE LAYER ────────────────────────────────────────────────────
  const { safetyTopic, governanceNote, enhancedSystem } = applyGovernance(msg);

  // ── KIAI (Founder Intelligence — internal only) ──────────────────────
  if (isKiai === true) {
    // Inject governance reporting into KIAI responses
    const kiaiMsg = msg.toLowerCase();
    if (/governance|monitor|safety.*flag|knowledge.*gap|pipeline|validation/i.test(kiaiMsg)) {
      return res.status(200).json({ reply: governanceStatusReport() });
    }
    return res.status(200).json({ reply: kiaiResponse(msg) });
  }

  // ── GREETING ────────────────────────────────────────────────────────
  if (isGreeting(msg)) {
    const fn = typeof userName === 'string' ? userName.trim().slice(0, 40) : '';
    const greet = (G[lang] || G.en)(fn);
    return res.status(200).json({ reply: greet });
  }

  // ── DOMAIN CONTEXT INJECTION ────────────────────────────────────────
  // When the frontend sends a domain ID, inject domain-specific guidance
  const DOMAIN_CONTEXTS = {
    mobility_history:  'The user is exploring Mobility History. Focus on historical facts, India\'s transport evolution, key milestones, and how transport shaped civilisations. Use the 9-section structure when giving in-depth answers.',
    engine_motor:      'The user is asking about Engine & Motor Technology. Explain ICE engines, electric motors, hybrid systems. Use engineering principles. Always include safety warnings for critical engine symptoms. Use the 9-section structured format.',
    battery_bms:       'The user is asking about EV Battery & BMS Systems. Cover battery chemistry, BMS functions, charging protocols, degradation. SAFETY CRITICAL: include high-voltage safety warnings. Use structured format.',
    braking:           'The user is asking about Braking Systems. SAFETY CRITICAL DOMAIN. Always lead with safety context. Cover disc brakes, ABS, brake fluid, stopping distances. Always end with professional service recommendation.',
    tyres:             'The user is asking about Tyres & Wheels. Cover tyre pressure, tread depth, India-specific road conditions, alignment. India monsoon context is important for safety guidance.',
    suspension:        'The user is asking about Suspension & Steering. Explain spring/damper systems, Indian road conditions impact, alignment. Safety note on ball joint failures.',
    electrical:        'The user is asking about Electrical Systems. Cover ECUs, OBD codes, warning lights, 12V vs HV systems. India OBD context (ELM327 adapters). HIGH VOLTAGE WARNING for EV systems.',
    safe_commuting:    'The user is asking about Safe Commuting. India-specific: ISI helmets, monsoon driving, two-wheeler blind zones, HALT rule. Focus on practical safety for Indian road conditions.',
    power_comparison:  'The user is asking about Power System Comparison. STRICT NEUTRALITY required. Present petrol/diesel/CNG/EV/hybrid with equal honesty. India-specific TCO numbers where relevant. No advocacy for any technology.',
    mass_transport:    'The user is asking about Mass Transport. Cover railways, metro, BRTS in India context. Engineering efficiency of rail vs road. India\'s transport infrastructure.',
    environment:       'The user is asking about Environment & Sustainability. India grid emission factors for EV analysis. Battery recycling in India. Honest well-to-wheel data. Facts only, no advocacy.',
    used_vehicle:      'The user is asking about Used Vehicle Inspection. India-specific: Vahan portal verification, RC document checks, common fraud patterns in Indian used vehicle market. Provide step-by-step practical guidance.',
    fleet:             'The user is asking about Fleet Management. India CPK numbers, Indian EV fleet options (Mahindra, Piaggio, Tata), FAME-II fleet scheme, driver scoring. Practical Indian fleet management guidance.',
    research:          'The user is asking about Research & Innovation. Cover solid-state batteries, hydrogen, autonomous vehicles, V2G. India\'s EV innovation ecosystem. Balance optimism with realistic timelines.',
    urban_mobility:    'The user is asking about Urban Mobility. India city context: Bengaluru congestion, Ahmedabad BRT, Delhi metro. Evidence-based solutions. Indian smart cities progress.',
    preventive:        'The user is asking about Preventive Maintenance. India-specific intervals (shorter for dust/heat), monsoon seasonal checklist, Indian labour costs for reference. Practical, actionable guidance.'
  };

  let finalSystem = enhancedSystem;

  // ── MODE CONTEXT INJECTION ───────────────────────────────────────────
  // 'solver' mode: structured diagnostic output
  // 'tech' mode: professional technical output
  // 'general' mode: knowledge and education output
  // ── DIAGNOSTIC MODE PROMPTS — Full Phase-1 Diagnostic Brain ─────────────────
  const MODE_PROMPTS = {

    // SOLVER MODE — Consumer-facing vehicle problem solver
    // Uses the full 5-section diagnostic output format
    solver: `

ACTIVE MODE: VEHICLE PROBLEM SOLVER — DIAGNOSTIC ENGINE
The user is describing a vehicle symptom or problem and needs structured diagnostic analysis.

You MUST respond using exactly this 5-section diagnostic output format:

1️⃣ PROBLEM SUMMARY
Restate the user's described issue clearly. Identify the vehicle type and system category (e.g., Brake System, Battery System, Engine/Powertrain, Electrical, Cooling, Charging, Sensor Network).

2️⃣ MOST LIKELY CAUSES
Structure causes in three tiers:

🔴 HIGH PROBABILITY
• [Cause 1] — brief explanation why
• [Cause 2] — brief explanation why

🟠 MODERATE PROBABILITY
• [Cause 1] — brief explanation
• [Cause 2] — brief explanation

🟡 LOW PROBABILITY
• [Cause 1] — brief explanation

3️⃣ SAFETY RISK ASSESSMENT
State: Risk Level: LOW / MODERATE / HIGH / CRITICAL
- LOW: Monitor, normal operation safe
- MODERATE: Operate cautiously, inspect within 3–7 days
- HIGH: Limit use, inspect within 24–48 hours
- CRITICAL: Do not drive. Stop vehicle safely. Seek immediate professional help.

4️⃣ RECOMMENDED NEXT ACTIONS
Numbered practical steps. For CRITICAL or HIGH risk always include: "Do not drive this vehicle until inspected by a certified technician."
Include India-specific guidance (₹ cost estimates, Indian service context, common Indian vehicle models).

5️⃣ EDUCATIONAL INSIGHT
Explain the affected system in simple clear language. Explain the engineering reason behind the symptom — not just the label. Keep this accessible to a non-technical vehicle owner.

DIAGNOSTIC RULES FOR THIS MODE:
- Never claim absolute or final diagnosis
- Never encourage DIY repairs beyond basic inspection for safety-critical systems
- Base reasoning on established engineering principles and symptom patterns
- Rank causes by statistical probability for the described symptoms
- Always include safety risk level — never omit it
- If information is incomplete, ask one focused clarifying question before diagnosing`,

    // TECH MODE — Professional workshop / technician mode
    // Structured for mechanics, technicians, and advanced diagnostics
    tech: `

ACTIVE MODE: PROFESSIONAL TECHNICAL DIAGNOSTIC ASSISTANT
This mode is for mechanics, EV technicians, workshop professionals, and advanced users.

Use professional technical depth. Structure ALL technical responses as follows:

**SYSTEM IDENTIFIED:** [System name + category]

**SYMPTOM ANALYSIS:**
Technical characterisation of the fault symptom — onset conditions, frequency, associated parameters.

**DTC / FAULT CODE ANALYSIS:** (if applicable)
Full DTC interpretation, freeze frame context, related DTCs that may co-occur.

**FAULT TREE:**
Ranked fault paths from most to least likely. Each path: Component → Failure Mode → Effect.

**DIAGNOSTIC TEST PROCEDURE:**
Step-by-step test sequence with specific tool requirements.
Include: OBD-II PIDs to monitor, sensor ranges to verify, actuator tests to run.

**SPECIFICATION VALUES:**
Relevant electrical specs (resistance, voltage, current ranges), mechanical tolerances, fluid specs, pressure values.

**SAFETY PROTOCOL:**
High-voltage isolation requirements (for EVs), lockout/tagout procedures for fuel or HV systems.

TECHNICAL MODE RULES:
- Use technical terminology — do not over-explain basics for non-technical users
- Include measurable specification values wherever available
- Reference OBD-II PIDs, J1939 parameters for fleet/commercial vehicles
- Never omit safety isolation protocol for HV EV work
- Acknowledge diagnostic uncertainty — state confidence level
- Suggest escalation path if symptoms indicate ECU or BMS failure beyond field diagnosis`,

    // GENERAL MODE — Knowledge, education, and information
    general: `

ACTIVE MODE: MOBILITY KNOWLEDGE AND EDUCATION
The user is exploring mobility knowledge, asking informational questions, or learning about vehicle systems.

Use the 9-section structured knowledge format for in-depth topics:
1. OVERVIEW 2. ENGINEERING PRINCIPLE 3. KEY COMPONENTS 4. OPERATION LOGIC 5. CALCULATIONS 6. SAFETY NOTES 7. MAINTENANCE 8. DIAGNOSTICS 9. RESEARCH INSIGHTS

For conversational questions: be direct, clear, and helpful without forcing the full 9-section structure.
Always include India-specific context where relevant.
Adapt depth to the user's apparent knowledge level.`
  };

  if (mode && MODE_PROMPTS[mode]) {
    finalSystem = enhancedSystem + MODE_PROMPTS[mode];
  }

  if (domain && typeof domain === 'string' && DOMAIN_CONTEXTS[domain]) {
    const domainNote = `\n\nDOMAIN CONTEXT: ${DOMAIN_CONTEXTS[domain]}`;
    finalSystem = finalSystem + domainNote;
    KNOWLEDGE_MONITOR.record(domain, domain.replace(/_/g, ' '), false);
  }


  const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
  if (ANTHROPIC_KEY) {
    try {
      // Build clean message history, validate alternating roles
      const clean = messages
        .filter(m => m && typeof m.content === 'string' && m.content.trim().length > 0)
        .slice(-12)
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content.trim().slice(0, 2000)
        }));

      // Ensure starts with user
      const valid = [];
      let lastRole = null;
      for (const m of clean) {
        if (m.role !== lastRole) { valid.push(m); lastRole = m.role; }
      }

      if (valid.length > 0 && valid[0].role === 'user') {
        const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': ANTHROPIC_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1800,
            system: finalSystem,  // governance + domain enhanced system prompt
            messages: valid
          })
        });

        if (apiRes.ok) {
          const data = await apiRes.json();
          const reply = data?.content?.[0]?.text?.trim();
          if (reply && reply.length > 20) {
            return res.status(200).json({ reply });
          }
        }
      }
    } catch (_) {
      // Fall through to built-in engine
    }
  }

  // ── BUILT-IN KNOWLEDGE ENGINE (Primary / Fallback) ───────────────────
  const builtIn = classify(msg);
  const validation = validateKnowledgeCoverage(msg, builtIn);

  if (validation.canServe && builtIn) {
    // Record domain hit for monitoring
    KNOWLEDGE_MONITOR.record('built_in_kb', 'Built-in Knowledge Base', false);
    return res.status(200).json({ reply: builtIn });
  }

  // Knowledge gap — pipeline detects this, fallback responds
  return res.status(200).json({ reply: genericFallback(msg) });
}
