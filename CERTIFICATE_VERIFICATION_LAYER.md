# 99EVS Certificate Verification Layer (CVL)

Purpose:

Enable authenticity verification of Valuation Confidence Certificates.

Outputs:

Certificate verification ID

Verification URL

QR validation support

Partner verification API readiness
---

## Certificate Identity Format

Certificate ID format:

99EVS-YYYY-VEHICLETYPE-RANDOMID

---

## Certificate Verification Status

Verified

Certificate valid and issued by 99EVS


Expired

Inspection older than validity window


Revoked

Certificate replaced after reinspection


Unknown

Certificate not found in registry
---

## Verification URL Format

https://99evs.com/verify/{certificate-id}

Example:

https://99evs.com/verify/99EVS-2026-E2W-AX91K2
---

## QR Verification Logic

QR contains:

certificate verification URL

Scanning QR opens verification page

Verification page displays:

certificate status

confidence score

valuation band

inspection integrity status
---

## Certificate Validity Period

Electric vehicles:

90 days validity


ICE vehicles:

60 days validity


High-usage fleet vehicles:

45 days validity
---

## Partner Verification API Structure

Endpoint:

/api/verify-certificate?id={certificate-id}

Returns:

certificate status

confidence score

inspection integrity level

valuation band

Example:

99EVS-2026-E2W-AX91K2

---

## Partner Verification Integration

Partner systems may validate certificates via:

/api/verify-certificate endpoint

Verification returns:

certificate status

confidence score

inspection integrity level

valuation band
---

## Fraud-Aware Certificate Verification

Certificates flagged with high fraud risk display:

Audit Warning Status
---

## Machine Identity Verification Reference

Each certificate linked to Machine Lifecycle ID.
