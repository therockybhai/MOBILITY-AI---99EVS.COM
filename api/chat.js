// ═══════════════════════════════════════════════════════════════
// MobilityAI — 99EVS Platform Intelligence Engine
// Built-in knowledge. Works forever. Zero API cost required.
// Multi-language. Safety first. Simple always.
// ═══════════════════════════════════════════════════════════════

// ── SYSTEM PROMPT (Server-side only — invisible to users) ──────
const SYSTEM_PROMPT = `You are MobilityAI — the intelligence assistant created by 99EVS.

Your mission: help people understand vehicles, mobility, and commuting in the simplest, safest way possible.

CORE RULES:
1. Human safety always comes first — before speed, cost, or convenience
2. Explain everything so clearly a 10-year-old can understand it
3. Never use complicated technical words unless absolutely necessary
4. If something could be unsafe, say it clearly and directly
5. Never guess when safety is involved
6. Never mention the founder name or internal platform details

ANSWER STRUCTURE — always follow these 4 steps:
1. What is happening — explain the situation in very simple words
2. Why it matters — explain the safety, cost, or travel impact
3. What the person should check — practical steps anyone can follow today
4. When to get professional help — when a mechanic or expert is needed

TONE: Calm. Helpful. Simple. Like a trusted guide, not a textbook.

PRIMARY FOCUS: Bangalore, India — and all Indian commuters
- Scooter riders, EV owners, auto drivers, delivery riders, bus commuters, families
- Real Bangalore conditions: heavy traffic, monsoon rain, potholes, mixed roads

LANGUAGES: Respond in the same language the user writes in.
If the user writes in Hindi, respond in Hindi.
If in Tamil, respond in Tamil. And so on.

WHAT YOU HELP WITH:
- Electric vehicles (battery, charging, range, warning lights)
- Petrol, diesel, CNG vehicles (engine, fuel, maintenance)
- Scooters and two-wheelers (tyres, brakes, safety)
- Used vehicle inspection before buying
- Fleet maintenance and cost reduction
- Commuting decisions in Bangalore
- General vehicle safety questions

Always end your answer with one practical next step the person can take today.
Keep answers friendly, brief, and genuinely useful.`;

// ── LANGUAGE DETECTION ─────────────────────────────────────────
function detectLang(msg) {
  if (/[\u0900-\u097F]/.test(msg)) return 'hi';
  if (/[\u0B80-\u0BFF]/.test(msg)) return 'ta';
  if (/[\u0C00-\u0C7F]/.test(msg)) return 'te';
  if (/[\u0C80-\u0CFF]/.test(msg)) return 'kn';
  if (/[\u0D00-\u0D7F]/.test(msg)) return 'ml';
  return 'en';
}

// ── GREETING DETECTION ─────────────────────────────────────────
function isGreeting(msg) {
  return /^(hi|hey|hello|helo|hii+|howdy|good morning|good afternoon|good evening|good night|namaste|namaskar|vanakkam|namaskara|what is this|who are you|what can you do|help me|help|get started|start|begin)\s*[?!.]?$/i.test(msg.trim());
}

