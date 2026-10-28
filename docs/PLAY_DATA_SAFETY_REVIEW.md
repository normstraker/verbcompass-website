# Data safety review — October 28, 2026

Owner completed the questionnaire and saved changes to Publishing overview on
October 28. No submission for Google review confirmed. Privacy policy publication
is being prepared in this checkpoint; confirm the live page after pushing.
Website main auto-deploys on push.

## Saved questionnaire checkpoint

Owner screenshots confirm preview lists Purchase history and Device or other IDs,
no third-party sharing, and encryption in transit. Both categories were entered
as collected, non-ephemeral, optional, for app functionality and fraud prevention/
security/compliance. No VerbCompass account creation or external account login.
Optional deletion badge left unanswered pending a verified request procedure.
No policy declaration has been sent for review in this session.

## Observed implementation

Android 1.0.4/code 4 is live in Internal testing only. Owner installed through
Play on physical phone and confirmed the no-purchase restore result. Empty
inventory does not send a receipt to the verifier. Positive redemption and
reinstall restore remain untested. Full Access Buy is now Active, US only.
One-code promotion is Scheduled October 28 at 23:00 GMT (18:00 CDT), ending
November 4 at 23:59 GMT. Do not store the code in Git.

With a purchased receipt, app sends product ID, raw purchase token and Integrity
proof by HTTPS to the Netlify service. Service decodes proof via Google, checks
Publisher purchase data, acknowledges delivery, and stores hashed token-derived
identity/product/active/acknowledgement/time in private Blobs. No app login,
card numbers, Google email, study progress or custom verbs in this flow.
Rate limits process IP addresses. Host access-log fields/retention need inspection;
do not promise that all request metadata is ephemeral or never logged.

## Proposed answers and remaining checks

- Review Purchase history as collected, not ephemeral: ledger persists ownership.
  Purposes: app functionality and fraud prevention/security/compliance.
- Review Device or other IDs for purchase-derived identifiers and attestation
  signals. Hashing does not automatically exempt pseudonymous data from disclosure.
  Final category mapping must be checked against the live questionnaire and SDK
  disclosure, not guessed from the name of a database field.
- Integrity request metadata, license state and device attestation are processed
  by Google; optional environment-detail signals are disabled. Review Google's
  Integrity disclosure alongside the exact app implementation.
- Collected vs shared: processor transfers may qualify for the service-provider
  exception. Confirm role/use for Netlify and Google; do not equate every transfer
  with sharing, or claim blanket 'no sharing' without that review.
- HTTPS is enforced. Receipt ledger is not ephemeral. Raw tokens/proofs are
  transient in our code, but verify provider logs before asserting ephemeral use.
- Restore is user-initiated and optional in this build; determine the appropriate
  optional/required answers for each data type in the actual form. Reassess when
  paid access enforcement or automatic restore is introduced.
- No analytics SDK or advertising identifiers added by this change. Do not add
  payment-card collection just because Google Play processes payments.
- Check external feedback links/forms separately: avoid double counting ordinary
  website navigation as app collection, but disclose controlled WebView forms if
  applicable. Existing website policy already covers voluntary form submissions.
- Confirm privacy@verbcompass.com receives deletion requests, and establish a
  practical purchase-matching/deletion procedure before claiming it is tested.
- Inspect current Data safety form and applicable track requirements before
  submitting. Current public label shown in owner screenshot says no data collected;
  do not carry that answer forward without this review.

## Service fee enrollment

Enrollment status remains unknown/unfinished. Payments profile exists. Official
enrollment requires an Account Group, truthful Associated Developer Account
declaration, and acceptance of fee-tier terms. Never declare no associated accounts
without owner's confirmation. No enrollment or terms acceptance performed here.
Current US first-$1M rate table lists 10% service + 5% Play billing; older 15% tier
enrollment article still applies to the enrollment workflow. Regional/install
rules vary; check the current rate card, not a blanket worldwide 15% assumption.

## Sources checked October 28, 2026

- https://support.google.com/googleplay/android-developer/answer/112622
- https://support.google.com/googleplay/android-developer/answer/10632485
- https://support.google.com/googleplay/android-developer/answer/10787469
- https://developer.android.com/google/play/integrity/terms
