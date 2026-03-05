// ═══════════════════════════════════════════════════════════
// 99EVS MobilityAI — Complete Intelligence Engine
// Built-in knowledge + Anthropic API fallback
// Works at $0 API credits. No limit. No subscription.
// Founder: Kiran SR | 99evs.com
// ═══════════════════════════════════════════════════════════

// ── BUILT-IN MOBILITY INTELLIGENCE ENGINE ──────────────────
// This engine handles all common queries without API costs.
// Anthropic API is called only for novel/complex questions.
// If API credits are zero, this engine takes over completely.

function detectLanguage(text) {
  const t = text.toLowerCase();
  if (/[\u0900-\u097F]/.test(text)) return 'hi';    // Hindi/Devanagari
  if (/[\u0C00-\u0C7F]/.test(text)) return 'te';    // Telugu
  if (/[\u0B80-\u0BFF]/.test(text)) return 'ta';    // Tamil
  if (/[\u0C80-\u0CFF]/.test(text)) return 'kn';    // Kannada
  if (/[\u0900-\u097F]/.test(text)) return 'mr';    // Marathi
  if (/hola|gracias|coche/.test(t)) return 'es';
  if (/bonjour|merci|voiture/.test(t)) return 'fr';
  return 'en';
}

function langGreeting(lang) {
  const g = {
    hi: 'नमस्ते! MobilityAI में आपका स्वागत है।',
    te: 'నమస్కారం! MobilityAI కి స్వాగతం.',
    ta: 'வணக்கம்! MobilityAI-க்கு வரவேற்கிறோம்.',
    kn: 'ನಮಸ್ಕಾರ! MobilityAI ಗೆ ಸ್ವಾಗತ.',
    es: '¡Bienvenido a MobilityAI!',
    fr: 'Bienvenue sur MobilityAI!',
    en: 'Welcome to MobilityAI.'
  };
  return g[lang] || g['en'];
}