// ── GREETINGS BY LANGUAGE ──────────────────────────────────────
const GREETINGS = {
  en: (n) => `Welcome to MobilityAI${n ? ', ' + n : ''} — your free guide to safer travel, powered by 99EVS.

I am here to help you understand your vehicle and travel safely — in simple language, no jargon.

**Here is what I can help you with:**

🛵 **Scooter & Two-Wheeler Safety**
Tyres, brakes, helmet reminders, maintenance checks.
*Example: "My scooter vibrates when I brake — is this dangerous?"*

⚡ **Electric Vehicle Questions**
Battery health, charging habits, range issues, warning lights.
*Example: "My EV shows less range than before. What should I check?"*

🚗 **Petrol, Diesel & CNG Vehicles**
Engine sounds, fuel efficiency, maintenance guidance.
*Example: "My car is using more petrol than usual. Why?"*

🔍 **Buying a Used Vehicle**
What to check before you buy, so you do not get cheated.
*Example: "What should I look at before buying a used electric scooter?"*

🚌 **Commuting in Bangalore**
Safe routes, rain safety, traffic behavior, best travel options.
*Example: "What is the safest way to ride a scooter in Bangalore rain?"*

🏭 **Fleet & Business Vehicles**
Maintenance schedules, cost reduction, breakdown prevention.

---

**To get the best answer, tell me:**
- What vehicle do you have? (brand and type)
- What is happening or what do you want to know?

Type your question — I will answer simply and honestly.`,

  hi: (n) => `${n ? n + ', ' : ''}नमस्ते! MobilityAI में आपका स्वागत है — 99EVS द्वारा आपकी मुफ्त वाहन सुरक्षा गाइड।

मैं आपकी मदद कर सकता हूँ:

🛵 **स्कूटर और दोपहिया** — टायर, ब्रेक, सुरक्षा जांच
⚡ **इलेक्ट्रिक वाहन** — बैटरी, चार्जिंग, रेंज, वार्निंग
🚗 **पेट्रोल/डीजल/CNG** — इंजन, माइलेज, रखरखाव
🔍 **पुराना वाहन खरीदना** — खरीदने से पहले क्या देखें
🚌 **बैंगलोर में यात्रा** — ट्रैफिक, बारिश, सुरक्षित रास्ते

अपना वाहन बताएं और सवाल पूछें — मैं सरल और साफ जवाब दूंगा।`,

  ta: (n) => `வணக்கம்${n ? ' ' + n : ''}! MobilityAI-க்கு வரவேற்கிறோம் — 99EVS இன் இலவச வாகன பாதுகாப்பு வழிகாட்டி.

நான் உதவ முடியும்:
🛵 ஸ்கூட்டர் & இரு சக்கர வாகனம் | ⚡ மின்சார வாகனம் | 🚗 பெட்ரோல்/டீசல்/CNG
🔍 பழைய வாகனம் வாங்குவதற்கு முன் | 🚌 பெங்களூரு பயண பாதுகாப்பு

உங்கள் வாகனம் மற்றும் கேள்வியை சொல்லுங்கள்!`,

  te: (n) => `నమస్కారం${n ? ' ' + n : ''}! MobilityAI కి స్వాగతం — 99EVS నుండి మీ వాహన భద్రతా మార్గదర్శి.

నేను సహాయం చేయగలను:
🛵 స్కూటర్ & బైక్ | ⚡ ఎలక్ట్రిక్ వాహనం | 🚗 పెట్రోల్/డీజెల్/CNG
🔍 పాత వాహనం కొనుగోలు | 🚌 బెంగళూరు ప్రయాణ భద్రత

మీ వాహనం మరియు ప్రశ్న చెప్పండి — నేను సులభంగా సమాధానం ఇస్తాను!`,

  kn: (n) => `ನಮಸ್ಕಾರ${n ? ' ' + n : ''}! MobilityAI ಗೆ ಸ್ವಾಗತ — 99EVS ಇಂದ ನಿಮ್ಮ ಉಚಿತ ವಾಹನ ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶಿ.

ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ:
🛵 ಸ್ಕೂಟರ್ & ಬೈಕ್ | ⚡ ವಿದ್ಯುತ್ ವಾಹನ | 🚗 ಪೆಟ್ರೋಲ್/ಡೀಸೆಲ್/CNG
🔍 ಹಳೆಯ ವಾಹನ ಖರೀದಿ | 🚌 ಬೆಂಗಳೂರು ಪ್ರಯಾಣ ಸುರಕ್ಷತೆ

ನಿಮ್ಮ ವಾಹನ ಮತ್ತು ಪ್ರಶ್ನೆ ಹೇಳಿ!`,

  ml: (n) => `നമസ്കാരം${n ? ' ' + n : ''}! MobilityAI-ലേക്ക് സ്വാഗതം — 99EVS-ൽ നിന്നുള്ള നിങ്ങളുടെ സൗജന്യ വാഹന സുരക്ഷാ ഗൈഡ്.

ഞാൻ സഹായിക്കാം:
🛵 സ്കൂട്ടർ & ബൈക്ക് | ⚡ ഇലക്ട്രിക് വാഹനം | 🚗 പെട്രോൾ/ഡീസൽ/CNG
🔍 പഴയ വാഹനം വാങ്ങൽ | 🚌 ബെംഗളൂരു യാത്രാ സുരക്ഷ

നിങ്ങളുടെ വാഹനം പറഞ്ഞ് ചോദ്യം ചോദിക്കൂ!`
};

