# 99EVS Partner Integration Layer (PIL)

Purpose:

Enable external systems to integrate with 99EVS valuation intelligence.

Supported Integrations:

dealer dashboards

auction platforms

vehicle marketplaces

financial institutions

fleet operators

Outputs:

certificate verification API

valuation confidence API
---

## Partner API Endpoints

Verify certificate:

/api/verify-certificate?id={certificate-id}

Fetch valuation confidence:

/api/valuation-confidence?vehicle-id={vehicle-id}

Fetch inspection integrity:

/api/inspection-integrity?vehicle-id={vehicle-id}

Fetch valuation band:

/api/valuation-band?vehicle-id={vehicle-id}
---

## Partner Authentication Model

Each partner receives:

Partner ID

API Key

Usage scope permissions

Example:

dealer_read_access

auction_validation_access

finance_verification_access
---

## Partner Permission Levels

Dealer Access:

certificate verification

valuation confidence


Marketplace Access:

valuation band

confidence score

inspection completeness


Finance Access:

battery risk index

mechanical reliability index

inspection integrity level
---

## API Rate Limits

Dealer tier:

100 requests per hour

Marketplace tier:

500 requests per hour

Finance tier:

1000 requests per hour

inspection status API

partner authentication readiness
---

## Trust Score API Exposure

Partners may retrieve unified vehicle trust signal via:

/api/trust-score endpoint
---

## Lifecycle Intelligence Endpoint

/api/lifecycle-trend?vehicle-id={vehicle-id}

Returns:

Trust Score trend

BRI trend

MRI trend

confidence evolution status
---

## Predictive Forecast Endpoint

/api/predictive-risk?vehicle-id={vehicle-id}

Returns:

battery replacement forecast

mechanical service forecast

confidence decay projection

resale timing recommendation
---

## Machine Identity Endpoint

/api/machine-identity?mlil-id={mlil-id}

Returns:

inspection timeline

certificate chain

Trust Score evolution

risk forecast history
