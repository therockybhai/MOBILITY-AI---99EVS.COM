# 99EVS Trust Score API (TSA)

Purpose:

Provide a unified vehicle reliability score between 0–100
derived from inspection intelligence layers.

Outputs:

99EVS Trust Score

Trust Classification Band

Partner Decision Signal
---

## Trust Score Inputs

Battery Risk Index (BRI)

Mechanical Reliability Index (MRI)

Inspection Completeness Integrity Layer (ICIL)

Cosmetic Condition Score

Accessory Completeness Score

Market Stability Score

Dynamic Valuation Confidence %
---

## Trust Score Weight Distribution

Battery Risk Index = 30%

Mechanical Reliability Index = 25%

Inspection Completeness Integrity = 15%

Dynamic Valuation Confidence = 15%

Cosmetic Condition Score = 5%

Accessory Completeness Score = 5%

Market Stability Score = 5%
---

## Trust Score Formula

Trust Score =

(BRI × 0.30)

+

(MRI × 0.25)

+

(ICIL × 0.15)

+

(DVAE Confidence × 0.15)

+

(Cosmetic Score × 0.05)

+

(Accessory Score × 0.05)

+

(Market Stability × 0.05)
---

## Trust Score Classification Bands

90–100

Premium Certified Vehicle


75–89

Dealer Ready Vehicle


60–74

Conditional Purchase Vehicle


Below 60

Inspection Advisory Required
---

## Trust Score API Endpoint

/api/trust-score?vehicle-id={vehicle-id}

Returns:

Trust Score

Confidence Band

Battery Risk Category

Mechanical Reliability Category

Inspection Integrity Level

Adjusted Valuation Band
---

## Inspector Reliability Integration

Trust Score adjusted using:

Inspector Reliability Multiplier
---

## Fraud Risk Adjustment

Final Trust Score adjusted using:

Inspection Fraud Risk Score