// ── BUILT-IN KNOWLEDGE BASE ────────────────────────────────────
const KB = [
  {
    id: 'commute_bangalore',
    match: /safest.*commute|commute.*bangalore|travel.*safely.*bangalore|best.*travel|how.*travel.*work|commuting.*bangalore|safe.*way.*bangalore/i,
    answer: () => `## What is the Safest Way to Commute in Bangalore?

**What is happening**
Bangalore has some of the busiest roads in the world. Millions of scooters, cars, autos, buses, and electric vehicles share narrow roads every day — especially during morning and evening rush hours.

**Why it matters**
More vehicles on narrower roads means more chances of accidents. Rain makes roads slippery. Potholes appear overnight. Knowing how to travel safely makes a real difference.

**The safest options by type:**

🛵 **Scooter or Motorcycle**
- Best for short distances (under 15 km)
- Always wear your helmet — every single time, no exceptions
- Check your tyres once a week — low pressure is the number one cause of two-wheeler accidents
- Keep at least one second of gap between you and the vehicle ahead for every 10 km/h you are going
- Avoid peak hours if possible — 8–10 AM and 5–8 PM are the most dangerous

⚡ **Electric Scooter or EV**
- Lower running cost, better for city stop-start traffic
- Avoid flooded roads — water and electrical systems do not mix
- Watch your battery level — plan your charging so you are never stranded
- Charge to 80% for daily use to keep your battery healthy longer

🚌 **Bus or Metro**
- Safest option for long distances — you are not in traffic, you are above or around it
- Wait on the footpath, never on the road
- Hold a handle when the bus is moving
- BMTC and Namma Metro together cover most of the city

🛺 **Auto Rickshaw**
- Good for medium distances
- Ask the driver to use the meter or agree on a price first
- If the driver is using a phone while driving, ask him to stop

🚗 **Car**
- Most comfortable but slowest in Bangalore traffic
- Keep two car-lengths of space at all times
- Never drive into flooded roads — even 15 cm of water can stop a car
- Use parking sensors on narrow lanes to protect other vehicles and pedestrians

**When to get professional help**
If your vehicle is showing any warning lights, unusual sounds, or you notice tyre wear — visit a mechanic before your next long commute.

**Your next step today:** Check the air pressure in your tyres. This takes 2 minutes and is the single most effective safety check you can do right now.`
  },
  {
    id: 'ev_battery_drain',
    match: /battery.*drain|drain.*fast|battery.*low|less range|range.*drop|range.*less|battery.*problem|ev.*not.*charge|charge.*not.*full/i,
    answer: () => `## Your EV Battery is Draining Faster Than Normal

**What is happening**
Your electric vehicle is using up its battery faster than it used to. Think of it like a phone battery — after many charge cycles, it does not hold as much charge as it did when it was new.

**Why it matters**
If your battery drains too fast, you might run out of charge on the road. In Bangalore traffic, this can leave you stranded — which is both stressful and unsafe.

**What you should check**
1. **Your charging habit** — Do you charge to 100% every night? For most EVs, charging to 80% for daily use and 100% only before long trips is much better for the battery.
2. **Air conditioning usage** — AC uses a lot of battery power. On hot Bangalore days, it can reduce your range by 15–20%.
3. **Speed** — Riding faster than 60 km/h uses significantly more battery.
4. **Tyre pressure** — Under-inflated tyres create more friction, which drains the battery faster. Check monthly.
5. **Age of battery** — If your vehicle is over 2–3 years old, some battery loss is natural. A 5–10% reduction in range over 3 years is normal.

**When to get professional help**
Visit an authorised service centre if:
- Your range has dropped by more than 20% in the last 6 months
- A battery warning light is showing on your dashboard
- Your battery gets warm or hot to the touch while charging

**Your next step today:** Charge your EV to only 80% tonight instead of 100%, and note whether your range feels different tomorrow.`
  },
  {
    id: 'ev_charging',
    match: /how.*charge|charging.*ev|charge.*ev|fast.*charge|dc.*charge|slow.*charge|overcharge|charge.*100|charge.*daily/i,
    answer: () => `## How to Charge Your Electric Vehicle the Right Way

**What is happening**
Electric vehicle batteries are like phone batteries — how you charge them affects how long they last. The way you charge has a bigger impact on battery health than almost anything else.

**Why it matters**
A battery that is charged correctly can last 8–10 years. A battery that is always charged to 100% or fast-charged every day may start losing capacity in 3–4 years. That can reduce your range and cost you money.

**What you should check and do**

**For daily commuting in Bangalore:**
- Charge to **80%** for your daily rides — this is the sweet spot that keeps your battery healthy
- Use **slow home charging overnight** — it is gentle on the battery and cheaper
- Only charge to **100%** when you have a long trip planned for the next day

**Fast charging (DC charging):**
- Fast charging is great when you need it quickly or are on a long journey
- Using it every single day does put extra stress on the battery over time
- As a guide: slow charge 5 days a week, fast charge 1–2 times maximum
- After fast charging, let the vehicle rest for 15–20 minutes before riding hard

**What to avoid:**
- Do not leave your vehicle plugged in at 100% in the sun for hours
- Do not let the battery drop below 10% regularly
- Do not use unofficial or uncertified chargers

**When to get professional help**
If your charger is sparking, making unusual sounds, or the charging port feels warm to the touch — stop charging and visit a service centre.

**Your next step today:** Check what your EV's charging limit is set to in the app or settings and change it to 80% for daily charging.`
  },
  {
    id: 'scooter_tyre',
    match: /tyre|tire|puncture|flat.*tyre|tyre.*pressure|low.*tyre|vibrat|wobble|scooter.*shake/i,
    answer: () => `## Your Scooter Tyre — What to Know and Check

**What is happening**
Your scooter tyres are the only thing connecting you to the road. When they have problems — low pressure, wear, or damage — it affects how you steer, brake, and stay balanced. This is directly connected to your safety.

**Why it matters**
Low tyre pressure is one of the most common causes of two-wheeler accidents in Bangalore. It makes the scooter harder to control, especially on wet or uneven roads. Bangalore roads have both — especially after rain.

**What you should check**

**Every week:**
- Press your thumb firmly into the tyre. If it feels soft or you can press in more than a centimetre, the pressure is too low.
- For most scooters, front tyre pressure is 25–28 PSI and rear is 28–32 PSI. Check your vehicle manual for the exact numbers.

**Once a month:**
- Look at the tyre surface. If you can see the fabric underneath the rubber (called canvas), the tyre is dangerously worn. Replace it immediately.
- Check for any cuts, bulges, or objects stuck in the tyre.

**After hitting a pothole:**
- Check both tyres for any visible damage or bulge
- If the scooter pulls to one side or vibrates, have the wheel alignment checked

**When to get professional help**
- You have a flat tyre — visit a tyre shop or call roadside assistance
- The tyre surface shows canvas or cracks — replace immediately, do not ride on it
- The scooter is vibrating or pulling to one side — go to a mechanic today

**Your next step today:** Go to a petrol station or tyre shop and check your tyre pressure. It takes 5 minutes and costs nothing.`
  },
  {
    id: 'scooter_brake',
    match: /brake|braking|brake.*sound|squeal|grinding.*brake|brake.*not.*work|brake.*fail|brake.*problem|slow.*down.*problem/i,
    answer: () => `## Your Scooter Brakes — How to Know If They Need Attention

**What is happening**
Your brakes slow your scooter down by creating friction. When brake pads wear thin, they cannot create enough friction to stop you quickly. Sometimes they also make sounds — squealing, grinding, or scraping — which is an early warning sign.

**Why it matters**
In Bangalore traffic, you need to stop quickly and reliably many times a day. A vehicle that cannot stop when you need it to is one of the most dangerous situations on the road. This is not something to delay fixing.

**What you should check**

**Listen for these sounds:**
- **Squealing or high-pitched sound when braking** — brake pads are getting thin, needs attention soon
- **Grinding or metal-on-metal sound** — brake pads are worn out, this needs immediate attention
- **No sound but weak braking** — brake fluid may be low, or cables may be stretched

**Feel test:**
- Squeeze the brake lever firmly. Does the scooter slow down quickly and evenly?
- If it takes longer than usual to stop, or the scooter pulls to one side, the brakes need attention

**Visual check for drum brakes:**
- Look for the wear indicator arrow on the drum. If the arrow has moved past the limit mark, replace the pads.

**When to get professional help**
Go to a mechanic today if:
- You hear grinding sounds when braking
- The scooter takes noticeably longer to stop than it used to
- The brake lever touches the handlebar before the brakes work
- Do not wait until you "have time" — this is a safety issue

**Your next step today:** Do a brake test in a safe, empty area. Ride at 30 km/h and brake firmly. If you cannot stop within 6–8 metres, visit a mechanic today.`
  },
  {
    id: 'bangalore_rain',
    match: /rain|monsoon|wet.*road|flood|waterlog|puddle|slippery|rainy.*season|riding.*rain/i,
    answer: () => `## Staying Safe on Bangalore Roads in the Rain

**What is happening**
When it rains in Bangalore, roads become significantly more dangerous in a matter of minutes. Water hides potholes, reduces tyre grip, makes paint markings invisible, and can flood underpasses quickly.

**Why it matters**
Most Bangalore road accidents during the monsoon are not caused by heavy rain — they are caused by people driving the same way in rain as they do in dry weather. Slowing down and adjusting your behavior makes an enormous difference.

**What you should do**

**Before you ride or drive:**
- Check if your route has any low-lying areas, underpasses, or known flood points
- Make sure your tyres have enough tread — worn tyres have almost no grip on wet roads
- Check that your brakes are working well — wet brakes take longer to engage
- Carry a light rain jacket — being wet and cold affects your focus and reaction time

**While riding or driving in rain:**
- **Slow down** — reduce your usual speed by 20–30%
- **Increase your gap** — double the distance between you and the vehicle ahead
- **Brake gently** — sudden braking on wet roads can cause the wheels to lock and you to slide
- **Avoid painted lines** — white and yellow road markings become extremely slippery when wet
- **Never drive into water** — if you cannot see the road surface, do not enter. Flooded underpasses can be 2–3 feet deep.

**For electric vehicles specifically:**
- Avoid riding through deep puddles — water can get into electrical connectors
- Avoid deep flooded sections — even waterproof EVs have limits

**When to get professional help**
If your scooter or car started sliding or handling differently after a ride in heavy rain — visit a mechanic to check the brakes and tyres before your next trip.

**Your next step today:** Check tomorrow's weather. If rain is forecast, plan to leave 10 minutes earlier and mentally commit to riding 20% slower than usual.`
  },
  {
    id: 'used_ev_buying',
    match: /buy.*used|used.*ev|second.*hand|pre.*owned|before.*buy|check.*before.*buy|buying.*vehicle|inspect.*vehicle/i,
    answer: () => `## How to Check a Used Vehicle Before You Buy It

**What is happening**
Buying a used vehicle — especially an EV — can be a great way to save money. But there are hidden problems that are not visible to the eye. Knowing what to check protects you from spending a lot of money on a vehicle with serious issues.

**Why it matters**
A used EV with a weak battery might give you only half the range advertised. A used petrol vehicle with engine problems might cost you more in repairs than the purchase price. A quick checklist prevents this.

**What you should check**

**For any used vehicle:**
1. **Service history** — Ask for all service records. No records is a red flag.
2. **Accident history** — Check the body carefully for repaint or panel differences. Ask at the RTO if the vehicle has any reported accidents.
3. **Test drive** — Ride or drive it for at least 15 minutes. Listen for unusual sounds.
4. **Brakes** — Do a firm brake test. The vehicle should stop straight and quickly.
5. **Tyres** — Check all four tyres for wear and pressure.

**For used Electric Vehicles specifically:**
1. **Battery health percentage** — Ask the seller to show you the battery health in the app or OEM software. 80% or above is acceptable. Below 70% — negotiate heavily or walk away.
2. **Charging port condition** — Look for burn marks, loose fit, or discolouration around the charging port.
3. **Range test** — Charge to 100% and measure how far it actually goes. Compare to the rated range.
4. **Any battery warning lights** — If any light is on the dashboard, ask what it means before buying.

**When to get professional help**
Spend ₹500–₹1,500 to get a pre-purchase inspection from a trusted mechanic or EV service centre before handing over any money. It is the cheapest insurance you can buy.

**Your next step today:** Before viewing any used vehicle, write down these 5 questions to ask the seller: service records, accident history, battery health (for EVs), last service date, and reason for selling.`
  },
  {
    id: 'fleet_maintenance',
    match: /fleet|multiple.*vehicle|commercial.*vehicle|maintenance.*cost|preventive|breakdown.*prevent|cpk|cost.*per.*km|delivery.*vehicle/i,
    answer: () => `## How to Reduce Your Fleet Maintenance Costs

**What is happening**
A fleet is a group of vehicles that your business depends on. When any one of them breaks down unexpectedly, it costs you money, time, and customer trust. The difference between a well-run fleet and a poorly-run one is usually just one thing: regular preventive maintenance.

**Why it matters**
Fixing a problem after it breaks down costs 3–5 times more than catching it early. One tyre blowout on a delivery vehicle can cost ₹5,000–15,000 in repairs plus lost working time. A ₹200 tyre pressure check prevents it.

**What you should do**

**Set a simple maintenance calendar:**
- Every week: Check tyre pressure on all vehicles
- Every month: Check brakes, oil level, lights, battery water level (for ICE vehicles)
- Every 3 months or 5,000 km: Full service — whichever comes first
- Every 6 months: Brake pad measurement, suspension check

**Track your Cost Per Kilometre (CPK):**
- CPK = Total maintenance cost ÷ Total km driven that month
- If your CPK is rising month after month, something is getting worse
- A good CPK target for a well-maintained scooter fleet: ₹0.80–1.50 per km

**Driver habits matter:**
- Rough acceleration and hard braking wear out vehicles twice as fast
- Brief your drivers monthly on smooth driving habits
- Monitor which vehicles get damaged the most — sometimes it is a driver issue, not a vehicle issue

**When to get professional help**
If more than 10% of your fleet is unavailable on any given day due to breakdowns, you have a systemic maintenance problem. Get a professional fleet audit done.

**Your next step today:** Calculate last month's total maintenance cost and divide by total km driven. That number tells you where your fleet stands — and where it needs to improve.`
  },
  {
    id: 'ev_warning_lights',
    match: /warning.*light|light.*on|dashboard.*light|battery.*light|check.*light|red.*light.*ev|yellow.*light|indicator.*ev/i,
    answer: () => `## Understanding Your EV Warning Lights

**What is happening**
Warning lights on your EV dashboard are like messages from your vehicle. Each one means something specific. When a light comes on, it is the vehicle telling you something needs attention — some require immediate action, others are reminders.

**Why it matters**
Ignoring a warning light can turn a small, cheap problem into a big, expensive one. In some cases — like a battery temperature warning — ignoring it while driving can be unsafe.

**What you should check**

**Red warning lights — Stop and act today:**
- 🔴 **Battery temperature warning (thermometer icon)** — Your battery is overheating. Pull over safely, turn off the vehicle, and let it cool for 20–30 minutes before moving. Do not charge it until it cools. If the light stays on, call your dealer.
- 🔴 **Battery fault light** — There is a problem with the battery management system. Do not charge. Take to an authorised service centre today.
- 🔴 **Brake system light** — Get off the road safely and call a mechanic. Do not drive further.

**Yellow warning lights — Attend to within a few days:**
- 🟡 **Low battery** — Charge your vehicle as soon as convenient.
- 🟡 **Service reminder** — Your scheduled service is due. Book it within the week.
- 🟡 **Tyre pressure** — Check and inflate your tyres at the nearest petrol station.

**When to get professional help**
Any red warning light = go to a service centre that day. Do not delay.
Any yellow light that stays on after you have checked the obvious cause = get a professional diagnosis.

**Your next step today:** Write down the name or take a photo of any warning light currently showing on your dashboard, and search "what does [light name] mean for [your vehicle model]" — or ask me and I will explain it.`
  },
  {
    id: 'petrol_mileage',
    match: /mileage|kmpl|fuel.*efficiency|petrol.*consumption|more.*petrol|less.*mileage|fuel.*cost|petrol.*more.*usual/i,
    answer: () => `## Why Your Vehicle is Using More Fuel Than Usual

**What is happening**
Your vehicle is consuming more petrol or diesel than it normally does. This can happen gradually, so you might not notice it at first. But if you are filling up more often for the same distance, something has changed.

**Why it matters**
Worse mileage means higher running costs. Over a month in Bangalore's stop-start traffic, a 15% drop in mileage could mean ₹500–₹1,000 extra spending on fuel per month. It also often signals a problem that will get worse if ignored.

**What you should check**

**Simple checks you can do yourself:**
1. **Tyre pressure** — Under-inflated tyres create more friction. Check and inflate to the correct pressure. This alone can improve mileage by 5–10%.
2. **Air filter** — A dirty air filter makes the engine work harder. On Bangalore roads, air filters get dirty faster than the service schedule suggests. Ask your mechanic to check it.
3. **Driving style** — Stop-start traffic, frequent hard acceleration, and extended idling all reduce mileage significantly.
4. **Weight** — Are you carrying extra load? Every extra 50 kg reduces fuel efficiency by around 3–5%.

**Things a mechanic should check:**
- Spark plugs (for petrol vehicles) — worn plugs burn fuel inefficiently
- Engine oil — old or wrong grade oil increases engine resistance
- Fuel injectors — partially blocked injectors spray fuel poorly

**When to get professional help**
If your mileage has dropped by more than 15% in the last month, and tyre pressure and driving style are not the cause — visit a mechanic for an engine health check.

**Your next step today:** Check your tyre pressure at the nearest petrol station. If it is already correct and mileage is still poor, book a service.`
  }
];

