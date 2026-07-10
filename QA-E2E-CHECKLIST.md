# Quick Pass Traffic School — E2E QA Checklist

Use this checklist to run full end-to-end tests (registration → payment → course progression → final exam → certificate) across all supported courses.

---

## 0) Environment Setup (Do First)

- [ ] `npm install` completed
- [ ] Stripe keys are in **TEST mode** (`sk_test_`, `pk_test_`)
- [ ] Local webhook forwarding active
  - [ ] `stripe listen --forward-to localhost:3000/api/payments/webhook`
  - [ ] `STRIPE_WEBHOOK_SECRET` set to the printed `whsec_...`
- [ ] Local DB seeded and users created
  - [ ] `npm run db:seed`
  - [ ] `node db/create-test-users.js`
- [ ] App started
  - [ ] `npm run dev`

---

## 1) Known Test Credentials

### Seeded Accounts
- Student 4-hour: `test4hr@quickpasstrafficschool.com` / `Test123!`
- Student 8-hour: `test8hr@quickpasstrafficschool.com` / `Test123!`
- Student 12-hour: `test12hr@quickpasstrafficschool.com` / `Test123!`
- Admin: `admin@quickpasstrafficschool.com` / `Admin123!`

### Stripe Test Cards
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3DS/Auth required: `4000 0025 0000 3155`
- Expiration: any future date
- CVC: any 3 digits
- ZIP: any 5 digits

---

## 2) Standard Registration Data (Copy/Paste Template)

Use this baseline for each **new registration** run; only vary `email`, `state`, and `course`.

- First Name: `QA`
- Last Name: `Student`
- Address: `123 Main St`
- City: `Orlando`
- State: match selected course state
- ZIP: `32801`
- Phone: `4075550101`
- Gender: `Male`
- DOB: `1990-01-01`
- Driver License #: `D1234567`
- Password: `Test123!`
- Referred By: `Search Engine`

### Florida-only required fields
- Citation Number: `A123456`
- County: `ORANGE`
- SSN4: `1234`
- Course Type: select required FL option

---

## 3) Course Slugs to Validate

- `florida-4-hour-bdi`
- `florida-8-hour-idi`
- `florida-12-hour-adi`
- `georgia-6-hour-defensive-driving`
- `indiana-4-hour-defensive-driving`
- `ohio-2-point-remedial-driving`
- `texas-6-hour-driving-safety`
- `california-traffic-violator-school`
- `arizona-traffic-survival-school`

---

## 4) Full E2E Flow Checklist (Run Per Course)

> Duplicate this section per course run, or print and mark each pass/fail.

### Course Under Test
- Course slug: `______________________________`
- State: `__________`
- Tester: `__________`
- Date/time: `__________`

### A. Landing + Course Selection
- [ ] Course card visible on `index.html`
- [ ] Enroll button points to correct `checkout.html?course=<slug>`
- [ ] Price shown in UI matches seeded DB course price

### B. Registration
- [ ] Navigate to `register.html?course=<slug>` or through enroll button
- [ ] State auto-detected/selected correctly from slug
- [ ] Course dropdown contains correct course option
- [ ] Required fields enforce validation
- [ ] Submit succeeds (`/api/auth/register` returns success)
- [ ] Auth token and user saved in localStorage
- [ ] Redirect to `checkout.html?course=<slug>` occurs

### C. Checkout + Payment
- [ ] Checkout loads selected course details
- [ ] `/api/courses/<slug>` returns 200
- [ ] `/api/payments/create-intent` returns 200
- [ ] Stripe payment element renders
- [ ] Test card payment succeeds (4242)
- [ ] Redirect reaches `checkout-success.html`
- [ ] Payment row saved as `succeeded`
- [ ] Enrollment row created and linked to payment

### D. Dashboard + Enrollment Visibility
- [ ] Login succeeds for enrolled user
- [ ] Dashboard lists active enrollment
- [ ] Correct course title/hours shown
- [ ] Progress starts at expected baseline

### E. Course Modules
- [ ] Course module list loads
- [ ] Can open module 1 and read content
- [ ] Module quiz renders questions/options
- [ ] Passing module quiz updates module status
- [ ] Progress increments after completion
- [ ] Repeat until all modules complete