function builtInResponse(userMsg, lang) {
  const t = userMsg.toLowerCase().trim();
  const isHindi = lang === 'hi';

  // ── GREETINGS ──
  const greetWords = ['hi','hey','hello','hii','hiiii','helo','helo','sup','yo','namaste','vanakkam','namaskar','good morning','good afternoon','good evening','good night','who are you','what are you','what is mobilityai','tell me about yourself','introduce yourself'];
  if (greetWords.some(g => t.includes(g)) || t.length < 12) {
    return `${langGreeting(lang)}

**Welcome to MobilityAI — your personal vehicle intelligence, powered by 99EVS.com.**

I was created by **Kiran SR** with one mission: give every vehicle owner access to engineering-grade intelligence that was previously only available to specialists. Whether you own a single EV or manage a fleet of 500 vehicles — I give you the same answers a senior automotive engineer would.

---

**Here is what I help you with:**

**🔋 Battery & EV Systems**
Ask about battery health, range loss, charging problems, BMS faults, degradation.
*Example: "My Tata Nexon EV gives only 180km range but it's rated 312km — why?"*

**🚌 Fleet Management**
Ask about cutting maintenance costs, preventive schedules, cost-per-km optimization.
*Example: "How do I reduce my 3-wheeler fleet maintenance cost by 30%?"*

**🔍 Used Vehicle Inspection**
Ask what to check before buying any used EV, petrol, diesel or CNG vehicle.
*Example: "What should I check before buying a used Ather 450X?"*

**🔧 Vehicle Diagnosis**
Describe any warning light, sound, or performance drop — I walk you through it.
*Example: "My EV throttle feels sluggish after full charge. What causes this?"*

**⚡ Charging & Range**
Ask about charging habits, fast charging risks, range optimization.
*Example: "Is DC fast charging every day harmful to my battery?"*

**🚗 ICE, CNG & Hybrid**
I cover all vehicle types — not just EVs.
*Example: "My CNG vehicle loses power above 80km/h — what to check?"*

---

To get the best answer, tell me:
1. Your **vehicle type** (EV / Petrol / Diesel / CNG / Hybrid)
2. Your **brand and model** (e.g. Tata Nexon EV, Ather 450X, Bajaj Auto)
3. Your **specific question or problem**

**I am here to make you the most informed person in the room about your vehicle.**`;
  }

  // ── BATTERY / BMS ──
  if (/(battery|bms|soh|soc|cell|lithium|degradat|capacity|charge cycle|pack|battery health|battery drain|battery problem|charging slow|not charging|won.t charge)/.test(t)) {
    return `## Overview
Your battery question has been identified. Here is a complete engineering-grade diagnosis framework.

## Technical Explanation
EV batteries degrade through three primary mechanisms:
- **Calendar aging** — degradation over time regardless of use. LFP chemistry degrades slower than NMC.
- **Cycle aging** — each charge/discharge cycle slightly reduces maximum capacity. LFP handles 2000+ cycles; NMC 500-800 cycles at 80% SoH.
- **Stress aging** — caused by extreme temperatures, high SoC storage, rapid charging or deep discharge.

**SoH (State of Health)** is the key metric: 100% = new battery. Below 80% = noticeable range impact. Below 70% = assessment required.

**Cell Voltage Balance** is equally important. All cells should be within 0.02-0.05V of each other. High imbalance indicates a failing or weak cell that needs replacement or reconditioning.

## Practical Application
1. Run a BMS diagnostic — via OEM app (Tata EV app, Ather app, etc.) or a service center OBD scan
2. Check SoH percentage — your baseline for all decisions
3. Check cell voltage balance report — look for any outlier cells
4. Review charging history — how many DC fast charges vs AC slow charges
5. Check thermal management — does the cooling system engage during charging?

## Risk Factors
- **Ignoring high cell imbalance** can lead to premature pack failure or in extreme cases thermal runaway
- **Storing at 100% SoC** long-term accelerates NMC degradation significantly
- **Repeated deep discharge below 5%** causes lithium dendrite formation
- Any unusual heat, smell or swelling requires immediate professional inspection

## Optimization Strategy
- Daily charging: keep between 20-80% SoC
- Long trips only: charge to 100%, then drive immediately
- Prefer AC Level 2 charging (overnight) over DC fast charging for daily use
- Store vehicle in shade — high ambient temperatures are the #1 accelerator of battery degradation in India
- Get a professional BMS health report every 12 months

**Next step:** Check your vehicle's battery SoH via the manufacturer app or book a service center diagnostic. Share the SoH percentage with me for a specific assessment.`;
  }

  // ── RANGE ──
  if (/(range|km|kilomet|distance|less range|low range|range anxiet|range drop|range problem|why less|mileage|how far)/.test(t)) {
    return `## Overview
Range below the rated figure is one of the most common EV concerns. The certified range and real-world range are always different — understanding why eliminates range anxiety permanently.

## Technical Explanation
**Why certified range ≠ real range:**
- ARAI certification tests use ideal conditions: 25°C ambient, flat road, constant 50km/h, no accessories
- Real world adds: traffic stops, hills, AC, passengers, speed variation

**Real-world range is typically 70-85% of certified range.** A 312km ARAI-rated Nexon EV delivers approximately 220-260km in real conditions. This is normal and expected.

**The 6 biggest range killers ranked by impact:**
1. **Speed** — aerodynamic drag increases with the square of speed. At 100km/h you use ~40% more energy than at 70km/h
2. **Air Conditioning** — AC compressor draws 1.5-3kW continuously. In Indian summer, expect 15-25% range reduction
3. **Temperature** — battery chemistry slows below 15°C (winter mornings) and thermal management consumes power above 35°C
4. **Battery Age** — normal degradation. 85% SoH = 85% of original range
5. **Load** — every 100kg extra reduces range ~6-8%
6. **Tyre Pressure** — under-inflated tyres increase rolling resistance. 5-8% range loss from poor tyre maintenance

## Practical Application
1. Check tyre pressure monthly — free range recovery
2. Enable ECO mode for city driving
3. Pre-cool cabin before unplugging — use grid power not battery power
4. Drive at 70-80km/h on highways instead of 100km/h
5. Master regenerative braking — read lift-off and anticipate stops
6. Check battery SoH if range has dropped suddenly vs gradually

## Risk Factors
- Sudden range drop (>20% in a week) without weather change indicates a battery or BMS issue — get diagnostic immediately
- Gradual range drop over 2-3 years is normal aging
- Repeatedly draining to below 10% accelerates long-term degradation

## Optimization Strategy
- Drivers who master regenerative braking in city conditions gain 10-20% real range
- Pre-conditioning the cabin while charging adds 30-50km per hot day
- Route planning at 70km/h instead of 100km/h on highways increases effective range by up to 30%

**Next step:** Tell me your vehicle model, current indicated range, and when the range change started — I will give you a specific diagnosis.`;
  }

  // ── FLEET ──
  if (/(fleet|multiple vehicle|vehicles|bus|truck|3.wheel|three.wheel|auto rickshaw|delivery|logistics|transport|uptime|maintenance cost|cost per km|cpk|breakdowns|downtime)/.test(t)) {
    return `## Overview
Fleet maintenance strategy directly determines your cost-per-km (CPK), vehicle uptime and driver safety. Getting this right delivers 20-35% reduction in total maintenance spend.

## Technical Explanation
**Three maintenance tiers:**

**Tier 1 — Reactive (worst):** Fix it when it breaks. Unplanned downtime. Emergency repairs cost 3-4x more than scheduled. A ₹2,000 brake job becomes ₹12,000 when neglected to failure.

**Tier 2 — Preventive (good):** Scheduled mileage or time-based servicing. Predictable costs. Planned downtime. Component life extended 20-25%.

**Tier 3 — Predictive (best):** Data-driven. Telematics + historical data predict failures before they happen. Reduces unplanned downtime by up to 70%.

**EV Fleet vs ICE Fleet differences:**
- EVs have far fewer moving parts — no oil changes, no spark plugs, no gearbox service
- EV fleet maintenance is dominated by: battery health, brake system, tyre wear, suspension, charging infrastructure
- Brake pads on EVs last significantly longer due to regenerative braking

## Practical Application
**EV Fleet Preventive Schedule:**
1. Every 5,000km: Tyre pressure check, brake inspection, charging connector inspection
2. Every 10,000km: BMS health scan, suspension check, battery thermal system check
3. Every 6 months: Full battery diagnostic, software updates, electrical inspection
4. Annually: Complete SoH report for all vehicles, replace any vehicle with SoH below 70%

**CPK Calculation (do this monthly):**
Total maintenance cost ÷ Total km driven = CPK
Track per vehicle. Rising CPK is an early warning signal.

## Risk Factors
- A single vehicle with undetected battery issue can strand a driver mid-route — costly and reputation-damaging
- Ignoring tyre wear on fleet vehicles is a major safety and liability risk
- Skipping software updates leaves known BMS bugs unpatched

## Optimization Strategy
- Implement a simple shared spreadsheet tracking each vehicle's CPK monthly
- Rotate vehicles by route to balance wear across the fleet
- Build a 10% spare vehicle buffer to eliminate pressure to run damaged vehicles
- Phase out any vehicle above ₹8 CPK — usually more economical to replace

**Next step:** Tell me your fleet size, vehicle type, and current average monthly maintenance cost. I will calculate your target CPK and show you where the savings are.`;
  }

  // ── USED EV BUYING ──
  if (/(used|second.hand|pre.owned|buy|purchase|inspect|checklist|before buying|should i buy|worth buying|good deal|bad deal|resale)/.test(t)) {
    return `## Overview
Buying a used EV requires a completely different inspection process than a used petrol car. The battery — which represents 40-55% of the vehicle's value — cannot be inspected visually. You need data.

## Technical Explanation
**The core risk:** A used EV can look perfect externally while having a battery at 65% SoH — meaning 35% less range than new. Without a BMS diagnostic you cannot detect this visually.

**Battery degradation indicators:**
- SoH below 80% means noticeable range reduction
- High cell imbalance means one or more cells are failing faster
- High DC fast charge count accelerates degradation
- Thermal events in history indicate potential long-term damage

## Practical Application
**The 12-Point Used EV Inspection Checklist:**

1. ✅ **Battery SoH** — Minimum acceptable: 75%. Ideal: 85%+. Below 70%: negotiate hard or walk away
2. ✅ **Cell Voltage Balance** — All cells within 0.02-0.05V. Check via service center OBD scan
3. ✅ **Charge Cycle Count** — LFP: fine to 2000+ cycles. NMC: concern after 800 cycles
4. ✅ **Charging History** — Check OEM app. Heavy DC fast charge usage accelerates degradation
5. ✅ **Service History** — All records required. Missing records = unknown condition
6. ✅ **RTO Accident History** — Any structural damage near battery pack is a dealbreaker. Check vahaan.gov.in
7. ✅ **Charging Port Condition** — Both AC and DC ports. Check for burn marks, bent pins, corrosion
8. ✅ **Range Test** — Charge to 100%, drive normally, compare actual range to SoH-adjusted rated range
9. ✅ **Thermal System Check** — Start after 2 hours in direct sun. Any immediate thermal warnings = concern
10. ✅ **Software Version** — Confirm latest OTA updates are installed
11. ✅ **Tyre and Suspension** — Check tread depth and look for uneven wear (alignment issues)
12. ✅ **Price Validation** — Every 5% SoH below 95% = meaningful price reduction. Battery replacement: ₹3-8 lakh

## Risk Factors
- Never buy without a written BMS diagnostic report
- "Certified pre-owned" from dealers does not always include battery diagnostic
- Cosmetic condition means nothing — the battery is what matters
- Any seller who refuses a diagnostic inspection is hiding something

## Optimization Strategy
- Get an independent mechanic who specialises in EVs to inspect — not the seller's workshop
- Use the 12-point checklist as a negotiation tool — every issue is a price reduction
- Factor in battery replacement cost if SoH is low: your total cost of ownership includes this

**Next step:** Tell me the specific vehicle you're considering (model, year, price, claimed SoH) and I will give you a specific assessment and negotiation strategy.`;
  }

  // ── THERMAL RUNAWAY / SAFETY ──
  if (/(thermal.runaway|fire|burning|smoke|smell|hot battery|overheat|explode|catch fire|smoking|sparks|battery fire|ev fire)/.test(t)) {
    return `## ⚠️ SAFETY PRIORITY RESPONSE

## Overview
If your vehicle is currently smoking, has a burning smell, or shows flames — **EXIT THE VEHICLE IMMEDIATELY. Move at least 30 metres away. Call emergency services (112).**

For education and prevention — thermal runaway is the most serious safety failure in lithium battery systems. Understanding it protects you and your vehicle.

## Technical Explanation
Thermal runaway is a self-accelerating chain reaction where heat generation inside cells exceeds the battery's ability to dissipate it. Once triggered, it is self-sustaining.

**Causes:**
- **Physical impact** — collision damage can create internal short circuits that develop hours or days later
- **Overcharging** — charging beyond BMS upper voltage limit generates excessive heat
- **Cell failure** — a single weak cell failing can cascade to adjacent cells
- **Extreme heat** — India's 45°C+ ambient temperatures plus direct sunlight can stress thermal management beyond design limits
- **Non-certified charging** — using uncertified chargers that bypass BMS protection

## Practical Application — Prevention Checklist
1. Use **only manufacturer-certified chargers** — never third-party uncertified equipment
2. **Never park in direct sun** for extended periods during summer
3. **Get immediate battery inspection** after any collision — even minor ones
4. **Never ignore battery warning lights** — any BMS alert requires same-day inspection
5. Maintain **20-80% SoC** for daily use — reduces cell stress significantly
6. **Never charge to 100% and leave overnight** regularly with NMC batteries

## Risk Factors
**Early warning signs — act immediately if you see these:**
- Unusual heat from battery area or floor of vehicle
- Battery warning lights appearing for first time
- Sudden unexplained range drop (>20%)
- Chemical or burning smell near vehicle
- Any swelling or deformation of battery casing
- Vehicle behaving erratically despite full charge

## Emergency Protocol
If any of the above occur:
1. **Stop driving** — pull over safely immediately
2. **Exit the vehicle** — take all occupants out
3. **Move 30+ metres away** — lithium fires can reignite
4. **Call 112** — inform them it is an EV fire
5. **Do NOT** open the battery compartment
6. **Do NOT** pour water — lithium fires require specialist foam

**Next step:** If you saw any warning signs today — stop driving the vehicle now and call your service center. Safety is the only priority.`;
  }

  // ── CHARGING ──
  if (/(charg|fast charg|slow charg|dc charg|ac charg|level 2|charging station|charging time|how long to charge|overnight|charging habit|charger)/.test(t)) {
    return `## Overview
Charging habits are the single biggest factor in long-term battery health and your experience as an EV owner. Getting this right adds years to your battery life.

## Technical Explanation
**Two charging types and their impact:**

**AC Charging (Level 1/2) — 3.3kW to 7.4kW:**
- Charges slowly (4-8 hours for full charge)
- Generates minimal heat inside the battery
- Uses the vehicle's onboard charger
- **Ideal for daily use and overnight charging**
- Least stress on battery chemistry

**DC Fast Charging — 25kW to 100kW+:**
- Charges rapidly (30-60 minutes)
- Pushes high current directly to battery
- Generates significant heat
- BMS throttles speed above 80% SoC to protect cells
- **Use for journeys only — not daily habit**

**The 20-80% Rule:**
For NMC batteries, charging between 20-80% SoC means you are always in the lowest-stress voltage range of the cell. This alone can extend battery life by 30-50%.

For LFP batteries (Tata Nexon EV, BYD): the chemistry is more tolerant — charging to 100% regularly is acceptable.

## Practical Application
1. **Set charging schedule** in vehicle/app to stop at 80% for daily commuting
2. **Use AC overnight charging** as primary charging method
3. **Reserve DC fast charging** for when you genuinely need rapid top-up on journeys
4. **Never leave at 100% SoC** for more than a few hours with NMC batteries
5. **Pre-condition cabin while charging** — use grid electricity to cool/heat cabin before unplugging
6. **Check charging connector** monthly for corrosion or damage

## Risk Factors
- Using uncertified third-party chargers can bypass BMS protection — serious risk
- Charging in direct sunlight in summer heat stresses thermal management
- Leaving vehicle at very low SoC (below 5%) for days causes irreversible cell damage
- Repeatedly using DC fast charging daily can reduce battery life by 20-30% over 5 years

## Optimization Strategy
- If you have home charging: AC overnight is perfect. Cost 2-4x less than public chargers.
- If you only use public charging: use DC for 20-80% fills, not 0-100%
- For fleet vehicles: stagger charging schedules to spread grid load and reduce peak demand charges

**Next step:** Tell me your vehicle model and daily commute distance — I will give you the optimal charging schedule specific to your situation.`;
  }

  // ── NEXON EV SPECIFIC ──
  if (/(nexon|tata nexon|nexon ev|nexon prime|nexon max)/.test(t)) {
    return `## Overview
Tata Nexon EV is India's best-selling electric SUV. Here is comprehensive engineering knowledge for Nexon EV owners.

## Technical Explanation
**Battery specifications:**
- Nexon EV (Standard): 30.2kWh LFP (Lithium Iron Phosphate) — ARAI range: 312km
- Nexon EV Prime: 30.2kWh LFP — improved motor efficiency
- Nexon EV Max: 40.5kWh NMC — ARAI range: 437km
- Ziptron motor: Permanent Magnet AC with IP67 protection

**LFP chemistry advantages for Nexon owners:**
- Can charge to 100% regularly without significant degradation (unlike NMC)
- Higher thermal stability — lower thermal runaway risk
- 2000+ cycle life at 80% capacity
- Less affected by cold temperatures than NMC

**Real-world range (India conditions):**
- Nexon EV (30.2kWh): 200-240km real world in city, 180-210km on highway
- Nexon EV Max (40.5kWh): 280-320km real world

## Practical Application
**Nexon EV owner optimization checklist:**
1. Charge to 100% regularly — LFP is designed for this
2. Use Tata EV app to monitor battery health monthly
3. Enable regen braking — Nexon has 3 levels, use Level 3 in city
4. Enable Eco mode for city driving (+15-20% range)
5. Schedule AC pre-cooling while plugged in (feature in Tata EV app)
6. Annual service at Tata authorised center includes BMS check

**Common Nexon EV issues and solutions:**
- **Range less than 250km:** Normal in highway driving above 80km/h, AC on. Check tyre pressure first.
- **Charging slower than expected:** Check cable, port, and ambient temperature. Below 15°C, charging slows by design.
- **BMS warning light:** Do not ignore. Book service same day.
- **Regen not working as expected:** Check if vehicle is in Sport mode — regen is reduced in Sport.

## Risk Factors
- Water wading: Nexon has IP67 battery protection but avoid sustained flooding beyond 300mm depth
- Aftermarket accessories with non-standard electrical loads can trigger BMS warnings

## Optimization Strategy
Nexon EV owners who use Eco mode + Level 3 regen in city conditions consistently achieve 220-240km real range from a full charge in Bengaluru/Mumbai/Delhi traffic.

**Next step:** Tell me your Nexon EV year, variant, and current average range — I will give you specific optimization advice.`;
  }

  // ── ATHER SPECIFIC ──
  if (/(ather|ather 450|ather 450x|ather 450s|ather rizta|ather 450 apex)/.test(t)) {
    return `## Overview
Ather Energy makes India's most technologically advanced electric scooters. Here is engineering-grade intelligence for Ather owners.

## Technical Explanation
**Ather 450X specifications:**
- Battery: 2.9kWh (net) lithium-ion NMC
- Real-world range: 85-105km (Warp mode), 100-120km (Smart/Eco mode)
- IP67 rated battery and motor
- Liquid-cooled battery thermal management
- Over-the-air (OTA) software updates

**Battery chemistry (NMC):**
- Higher energy density than LFP — more range per kg
- More sensitive to high temperatures than LFP
- 500-800 cycles before noticeable capacity reduction
- Liquid cooling system is critical — keep intake vents clean

## Practical Application
**Ather 450X owner optimisation:**
1. **Do not store above 90% SoC** — NMC benefits from the 20-80% rule more than LFP
2. **Use the Ather app** to check battery health, charging history and session data
3. **Check software version** — Ather releases frequent OTA updates with range and performance improvements
4. **Keep liquid cooling vents** (under seat area) free of dust
5. **Eco mode** for daily commuting — adds 15-25km real-world range
6. **Avoid parking in direct sun** for extended periods — NMC + Indian summer heat = increased degradation

**Common Ather owner questions:**
- **Range dropping year 2+:** Normal. NMC degrades 3-5% annually with good care. Check battery health in Ather app.
- **Charging port heating up:** Check cable. If connector is hot after charge, get inspected.
- **Warp mode range:** Warp mode with aggressive riding will deliver 70-85km. This is by design.
- **Slow charging speed:** Cold mornings slow charging — normal. BMS warms battery before accepting full charge rate.

## Risk Factors
- Using non-Ather chargers: Ather uses proprietary fast charger. Only use Ather certified cables for home charging.
- Battery health below 80%: At this point, Ather's warranty terms may cover a service assessment — check your warranty status.

## Optimization Strategy
Ather owners who use Eco/Smart mode for city commuting and only Warp for performance riding consistently report 10-15% better annual battery health scores than those who use Warp mode daily.

**Next step:** Tell me your Ather model year, battery health percentage from the app, and current range — I will assess your specific situation.`;
  }

  // ── OLA ELECTRIC ──
  if (/(ola|ola s1|ola electric|ola scooter|ola s1 pro|ola s1 air)/.test(t)) {
    return `## Overview
OLA Electric S1 series has significant market presence but specific maintenance needs and known issues that owners must understand.

## Technical Explanation
**OLA S1 Pro specifications:**
- Battery: 3.97kWh (S1 Pro)
- Motor: 8.5kW peak
- Claimed range: 195km
- Real-world range: 100-140km depending on riding mode and conditions

**Key engineering difference from Ather:**
- OLA uses an air-cooled battery (no liquid cooling)
- Air cooling is less effective in high ambient temperatures (35°C+ India summers)
- Makes battery more susceptible to thermal stress in hot conditions
- More important to park in shade and avoid aggressive riding in peak summer heat

## Practical Application
1. **Download the OLA app** and monitor battery health monthly
2. **Keep OTA software updated** — OLA has released multiple fixes for software-related range issues
3. **Park in shade** — air-cooled battery in direct Indian sun loses range faster than liquid-cooled systems
4. **Use Eco mode** for daily commuting — S1 Pro real range in Eco is 130-150km vs 100-110km in Normal
5. **Service at OLA authorised centers only** — third-party shops may not have OBD access for BMS diagnostics
6. **Check for service bulletins** — OLA has issued several software-related patches

## Risk Factors
- OLA's after-sales network has been inconsistent — if you face service delays, document everything in writing
- Battery issues under warranty require OLA service center visit — maintain all service records
- Air-cooled batteries need more careful heat management in summer than liquid-cooled competitors

## Optimization Strategy
OLA S1 owners in hot cities should: park indoors or in shade, avoid riding in peak afternoon heat (1-4pm in summer), and check battery temperature in app before starting long journeys.

**Next step:** Share your OLA model, year, and the specific issue or question you have — I will give you targeted advice.`;
  }

  // ── ICE / PETROL / DIESEL / CNG ──
  if (/(petrol|diesel|cng|engine|fuel|ignition|spark plug|oil change|gear|transmission|exhaust|timing|turbo|alternator|radiator|coolant|overheating engine|carburetor|injector|throttle body)/.test(t)) {
    return `## Overview
Internal combustion engine vehicles have complex maintenance needs but follow predictable patterns. Correct maintenance scheduling extends engine life by 50%+ and prevents expensive failures.

## Technical Explanation
**ICE maintenance fundamentals:**

**Engine oil — the most critical:**
- Petrol: Change every 5,000-7,500km or 6 months (mineral), 10,000-15,000km (synthetic)
- Diesel: Change every 5,000-7,500km — diesel engines are harder on oil
- CNG: Change every 5,000km — CNG causes more combustion residue
- Never extend oil change intervals — this is the single most expensive false economy in vehicle ownership

**CNG-specific maintenance:**
- CNG engines run hotter and leaner — spark plugs wear faster
- Replace CNG spark plugs every 15,000-20,000km (vs 40,000-60,000km for petrol)
- CNG cylinder hydrostatic test required every 3 years legally in India
- Throttle body cleaning every 30,000km — CNG leaves more deposits

**Common symptoms and causes:**
- **Power loss at high speed:** CNG pressure regulator, throttle body, spark plugs
- **Hard starting:** Injectors, spark plugs, battery
- **Excessive fuel consumption:** Air filter, injectors, tyres, driving habits
- **Engine overheating:** Coolant level, thermostat, water pump, radiator blockage

## Practical Application
1. Follow manufacturer service intervals — not "when convenient"
2. Check engine oil level monthly between changes
3. Check coolant level monthly
4. Replace air filter every 20,000-30,000km or when visibly dirty
5. Check tyre pressure weekly — under-inflation alone increases fuel consumption 3-5%

## Risk Factors
- Running engine on low oil is the #1 cause of premature engine failure — check monthly
- Ignoring coolant temperature warning = engine seizure within minutes
- Using wrong-grade engine oil voids warranty and causes long-term damage

## Optimization Strategy
Vehicles maintained at correct intervals cost 40-60% less in lifetime ownership than neglected vehicles of the same model. The service schedule is engineering, not sales — follow it.

**Next step:** Tell me your vehicle model, year, mileage, and the specific issue — I will give you a targeted diagnosis and action plan.`;
  }

  // ── REGEN BRAKING ──
  if (/(regen|regenerat|one.pedal|one pedal driving|brake recovery)/.test(t)) {
    return `## Overview
Regenerative braking is one of the most powerful tools available to EV owners — used well it adds 10-20% real-world range at no cost.

## Technical Explanation
When you lift off the accelerator or apply light braking, the electric motor reverses function and acts as a generator. The kinetic energy of the moving vehicle is converted back into electricity and returned to the battery. This process simultaneously slows the vehicle and recovers energy that would otherwise be wasted as heat in friction brakes.

**Energy recovery efficiency:** 60-75% of braking energy is recovered. Friction brakes waste 100% as heat.

**Why this matters in India:** Stop-start city traffic — Bengaluru, Mumbai, Delhi, Hyderabad — creates constant braking opportunities. In heavy traffic, regen can recover 20-30% of the energy used for acceleration.

## Practical Application
**Regen levels (most EVs offer 3 levels):**
- **High regen:** Strong deceleration on lift-off. Enables one-pedal driving. Maximum energy recovery. Best for city and slow traffic.
- **Medium regen:** Moderate deceleration. Good balance. Best for mixed urban/highway.
- **Low regen:** Minimal deceleration. Least efficient. Feels closest to ICE car.

**Mastering regen technique:**
1. **Anticipate stops 200-300m in advance** — lift off early, let regen slow you, brake lightly at the end
2. **One-pedal driving** — in high regen mode, you can often slow to a stop using only the accelerator pedal
3. **Downhill technique** — engage high regen before descending. You charge your battery while controlling speed.
4. **Maintain space ahead** — more space = longer regen duration = more energy recovered
5. **Smooth, gradual inputs** — sudden full-throttle followed by hard braking wastes energy from both ends

## Risk Factors
- Strong regen on wet roads can cause rear wheel lockup — reduce regen level in rain
- Very strong regen can confuse drivers behind you (brake lights may not illuminate as early) — maintain safe following distance

## Optimization Strategy
Drivers who master regen in Bengaluru traffic consistently report 110-130km from Ather 450X and 240-260km from Nexon EV — well above what casual riders achieve on the same vehicles.

**Next step:** Tell me your vehicle model and riding/driving environment — I will give you the optimal regen strategy for your specific situation.`;
  }

  // ── MOTOR / PERFORMANCE ──
  if (/(motor|throttle|acceleration|sluggish|slow|performance|torque|power loss|no power|motor issue|wheel|drivetrain)/.test(t)) {
    return `## Overview
Electric motor performance issues are distinct from battery issues. The motor itself is extremely reliable — most EV motor issues trace back to software, BMS limits, or thermal protection.

## Technical Explanation
**Why EVs feel slow in certain conditions:**
1. **BMS thermal throttling:** When battery temperature exceeds ~40°C, the BMS reduces current to protect cells. The motor receives less power — you feel reduced acceleration. This is a safety feature, not a fault.
2. **Low SoC protection:** Below 15-20% SoC, the BMS limits peak current output to preserve battery health. Acceleration is deliberately restricted.
3. **Software limits in certain modes:** Sport mode removes limits; Eco mode applies them intentionally.
4. **Motor temperature protection:** In extreme conditions or aggressive use, the motor controller may reduce power to prevent overheating.

**Genuine motor fault symptoms:**
- Grinding or unusual sound from motor area
- Vibration during acceleration that wasn't there before
- Error codes specific to motor/inverter (not battery)
- Sudden jerking or disconnection of power

## Practical Application
1. **Check driving mode** — if in Eco, switch to Normal or Sport to confirm the limitation
2. **Check battery temperature** in app — if above 40°C, wait 15-20 minutes in shade
3. **Check SoC** — below 20%? Charge to 50% and retest
4. **Note when it happens** — first thing in morning? After long drive? Only at high speed?
5. **Check for fault codes** — most EVs show motor fault codes in the app or instrument cluster
6. **OBD diagnostic** — if symptoms persist, a service center OBD scan reads all motor controller data

## Risk Factors
- Ignoring motor vibration or unusual sounds can lead to bearing failure — expensive if left
- Continuing to drive with motor fault codes active risks secondary damage

## Optimization Strategy
For maximum performance: full charge (80-100% SoC), cool ambient temperature, Eco tyres at correct pressure, Sport mode. An EV always delivers 100% torque from 0 rpm — peak performance requires no special technique, just the right conditions.

**Next step:** Describe exactly when the sluggishness occurs (morning, after long drive, at what speed) and your vehicle model — I will narrow down the exact cause.`;
  }

  // ── INSURANCE / WARRANTY ──
  if (/(insurance|warrant|claim|cover|damage|accident|repair cost|service cost|expensive|how much)/.test(t)) {
    return `## Overview
EV insurance and warranty differ significantly from ICE vehicles. Understanding the specifics protects you financially and ensures you get what you're entitled to.

## Technical Explanation
**EV-specific warranty structure (India):**
- **Vehicle warranty:** Typically 3 years or 100,000km (standard)
- **Battery warranty:** The critical one. Most OEMs offer 8 years or 160,000km with minimum SoH guarantee
  - Tata Motors: 8 years / 160,000km, battery guaranteed above 70% SoH
  - Ather Energy: 3 years or 30,000km standard + optional extended
  - OLA Electric: 3 years or 40,000km battery warranty
  - If battery drops below warranted SoH within warranty period — OEM must repair or replace

**EV insurance considerations:**
- Battery pack is insured separately in many policies — read the fine print
- Some policies exclude battery damage from flooding, improper charging, or accidents
- Zero Depreciation add-on is important for EVs — battery replacement costs are high
- Check if your insurer covers OTA software damage/issues

## Practical Application
1. **Read your battery warranty certificate** — understand the SoH threshold and conditions
2. **Keep all service records** — warranty claims require proof of proper maintenance
3. **Get Zero Depreciation cover** — battery replacement can cost ₹3-8 lakh
4. **Add battery protection rider** if available from your insurer
5. **Document any battery issues** in writing with the service center — creates paper trail for warranty claims
6. **Check IDV (Insured Declared Value)** annually — EVs depreciate differently than ICE

## Risk Factors
- Using non-authorised service centers can void warranty — always use OEM-authorised centers for warranty work
- Not reporting battery issues promptly can allow OEM to claim "user negligence"
- After-market accessories installed incorrectly can void electrical warranty

## Optimization Strategy
The battery warranty is your most valuable asset. Maintain it by: authorised service only, documented service history, reporting any anomalies promptly, and understanding your specific warranty terms.

**Next step:** Tell me your vehicle brand, purchase year, and the specific warranty or insurance question — I will give you precise guidance.`;
  }

  // ── GENERAL VEHICLE DIAGNOSIS ──
  if (/(problem|issue|warning|light|error|fault|not working|broken|strange|noise|vibration|leak|smoke|pull|shaking|squeaking|clicking|grinding)/.test(t)) {
    return `## Overview
You have described a vehicle symptom. Here is the diagnostic framework to identify the root cause systematically.

## Technical Explanation
Vehicle problems follow patterns. Most symptoms have 3-5 probable causes ranked by likelihood. The diagnostic approach:
1. **Reproduce the symptom** — when exactly does it happen? Speed, temperature, after how long?
2. **Isolate the system** — electrical, mechanical, software, or thermal?
3. **Check the simple causes first** — tyre pressure, fluid levels, loose connections before complex diagnosis
4. **Read fault codes** — OBD2 or manufacturer app gives precise system fault data

**Common EV warning lights:**
- 🔴 Red battery warning → Stop immediately. BMS fault.
- 🟡 Yellow battery warning → Service soon. BMS anomaly.
- 🌡️ Temperature warning → Thermal management fault. Stop in safe location.
- ⚡ Motor/inverter warning → Performance may be reduced. Service required.

**Common ICE warning lights:**
- 🔴 Oil pressure → Stop immediately. Engine damage imminent.
- 🌡️ Engine temperature → Stop immediately. Overheating.
- 🔧 Check engine → Multiple possible causes. Read OBD code first.
- 🔋 Battery/alternator → Charging system issue. Drive to service center directly.

## Practical Application
**Before calling a mechanic, check these free things:**
1. Tyre pressures — low pressure causes vibration, pulling, poor range
2. Engine oil level (ICE) — dipstick check
3. Coolant level — check overflow reservoir when cold
4. Charging port condition (EV) — visual check for damage or corrosion
5. Check for any obvious loose parts — undertray, mirrors, anything that could cause noise

## Risk Factors
- **Red warning lights require stopping immediately** — continuing to drive risks catastrophic damage
- **Never ignore battery or motor warning lights in EVs** — they protect you from serious safety incidents
- **Oil pressure and engine temperature in ICE** are stop-immediately emergencies

## Optimization Strategy
The most expensive vehicle repair is always the one you ignored. A symptom addressed early costs 3-10x less than a symptom that becomes a failure.

**Next step:** Tell me your vehicle model, type (EV/ICE/CNG), and describe the specific symptom — exactly when it occurs, what it sounds/feels/looks like — and I will give you a targeted diagnosis.`;
  }

  // ── DEFAULT — for anything not matched ──
  return `## MobilityAI — Analysing Your Question

I have received your question and here is my initial assessment.

## What I Need to Give You the Best Answer

To give you an engineering-grade, specific response, please tell me:

**1. Your vehicle:**
- Type: EV / Petrol / Diesel / CNG / Hybrid
- Brand and model: e.g. Tata Nexon EV, Ather 450X, Honda City, Bajaj Auto CNG
- Year: e.g. 2022, 2023

**2. Your specific situation:**
- What exactly is happening? (symptom, behaviour, warning)
- When did it start?
- Does it happen always or in specific conditions?

**3. What you want to achieve:**
- Diagnose a problem?
- Improve performance or range?
- Make a buying/selling decision?
- Reduce fleet costs?

## Topics I Cover

- 🔋 Battery health, BMS, charging, degradation
- 📍 Range loss, range optimization, ARAI vs real range
- 🚌 Fleet maintenance, CPK, uptime strategy
- 🔍 Used vehicle inspection, pre-purchase checks
- 🛡️ Safety — thermal runaway, warning lights, emergency protocol
- ⚙️ Regenerative braking, motor performance, drivetrain
- 🔧 ICE, CNG, diesel, petrol, hybrid maintenance
- 💰 Insurance, warranty, resale valuation
- 📱 Specific models: Nexon EV, Ather 450X, OLA S1, and many more

**Please share your vehicle details and question — I will give you a complete, structured engineering response.**`;
}