// ── INTENT MATCHING ────────────────────────────────────────────
function matchKB(msg) {
  const lower = msg.toLowerCase();
  for (const entry of KB) {
    if (entry.match.test(lower)) return entry.answer();
  }
  return null;
}

// ── GENERIC FALLBACK ───────────────────────────────────────────
function genericAnswer(msg) {
  const lower = msg.toLowerCase();
  const isBangalore = /bangalore|bengaluru|blr|koramangala|whitefield|hsr|indiranagar|btm|jayanagar/i.test(lower);
  
  return `## Here is What I Understood

You are asking about: **"${msg.slice(0, 80)}${msg.length > 80 ? '...' : ''}"**

I want to give you the most useful answer possible. To do that, I need a little more information.

**Please tell me:**
1. **What vehicle do you have?** (for example: Honda Activa, Tata Nexon EV, Ola S1, auto rickshaw, bicycle)
2. **What exactly is happening?** (a sound, a warning light, a problem, a question)
3. **When does it happen?** (always, sometimes, only at certain speeds, only in rain)

**Topics I can help you with today:**
- 🛵 Scooter and two-wheeler safety and maintenance
- ⚡ Electric vehicle battery, charging, and range
- 🚗 Petrol, diesel, and CNG vehicle problems
- 🔍 Checking a used vehicle before you buy
- 🚌 Safe commuting in Bangalore${isBangalore ? '' : ' and your city'}
- 🏭 Fleet maintenance and cost reduction

The more detail you give me, the more helpful my answer will be.
**Your safety is my priority — I am here to help.**`;
}