### F. Final Exam + Completion
- [ ] Final exam unlocks after module completion
- [ ] Exam questions load and submit works
- [ ] Passing score logic enforced
- [ ] Enrollment status changes to completed
- [ ] Certificate generated/available

### G. Admin Validation
- [ ] Admin login works (`/admin/`)
- [ ] User enrollment visible in admin panel
- [ ] Payment status visible and correct
- [ ] Completion/certificate status visible

### H. Negative Tests (Quick)
- [ ] Duplicate registration email blocked
- [ ] Wrong password login blocked
- [ ] Payment decline card handled gracefully
- [ ] Unauthorized API access returns 401/403 as expected

### I. Result Summary
- Overall result: `PASS / FAIL`
- Blocking defects:
  - `1) ____________________________________`
  - `2) ____________________________________`
- Notes:
  - `______________________________________`

---

## 5) Optional Speed-Up Helpers

- Auto-complete all modules for 4-hour test user:
  - [ ] `node db/complete-modules-for-test.js`
- Chat endpoint sanity check:
  - [ ] `node db/check-chat.js`

---

## 6) Production Safety Reminders

- [ ] Do **not** use test cards with live Stripe keys
- [ ] Do **not** run destructive seed scripts against production DB
- [ ] Verify `.env` before running seed (`LOCAL_FILE_SQLITE` target expected)

---

## 7) Defect Log Template

| ID | Course Slug | Step | Expected | Actual | Severity | Screenshot/Link |
|---|---|---|---|---|---|---|
| BUG-001 |  |  |  |  |  |  |
| BUG-002 |  |  |  |  |  |  |

---

## 8) Execution Log — 2026-07-09

### Run A — Florida 4-Hour (`florida-4-hour-bdi`)

- ✅ Login and dashboard enrollment visibility
- ✅ Course player loads modules and progress
- ✅ Module quiz submission works (after player/server fixes)
- ✅ Module completion/progress updates
- ✅ Final exam stage now loads with questions (30) after seed fallback fix
- ⚠️ Final exam/certificate UI path not fully completed manually in browser yet (data path now unblocked)

### Run B — Florida 8-Hour (`florida-8-hour-idi`)

- ✅ Programmatic module completion for seeded user
- ✅ Final exam submission endpoint returns pass (100%)
- ✅ Certificate generated (`id: 728ccc72-e5ea-4ff2-b292-84645e389e9e`)

### Defects Found

| ID | Course Slug | Step | Expected | Actual | Severity | Notes |
|---|---|---|---|---|---|---|
| BUG-101 | florida-4-hour-bdi | Final Exam | Final exam questions available | 0 questions returned | High | **Resolved** by seed fallback (`db/seed.js`) now seeding 30 final questions |
| BUG-102 | course player (all) | Quiz submit | Enrollment inferred from loaded modules | Enrollment ID only from URL query | High | Fixed in `course/player.html` by setting `enrollmentId = modulesData.enrollmentId` |
| BUG-103 | server quiz/cert writes | Persist attempt/certificate | Schema-compliant inserts | Missing required columns caused failures risk | High | Fixed in `server.js` (quizAttempts + certificates required fields) |

### Run C — Full Non-Payment E2E Matrix (`db/qa-nonpayment-e2e.js`)

Executed all active courses using seeded user + direct enrollment/module completion (no checkout/payment).

- ✅ `florida-4-hour-bdi` — pass + certificate
- ✅ `florida-8-hour-idi` — pass + certificate
- ✅ `florida-12-hour-adi` — pass + certificate
- ✅ `georgia-6-hour-defensive-driving` — pass + certificate
- ✅ `indiana-4-hour-defensive-driving` — pass + certificate
- ✅ `ohio-2-point-remedial-driving` — pass + certificate
- ✅ `texas-6-hour-driving-safety` — pass + certificate
- ✅ `california-traffic-violator-school` — pass + certificate
- ✅ `arizona-traffic-survival-school` — pass + certificate

Result: **All non-payment E2E checks passed**.