// ── MAIN HANDLER ──────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, isKiai } = req.body;
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'No message received. Please type your question.' });
  }

  const userMsg = messages[messages.length - 1]?.content || '';
  const lang = detectLanguage(userMsg);

  // ── CLEAN MESSAGES ──
  const clean = messages
    .filter(m => m?.content && String(m.content).trim().length > 0)
    .slice(-20)
    .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: String(m.content).slice(0, 3000).trim() }));

  const valid = [];
  let last = null;
  for (const m of clean) { if (m.role !== last) { valid.push(m); last = m.role; } }
  if (!valid.length || valid[0].role !== 'user') return res.status(200).json({ reply: 'Please refresh and start with your question.' });

  // ── TRY ANTHROPIC API FIRST ──
  if (ANTHROPIC_API_KEY && !isKiai || isKiai) {
    const MOBILITY_SYSTEM = `You are MobilityAI, the intelligence engine of 99EVS.com, created by Kiran SR.
Mission: Give every vehicle owner engineering-grade intelligence previously only available to specialists.

LANGUAGE: Detect the user's language from their message. Respond in the SAME language.

GREETING PROTOCOL: When user sends casual greetings (hi, hey, hello, namaste, etc.) respond with a full welcome message explaining:
- What MobilityAI is and why it was created
- The 6 topic areas with examples (Battery, Fleet, Used EV, Diagnosis, Charging, ICE/CNG)
- Ask for their vehicle type, brand, model and question

TECHNICAL PROTOCOL — Structure ALL technical responses exactly:
## Overview
## Technical Explanation  
## Practical Application
## Risk Factors
## Optimization Strategy
**Next step:** [specific action]

RULES: Safety first always. Educate — user must understand WHY. Never hallucinate. No emojis in technical responses. Engineering precision. Cover all: EV, ICE, CNG, hybrid, fleet.`;

    const KIAI_SYSTEM = `You are KIAI, exclusive founder intelligence for Kiran SR, founder of 99EVS.com.
Platform: 99evs.com — MobilityAI + KIAI Dashboard + Learn Hub. Phase 1 live on Vercel.
Advise on: strategy, business model, technical architecture, security, growth, user acquisition, investor prep, revenue.
Be a trusted co-founder. Strategic, precise, direct. 90-day thinking. Flag risks before advice. Never generic — always specific to 99EVS.
On greetings: briefly introduce yourself then ask what strategic area to work on today.`;

    try {
      const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 1500, system: isKiai ? KIAI_SYSTEM : MOBILITY_SYSTEM, messages: valid })
      });

      console.log('[99EVS] API status:', apiRes.status, 'isKiai:', isKiai);

      if (apiRes.ok) {
        const data = await apiRes.json();
        const reply = data?.content?.[0]?.text?.trim();
        if (reply) return res.status(200).json({ reply, source: 'api' });
      }

      // API failed — check why
      if (!apiRes.ok) {
        const errBody = await apiRes.json().catch(() => ({}));
        const errMsg = errBody?.error?.message || '';
        console.error('[99EVS] API error:', apiRes.status, errMsg);

        // KIAI has no fallback — needs API
        if (isKiai) {
          if (apiRes.status === 401 || errMsg.includes('credit') || errMsg.includes('billing') || errMsg.includes('balance')) {
            return res.status(200).json({ reply: `**KIAI: API Credits Required**\n\nKIAI needs Anthropic API credits to function.\n\n**Fix now:**\n1. Go to console.anthropic.com\n2. Click "Billing" → "Add Credits"\n3. Add minimum $5 to restore service\n4. No code changes needed — works immediately after payment\n\n**Current error:** ${errMsg}` });
          }
          return res.status(200).json({ reply: `KIAI API error (${apiRes.status}). Please try again in a moment.` });
        }

        // MobilityAI — fall through to built-in engine below
        console.log('[99EVS] Falling back to built-in engine. Reason:', errMsg);
      }
    } catch (err) {
      console.error('[99EVS] Network error:', err.message);
      if (isKiai) return res.status(200).json({ reply: 'KIAI network error. Please try again in 30 seconds.' });
      // MobilityAI — fall through to built-in engine
    }
  }

  // ── BUILT-IN ENGINE (runs when API fails or has no credits) ──
  // MobilityAI never goes down. Zero credits = built-in takes over.
  if (!isKiai) {
    const builtIn = builtInResponse(userMsg, lang);
    return res.status(200).json({ reply: builtIn, source: 'builtin' });
  }

  // KIAI with no API key
  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({ reply: 'KIAI requires ANTHROPIC_API_KEY in Vercel environment variables. Go to Vercel → Settings → Environment Variables → add ANTHROPIC_API_KEY → Redeploy.' });
  }

  return res.status(200).json({ reply: 'Please try again in a moment.' });
}