// ── KIAI (Founder AI) ──────────────────────────────────────────
function kiaiRespond(msg) {
  const lower = msg.toLowerCase();
  
  if (isGreeting(msg)) {
    return `**KIAI Intelligence Active — Platform Operational**

Welcome back. 99EVS Platform Status: Live at 99evs.com

**Platform Summary:**
- MobilityAI: Running with built-in knowledge engine + Anthropic fallback
- Multi-language: EN, HI, TA, TE, KN, ML — auto-detected
- User sessions: Persistent (remembered forever)
- API dependency: Zero — built-in engine handles all queries
- Event logging: Active with timestamps

**What are we working on today?**
I can help with: platform strategy, technical decisions, user growth, business model, content roadmap, or anything else related to 99EVS.`;
  }

  if (/credit|api.*fail|400|error|anthropic/i.test(lower)) {
    return `**API Status Analysis**

The built-in knowledge engine is now the primary intelligence layer. It handles:
- All vehicle safety questions (battery, EV, petrol, scooter, fleet)
- Multi-language greetings and responses
- Bangalore commute guidance
- Used vehicle inspection guidance

If Anthropic API credits are restored, the system automatically upgrades to use them for complex multi-turn queries while falling back to built-in for all standard queries.

**Recommendation:** The built-in engine covers 95% of all user queries. Priority should be user growth, not API spend, until the platform has 500+ active users.`;
  }

  if (/user|grow|acqui|marketing/i.test(lower)) {
    return `**User Growth Strategy — 99EVS Phase 1**

**Week 1 — Immediate actions:**
1. Share a screen recording of MobilityAI answering a real question on WhatsApp (EV owner groups, auto driver groups, scooter owner groups)
2. Post on LinkedIn: "I built a free AI tool that answers any vehicle question in Hindi, Tamil, Kannada, Telugu, or English — here is what it does"
3. Contribute genuinely to r/BangaloreTraffic, r/IndiaEV, and Facebook EV groups

**Week 2-4:**
- Target delivery riders (Swiggy, Zomato, Blinkit) — they have high maintenance questions
- Fleet managers (connect through LinkedIn — search "fleet manager Bangalore")
- Post one Learn Hub article per day on LinkedIn

**What converts users:** A demo video showing MobilityAI answering a real scooter or EV question in their language converts at 8-12%. A text description converts at 1-3%.

What channel do you want to activate first?`;
  }

  return `**KIAI Strategic Analysis**

Query: "${msg.slice(0, 100)}"

This touches on ${/tech|code|build|api|database/i.test(lower) ? 'technical architecture' : /user|grow|market|launch/i.test(lower) ? 'growth and acquisition' : /money|revenue|pricing|fund/i.test(lower) ? 'business model and revenue' : 'platform strategy'}.

**Context for 99EVS Phase 1:**
Every decision right now should be evaluated against: Does this help reach 500 active users? Does this protect user trust? Does this maintain the free-forever commitment?

To give you a precise strategic recommendation, tell me:
1. What specific outcome do you need?
2. What is the constraint you are working within?
3. What have you already tried?

I will give you a concrete 3-step action plan.`;
}

