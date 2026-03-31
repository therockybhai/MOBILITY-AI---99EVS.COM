# Codebase Task Proposals (March 31, 2026)

## 1) Typo / copy consistency task
Task: Standardize the brand spelling/casing (`99EVS` vs `99EVs`) across UI and API copy so users see one canonical name everywhere.

Why:
The brand appears with inconsistent casing, which reads like a typo to users and reduces polish.

Evidence:
- `99EVS` in API header comments. (`api/chat.js`, `api/verify-payment.js`)
- `99EVs` in founder dashboard title and queue heading. (`founder-dashboard.html`)

---

## 2) Bug fix task
Task: Replace `btoa(...)` usage in `api/auth.js` token creation with a Node-safe Base64 encoder:

Buffer.from(...).toString('base64url')

Why:
`btoa` is a browser API and may break founder login in serverless runtime.

Evidence:
- `createToken` uses `btoa` inside api/auth.js

---

## 3) Comment/documentation discrepancy task
Task:
Update verify-payment.js docs OR enable founder alert path.

Why:
Docs say alerts exist but implementation is commented.

Evidence:
sendFounderAlert(logEntry) is commented.

---

## 4) Test improvement task
Task:
Add regression tests for:

api/auth.js
api/google-auth.js
api/verify-payment.js

Minimum matrix:

api/auth.js:
405 non-POST
400 missing fields
401 invalid creds
200 valid creds

api/google-auth.js:
400 missing credential
401 invalid token
200 valid token

api/verify-payment.js:
400 invalid inputs
200 valid monthly/yearly
200 OPTIONS preflight
