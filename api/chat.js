export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, isKiai, lang } = req.body;
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });
  }

  if (!messages || !Array.isArray(messages) || !messages.length) {
    return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });
  }

  const clean = messages
    .filter(m => m?.content && String(m.content).trim())
    .slice(-20)
    .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: String(m.content).slice(0, 3000).trim() }));

  if (!clean.length) return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });

  const valid = [];
  let last = null;
  for (const m of clean) { if (m.role !== last) { valid.push(m); last = m.role; } }
  if (valid[0]?.role !== 'user') return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });

  const MOBILITY = `You are MobilityAI, the intelligence engine of 99EVS.com by Kiran SR. World-class EV engineer, fleet strategist, BMS analyst, vehicle safety advisor.

LANGUAGE: Detect the user's language from their message. Respond in THAT SAME LANGUAGE. If they write in Hindi, respond in Hindi. Tamil → Tamil. Kannada → Kannada. Telugu → Telugu. English → English. Always match their language.

GREETING RULE: When user says hi/hey/hello/any casual opener in ANY language, respond with a warm welcome explaining what MobilityAI does and list 6 capability categories with examples in their language.

STRUCTURE every technical response:
## Overview
## Technical Explanation  
## Practical Application
## Risk Factors
## Optimization Strategy
**Next step:** [specific action]

RULES: Never guess facts. Safety first always. Educate — user must understand WHY. Cover EVs, ICE, CNG, hybrid, fleet, battery, resale, charging, BMS.`;

  const KIAI = `You are KIAI, exclusive founder intelligence of 99EVS.com for Kiran SR only.
On greetings: introduce yourself warmly, ask what to work on.
Advise on: platform strategy, business model, tech architecture, vendors, security, growth, investors, AI optimization, competitive analysis, revenue.
Platform Phase 1 live: MobilityAI + KIAI + Learn Hub + Google OAuth + server-side auth on Vercel.
Speak as trusted co-founder + CTO. Strategic, direct. 90-day thinking. Flag all risks first.`;

  try {
    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 1500, system: isKiai ? KIAI : MOBILITY, messages: valid })
    });

    console.log('[99EVS] Anthropic status:', apiRes.status);

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error('[99EVS] API error:', errText);

      // LOW CREDITS — use built-in AI seamlessly
      if (errText.includes('credit balance') || errText.includes('billing') || apiRes.status === 402) {
        console.log('[99EVS] Credits low — switching to built-in AI');
        return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });
      }
      if (apiRes.status === 401) return res.status(200).json({ reply: '**API key rejected.** Go to console.anthropic.com → create new key → update in Vercel env vars → redeploy.', source: 'error' });
      if (apiRes.status === 429) return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });

      return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });
    }

    const data = await apiRes.json();
    const reply = data?.content?.[0]?.text?.trim();
    if (!reply) return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });

    return res.status(200).json({ reply, source: 'ai' });

  } catch (err) {
    console.error('[99EVS] Network error:', err.message);
    return res.status(200).json({ reply: builtInAI(messages, isKiai, lang), source: 'builtin' });
  }
}

/* ═══════════════════════════════════════════════════════════
   BUILT-IN AI ENGINE — Works forever, zero API dependency
   Handles: greetings, battery, fleet, range, charging,
   buying/selling, safety, ICE, CNG, hybrid, general
═══════════════════════════════════════════════════════════ */
function builtInAI(messages, isKiai, lang) {
  const last = Array.isArray(messages) ? messages.filter(m => m.role === 'user').pop() : null;
  const q = last?.content ? String(last.content).toLowerCase().trim() : '';

  if (isKiai) return kiaiResponse(q);

  // GREETING
  if (isGreeting(q)) return getWelcome(lang, q);

  // LANGUAGE DETECTION & ROUTING
  if (isHindi(q)) return hindiResponse(q);
  if (isKannada(q)) return kannadaResponse(q);
  if (isTamil(q)) return tamilResponse(q);
  if (isTelugu(q)) return teluguResponse(q);

  // TOPIC ROUTING
  if (hasBattery(q)) return batteryResponse(q);
  if (hasFleet(q)) return fleetResponse(q);
  if (hasRange(q)) return rangeResponse(q);
  if (hasCharging(q)) return chargingResponse(q);
  if (hasBuying(q)) return buyingResponse(q);
  if (hasSafety(q)) return safetyResponse(q);
  if (hasICE(q)) return iceResponse(q);
  if (hasMotor(q)) return motorResponse(q);
  if (hasMaintenance(q)) return maintenanceResponse(q);
  if (hasEV(q)) return evGeneralResponse(q);

  return generalResponse(q);
}