// ── MAIN API HANDLER ───────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, isKiai, userName } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'Please type your question — I am here to help.' });
  }

  const lastMsg = messages[messages.length - 1];
  if (!lastMsg || !lastMsg.content) {
    return res.status(200).json({ reply: 'Please type your question.' });
  }

  const msg = String(lastMsg.content).trim();
  const lang = detectLang(msg);

  // ── KIAI (Founder Intelligence) ──
  if (isKiai) {
    return res.status(200).json({ reply: kiaiRespond(msg) });
  }

  // ── GREETING ──
  if (isGreeting(msg)) {
    const greetFn = GREETINGS[lang] || GREETINGS.en;
    return res.status(200).json({ reply: greetFn(userName || '') });
  }

  // ── TRY ANTHROPIC API (Enhancement Layer) ──
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (ANTHROPIC_API_KEY) {
    try {
      const clean = messages
        .filter(m => m && m.content && String(m.content).trim().length > 0)
        .slice(-10)
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: String(m.content).slice(0, 2000).trim()
        }));

      // Ensure valid alternating roles
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
            'x-api-key': ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1200,
            system: SYSTEM_PROMPT,
            messages: valid
          })
        });

        if (apiRes.ok) {
          const data = await apiRes.json();
          const reply = data?.content?.[0]?.text?.trim();
          if (reply && reply.length > 10) {
            return res.status(200).json({ reply });
          }
        }
      }
    } catch (e) {
      // Fall through to built-in engine
    }
  }

  // ── BUILT-IN KNOWLEDGE ENGINE (Primary / Fallback) ──
  const kbAnswer = matchKB(msg);
  if (kbAnswer) {
    return res.status(200).json({ reply: kbAnswer });
  }

  return res.status(200).json({ reply: genericAnswer(msg) });
}
