# 99EVS Inspection Scoring Engine

Purpose:

Convert inspection inputs into valuation confidence percentage.

Scoring Layers:

1. Inspection completeness score
2. Battery reliability score
3. Mechanical integrity score
4. Cosmetic condition score
5. Accessory completeness score
6. Market stability score

Output:

Final valuation confidence %
---

## Weight Distribution

Inspection completeness: 20%

Battery health: 30%

Mechanical integrity:
controller
motor
wiring
braking
suspension

Total: 25%

Cosmetic condition: 10%

Accessories present: 5%

Market stability factor: 10%

---

## Output

Final valuation confidence %
---

## Component Scoring Matrix

Each component is scored between:

1 = working
0.5 = repair needed
0 = not working

---

### Battery Score

Inputs:

charge retention
voltage stability
charging response
age factor

Battery score = Battery Risk Index normalized value

---

### Mechanical Integrity Score

Includes:

motor condition
controller response
braking condition
suspension condition
wiring health

Mechanical integrity score = Mechanical Reliability Index normalized value

---

### Cosmetic Score

Includes:

body condition
paint quality
dent presence
rust presence

Cosmetic score = average(all components)

---

### Accessory Score

Includes:

charger availability
mirrors
lights
indicators
dashboard display

Accessory score =

present = 1
missing = 0

final accessory score = average(all accessories)

---

### Inspection Completeness Score

Formula:

completed_fields / total_required_fields

Example:

18 / 20 = 0.90

---

### Market Stability Score

Inputs:

vehicle demand
battery replacement cost trend
model resale liquidity
city-level resale activity

Scale:

high demand = 1
medium demand = 0.75
low demand = 0.5
---

## Inspection Integrity Adjustment Layer

Final confidence % =

base confidence %

×

inspection completeness adjustment factor