function isGreeting(q) {
  return /^(hi|hey|hello|helo|hii|hiii|good\s*(morning|evening|afternoon|night)|namaste|namaskar|vanakkam|namskar|sup|what'?s up|yo|greetings|howdy|salut|who are you|what are you|tell me about|about you|introduce|what can you do|help me|help|start|begin|get started)[\s!?.]*$/i.test(q) || q.length < 15 && /hi|hey|hello|helo/i.test(q);
}

function isHindi(q) { return /[\u0900-\u097F]/.test(q) || /\b(mera|meri|kya|hai|nahi|aur|ek|bahut|kitna|kaise|batao|dijiye|chahiye|gaadi|gadi|battery|engine)\b/i.test(q); }
function isKannada(q) { return /[\u0C80-\u0CFF]/.test(q); }
function isTamil(q) { return /[\u0B80-\u0BFF]/.test(q); }
function isTelugu(q) { return /[\u0C00-\u0C7F]/.test(q); }

function hasBattery(q) { return /\b(battery|bms|soh|soc|cell|lithium|lfp|nmc|nca|charge cycle|degradat|capacity|kwh|volt|amp|dendrite|thermal|pack|module)\b/.test(q); }
function hasFleet(q) { return /\b(fleet|multiple vehicle|bulk|maintenance schedule|preventive|predictive|cpk|cost per km|downtime|uptime|logistics|transport|commercial|operator)\b/.test(q); }
function hasRange(q) { return /\b(range|km|distance|how far|how many km|mileage|anxiety|rated|actual|real.?world|wltp|arai)\b/.test(q); }
function hasCharging(q) { return /\b(charg|charger|ac charge|dc charge|fast charge|slow charge|plug|kwh|charging station|ocpp|ev station|level 2|level 3|ccs|chademo|type 2|bharat ac|regen)\b/.test(q); }
function hasBuying(q) { return /\b(buy|purchase|used|second.?hand|resale|inspect|valuat|price|worth|cheat|fraud|verify|check before|pre.?purchase|sell)\b/.test(q); }
function hasSafety(q) { return /\b(safe|danger|risk|fire|thermal runaway|accident|crash|flood|water|explod|hazard|warning|emergency|smoke|smell)\b/.test(q); }
function hasICE(q) { return /\b(petrol|diesel|cng|hybrid|engine|rpm|torque|gear|clutch|transmission|exhaust|emission|fuel|carburetor|spark plug|injector|coolant|oil|radiator)\b/.test(q); }
function hasMotor(q) { return /\b(motor|controller|throttle|torque|power|rpm|inverter|vcu|drive unit|regen|regenerat|stator|rotor|winding)\b/.test(q); }
function hasMaintenance(q) { return /\b(service|maintain|maintain|repair|fix|problem|issue|fault|error|warning light|noise|vibrat|wobble|squeal|leak|check|diagnos)\b/.test(q); }
function hasEV(q) { return /\b(ev|electric vehicle|electric car|electric scooter|electric bike|nexon|ather|ola|bounce|tata|bgauss|ampere|pure ev|revel|okinawa|hero electric|revolt|ultraviolette)\b/.test(q); }

function getWelcome(lang, q) {
  return `## Welcome to MobilityAI — 99EVS.com

I am MobilityAI, your personal vehicle intelligence engine. Built by Kiran SR to give every vehicle owner, fleet manager, and mobility professional access to engineering-grade knowledge — instantly, free, forever.

**Here is what I can help you with:**

**🔋 Battery & EV Systems**
Battery health, range loss, BMS faults, charging problems, SoH diagnosis.
*Example: "My Nexon EV gives only 180km but rated 312km — why?"*

**🚌 Fleet Management**
Maintenance scheduling, cost-per-km reduction, downtime prevention, fleet health.
*Example: "How do I reduce my fleet maintenance cost by 30%?"*

**🔍 Used Vehicle Inspection**
Pre-purchase checks for any EV, petrol, diesel or CNG vehicle.
*Example: "What to check before buying a used Ather 450X?"*

**🔧 Vehicle Diagnosis**
Warning lights, unusual sounds, performance drops — step-by-step diagnosis.
*Example: "My EV throttle is sluggish after full charge. Why?"*

**⚡ Charging & Range**
Charging habits, fast charge risks, range optimization, regen braking.
*Example: "Is DC fast charging every day bad for my battery?"*

**🚗 ICE, CNG & Hybrid**
Petrol, diesel, CNG and hybrid vehicles fully covered.
*Example: "My CNG vehicle loses power above 80km/h. What to check?"*

**To get the best answer, tell me:**
1. Your vehicle type (EV / Petrol / Diesel / CNG / Hybrid)
2. Brand and model (e.g. Tata Nexon EV, Ather 450X, Hero Splendor)
3. Your specific question or problem

I am here to make you the most informed person about your vehicle. What would you like to know?`;
}

function batteryResponse(q) {
  const isDrain = /drain|fast|quick|sudden|drop|low|less/.test(q);
  const isHealth = /health|soh|degradat|old|age|wear/.test(q);
  const isCharging = /charg|full|100%|overnight/.test(q);
  const isSwelling = /swell|bulg|puff|expand|deform/.test(q);

  if (isSwelling) return `## Overview
Battery swelling is a serious safety condition that requires immediate action. Do not ignore this.

## Technical Explanation
Swelling occurs when gas builds up inside battery cells — caused by electrolyte decomposition, overcharging beyond cell voltage limits, internal short circuits, or manufacturing defects. The gas has nowhere to go, so the cell physically expands. This is a precursor to thermal events in severe cases.

## Practical Application
1. Stop charging the vehicle immediately
2. Do not drive the vehicle
3. Park it outdoors, away from structures and other vehicles
4. Do not attempt to puncture, open or press the swollen area
5. Contact your EV manufacturer's emergency line
6. Book immediate service — this is warranty-covered if battery is under 3 years old in most brands

## Risk Factors
Swollen cells can progress to thermal runaway. The risk is low in LFP chemistry but real in NMC/NCA. Do not leave the vehicle unattended in an enclosed space.

## Optimization Strategy
After repair, maintain 20-80% SoC for daily charging. Avoid DC fast charging above 80%. Request BMS firmware update during the service visit.

**Next step:** Stop driving this vehicle today and call your manufacturer's service line.`;

  if (isDrain) return `## Overview
Faster-than-normal battery drain indicates either battery degradation, a parasitic load issue, driving pattern change, or a BMS calibration problem. Each has a different root cause and fix.

## Technical Explanation
Battery capacity decreases over time (SoH degradation) at roughly 2-3% per year in healthy conditions. Sudden 20%+ drain increase usually points to: cell imbalance in the BMS (one weak cell triggers early cutoff), increased parasitic loads (a component drawing power when parked), software bugs after OTA updates, or seasonal temperature effects reducing usable capacity.

## Practical Application
1. Check your SoH via the OEM app (Tata EV Connect, Ather App, OLA app)
2. Note if drain happens while parked (parasitic load) or only while driving
3. Compare range before and after any recent software update
4. Check tyre pressure — under-inflation increases consumption 5-8%
5. Test in Eco mode with AC off to isolate battery vs consumption factors
6. Book a BMS diagnostic if SoH shows below 80% on a vehicle under 3 years old

## Risk Factors
Ignoring cell imbalance accelerates degradation. A weak cell forces the BMS to cut power early, reducing effective capacity further each cycle.

## Optimization Strategy
Maintain 20-80% SoC daily. Avoid fast charging above 80%. Pre-condition cabin while plugged in (uses grid power, not battery). Check tyre pressure monthly.

**Next step:** Check your OEM app for SoH reading and share the number for a more specific diagnosis.`;

  if (isHealth) return `## Overview
Battery health (SoH — State of Health) is the most important metric for any EV owner. It tells you how much of your original battery capacity remains.

## Technical Explanation
SoH degrades due to: chemical reactions in the electrolyte during charge/discharge cycles, lithium plating at low temperatures, heat stress above 45°C, and calendar aging (time). LFP batteries (Tata Nexon EV, BYD) degrade at roughly 1.5-2% per year. NMC batteries (Ather, MG ZS EV) at 2-3% per year under normal use.

**SoH Guide:**
- 95-100%: Excellent — battery is nearly new
- 85-95%: Very good — normal for 2-3 year old EV
- 75-85%: Good — noticeable range reduction, still usable
- Below 75%: Consider professional assessment — warranty may cover replacement

## Practical Application
1. Check SoH in your OEM app monthly
2. Use an OBD-II Bluetooth dongle + EV-compatible app for deeper cell data
3. Ask your service centre for a BMS health report at every service
4. Track your real-world range monthly against first 3 months of ownership

## Risk Factors
SoH below 70% on a vehicle under 5 years old may indicate a warranty-covered defect. Document all service visits and keep charge records.

## Optimization Strategy
Charge to 80% daily. Only charge to 100% before long trips. Avoid DC fast charging more than 2-3 times per week. Keep the vehicle plugged in during extreme heat if your model supports thermal conditioning while charging.

**Next step:** Share your vehicle model and current SoH reading for a specific assessment.`;

  return `## Overview
Your battery question covers one of MobilityAI's core specialisations. Let me give you the most relevant information based on what you've asked.

## Technical Explanation
EV batteries are electrochemical systems where lithium ions move between anode and cathode through an electrolyte. The BMS (Battery Management System) monitors every cell's voltage, temperature, and state of charge in real time, protecting the pack from overcharge, over-discharge, and thermal events.

**Key metrics every EV owner should know:**
- **SoC** (State of Charge): How full your battery is right now (%)
- **SoH** (State of Health): How much capacity remains vs when new (%)
- **Cell Voltage**: Individual cell health — should be within 0.05V of each other
- **Charge Cycles**: How many full charge/discharge cycles completed

## Practical Application
1. Download your OEM app and check battery statistics weekly
2. Maintain 20-80% SoC for daily use (extends life significantly)
3. Only charge to 100% the night before a long journey
4. Avoid charging to full and leaving it parked for days
5. In extreme heat, park in shade — heat is the fastest degrader

## Risk Factors
The three enemies of any lithium battery: heat above 45°C, deep cycling below 10%, and frequent DC fast charging. Any one of these accelerates degradation.

## Optimization Strategy
LFP batteries (Tata Nexon EV, BYD) can charge to 100% daily without issue. NMC batteries (Ather, MG, Hyundai) benefit significantly from the 20-80% rule. Know your chemistry, adapt your habits.

**Next step:** Tell me your specific vehicle model and what symptoms you are seeing for a precise diagnosis.`;
}

function fleetResponse(q) {
  return `## Overview
Fleet intelligence is one of 99EVS MobilityAI's core specialisations. Whether you operate 5 vehicles or 500, the principles that reduce cost and maximise uptime are the same.

## Technical Explanation
Fleet management operates at three tiers:
- **Reactive:** Fix when broken — costs 3-4x more per incident, creates unplanned downtime
- **Preventive:** Scheduled service by mileage/time — predictable costs, planned downtime
- **Predictive:** Data-driven forecasting — reduces downtime 70%, extends component life 15-25%

The transition from reactive to preventive alone typically reduces total fleet maintenance spend by 20-35%.

## Practical Application
**Immediate actions (this week):**
1. Create a mileage log for every vehicle — track km per day per vehicle
2. Set service reminders: every 5,000km for tyre/brake check, every 10,000km for full service
3. Calculate your current Cost Per Kilometre: total monthly maintenance ÷ total monthly km
4. Identify your top 3 highest-CPK vehicles — these need immediate attention

**EV Fleet Checklist:**
- Every 5,000km: Tyre pressure, brake inspection, charging connector condition
- Every 10,000km: BMS health report, suspension check, software update verification
- Every 6 months: Full battery diagnostic with SoH and cell balance report
- Annually: Full electrical inspection, safety system certification

## Risk Factors
The biggest fleet risk is a single vehicle failure causing cascade — one broken charging vehicle blocks the bay and delays others. Always maintain 10-15% spare capacity in your fleet.

## Optimization Strategy
Target: Cost Per Kilometre below ₹1.20 for electric 3-wheelers, below ₹2.50 for electric cars. If above these benchmarks, your maintenance regime needs restructuring.

**Next step:** Tell me your fleet size, vehicle type, and current monthly maintenance spend — I will calculate your CPK and identify where to cut costs.`;
}

function rangeResponse(q) {
  return `## Overview
Range anxiety is the most common EV concern. The gap between certified range and real-world range is real, predictable, and manageable once you understand the science behind it.

## Technical Explanation
Certified range (ARAI in India, WLTP in Europe) is tested under controlled conditions — moderate temperature, no AC, steady speed. Real-world range is 70-85% of this figure due to:

1. **Speed:** Aerodynamic drag increases with speed². At 100km/h you use 35% more energy than at 70km/h
2. **Temperature:** Below 15°C, battery chemistry slows — lose 15-30% range. Above 40°C, thermal management consumes energy
3. **Air Conditioning:** Draws 1-3kW continuously — 10-20% range reduction on hot days
4. **Battery Age:** At 85% SoH, you get 85% of original range. Expected and normal
5. **Load:** Every 100kg extra costs 5-8% range
6. **Tyre Pressure:** Under-inflation increases rolling resistance — monthly checks are free range recovery

## Practical Application
To maximise real-world range:
1. Drive in Eco mode — most significant single factor
2. Maximise regenerative braking — anticipate stops, coast early
3. Pre-condition your cabin while still plugged in (uses grid power, not battery)
4. Check tyre pressure monthly — inflate to upper end of recommended range
5. On highways, stay below 90km/h for optimal efficiency
6. Avoid rapid acceleration — smooth driving adds 10-15% range

## Risk Factors
Sudden range drop of 20%+ over 2-3 weeks (not explained by weather/load change) indicates possible BMS issue or accelerated cell degradation. Get a service centre BMS diagnostic.

## Optimization Strategy
A driver who masters Eco mode + regen braking in city traffic typically achieves 15-25% better range than a driver using default settings. In Bengaluru/Mumbai/Delhi stop-start traffic, this can mean 40-60km extra range per charge.

**Next step:** Tell me your vehicle model, your current real-world range, and your typical driv
