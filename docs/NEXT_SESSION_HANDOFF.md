# Next session — EUV-first tester recruitment

## Netlify adapter checkpoint — October 26, 2026

Owner's Blobs screenshot shows the empty-store introduction for the existing
website project. No stores or records have been created. Nothing else needs to
be enabled in that screen to prepare code.

Local candidate now includes `blob-ledger.cjs`, a disabled-by-default Netlify
Function, separate `package.json`/lockfile, `netlify.toml`, and an explicit safe
`public/` directory. Official SDKs are installed only inside server/entitlements;
original app node_modules junction and original app checkout were not modified.
Core verifier now awaits durable storage operations. Strong reads and ETag-based
conditional writes prevent conflicting claims. Refund/cancellation tombstones
cannot be resurrected by slow verification or acknowledgement callbacks. SQLite
reference ledger has the same terminal-revocation protection.

All 39 local tests pass, including concurrent independent storage clients,
function restart persistence, revoked-token races, CORS/preflight and disabled
preview/missing-credential paths. Real Netlify SDK imports/interface checked;
no remote Blobs reads/writes or Google account/API verification occurred. Android
native compile last passed before these server/JS-only changes.

Proposed deployment is a **separate verification project on the existing Legacy
Free team**, with base directory server/entitlements and publish directory public.
Do not point the existing public website at this directory or copy server source
into the website's static publish tree. New endpoint publication still needs
owner authorization; no project/deploy has been created. Account free limits are
shared operational risk; keep usage monitoring, code rate limits and plan intact.
Code rate limit is 10 requests per 60 seconds per domain/IP, available on Free;
remote enforcement still needs confirmation at deployment. No quota bypass or
background worker is assumed.

The candidate requires production context AND explicit
VERBCOMPASS_VERIFICATION_ENABLED=true before processing. Android origin is
https://localhost; preview branches remain disabled. It accepts no test receipts.
A separate isolated test-service configuration is still needed for fake-payment
license testing. Normal promo receipts must be tested against actual Google data.

Credential adapter currently supports a server-only service-account JSON secret
using Google's official auth library. This is an implementation option, NOT
permission to create/export a key. Decide/approve secure credential provisioning
before use. Secret would be Functions-scoped/production-only, never an app asset,
chat message or Git file. Prefer managed identity/federation where demonstrably
supported; none has been configured. No key, endpoint, payment method, upgrade,
paid hosting or purchase activation created. Privacy review, user-facing restore/
persistence, actual free redemption/reinstall and production ack reliability
remain gates before enforcing paid access. New changes are uncommitted locally.

Sources:
- https://docs.netlify.com/build/data-and-storage/netlify-blobs/
- https://docs.netlify.com/build/functions/api/
- https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/


### Compute allowance checked — October 26

Latest owner screenshot shows no regular serverless-function requests and no
Edge Function requests in the selected period. Netlify's current Legacy plans
documentation lists 125,000 regular Function invocations per site/month for Free.
This appears ample for the planned small tester cohort; it is a capacity estimate,
not proof of production readiness or unlimited free hosting. Keep Legacy Free.
No upgrade/payment/plan migration needed for this inspection. Free quotas are
hard limits; usage spikes can pause account sites, so rate limits and monitoring
must precede a public verification endpoint. Background processing is not assumed
available on this plan.

Next account inspection: VerbCompass project > Data & storage > Blobs. Netlify
Blobs is a candidate private persistent ledger using strong reads and atomic
conditional writes; adapt/test the ledger rather than use ephemeral SQLite.
Server credential provision, deployment approval and real promo tests remain
pending. No stored tester/payment data was read or created during inspection.

Sources checked:
- https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/
- https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/billing-faq-for-legacy-plans/
- https://docs.netlify.com/build/functions/usage-and-billing/
- https://docs.netlify.com/build/data-and-storage/netlify-blobs/


## Netlify hosting inspection — October 26, 2026

Owner's shared Usage & billing screen confirms the existing website team is on
**Free / Legacy**, displayed plan cost $0. Current displayed usage: bandwidth
173 MB of 100 GB, build minutes 3 of 300. Plan includes 1M **Edge Function**
invocations; this is not proof of the regular Node Functions compute allowance.
No upgrade, credit-plan migration, payment-method entry or new service authorized.
Next manual check: Account usage insights > Compute for regular Functions
allowance/usage, then determine whether a private durable ledger and secure
Google credential provider can fit the existing plan. Existing SQLite is local
only and must not be placed on ephemeral function storage. Do not promise zero
ongoing cost or deploy a new verification endpoint from these figures alone.

The preceding project-overview screenshot also confirms website main commit
`b08f752` was automatically published on October 22. Treat the Founding Tester
page changes in that commit as deployed, superseding earlier unpublished/local
claims. This is dashboard deployment evidence; live form/reward fulfillment
was not tested. New October 26 edits remain local/uncommitted and unpublished.
No personal billing/contact information from screenshots is recorded here.


## Cloud setup confirmed — October 26, 2026

Owner completed these steps manually; verified by shared Console screenshots:
- Google Cloud project VerbCompass, ID `verbcompass`, number `42384135159`.
- Google Play Android Developer API and Google Play Integrity API enabled.
- Service account VerbCompass Purchase Verification created, with no Cloud project
  IAM role or additional principals selected. Actual generated account email is
  `verbcompass-purchase-verificat@verbcompass.iam.gserviceaccount.com` (ID shortened
  by Google; do not replace it with the originally suggested longer name).
- Service account added to Play Console and shown Active, scoped to
  `com.verbcompass.app`. Selected app permissions: View app information,
  inherited View app quality information, View financial data, and Manage orders
  and subscriptions. No account-wide, Admin, publishing or store-management
  permissions were requested.
- Owner reviewed the Integrity terms discussion and linked project 42384135159
  in Play Integrity settings. Screenshot confirms daily usage limit 10,000 and
  App licensing, Application integrity, Device integrity On. Optional recent
  activity/device attributes/Play Protect/app access risk remain Off.
- No credential key downloaded, runtime credential provider configured, hosting
  deployed, billing enrollment or charge performed. No live verification or promo
  redemption test. Full Access product remains Draft based on last verified state.

App signing certificate confirmed October 26 (owner pasted the fingerprint):
- SHA-256 hex: `56:3E:47:C8:6D:17:B0:14:C4:1D:4E:C2:6D:7A:E5:FD:51:8B:A6:7E:09:FE:1F:0C:5E:8A:23:49:C6:2E:82:AB`
- Play Integrity base64url: `Vj5HyG0XsBTEHU7CbXrl_VGLpn4J_h8MXoojScYugqs`
These are public certificate identifiers, not private keys. Public configuration
is recorded in `server/entitlements/config.example.json`; no live endpoint or
secret is configured. Next prerequisite is approved hosting with durable private
storage and a runtime credential provider, then endpoint configuration and real
promo-code redemption/restore testing.

Cloud number above can be used in native configuration when ready. Do not request
private keys or create a downloadable service-account key as an automatic next step.
Privacy/Data safety review, user-facing restore/persistence, live account tests
and free-code redemption/reinstall proof are still pending. This checkpoint
supersedes older statements that the Cloud project was unknown/not created.


## October 26 continuation — step 2 in progress

Owner reconfirmed the priority: prepare Google Play and recruit English-speaking
Spanish learners on Reddit; combined app follows. Current task is proving a free
permanent promo-code reward and restore, not completing all public checkout work.

The isolated app branch now has local purchase inventory, restore/Play Integrity
plumbing and a private verification-service implementation. All 32 local tests
and Android Java compile pass. No new VerbCompass login is introduced; no current
tester/browser access state changed. These changes are local/uncommitted.
Read `C:\Repos\verbcompass-android-entitlements\server\entitlements\README.md`
and that checkout's `docs/TESTER_ENTITLEMENT_IMPLEMENTATION.md` before continuing.

Owner answered **Not sure** about an existing Google Cloud project. Next external
action is inspect the Cloud project selector before creating a project. API
permissions, hosting with durable private storage, signing certificate and native
configuration remain needed. Privacy disclosures, user-facing restore/migration
and actual promo redemption/reinstall tests are still pending. No service is
deployed, credential configured, product activated, code issued, APK installed or
uploaded, ad launched or charge made. Step 2 is NOT complete from mock tests alone.

Subsequent October 26 owner authorization: create a Google Cloud project if
necessary. Check/reuse an existing suitable project first. A project is needed
for our selected server verification/Play Integrity approach; it is not an
unfinished requirement for saving the $9.99 product draft. Project existence is
unconfirmed; creation and API setup remain pending. Paid hosting/resources,
billing/payment enrollment and charges require separate owner approval.

## Saved checkpoint — October 22, 2026 (read first)

Owner stopped for the day and authorized documenting, committing and pushing
current work. Resume October 23 from this checkpoint; older prerequisites below
are historical where they conflict.

- Google Payments merchant profile created by owner; payout method and separate
  15% service-fee enrollment remain unfinished. No purchase or charge occurred.
- Play product saved successfully: `full_library_unlock`, name Full Access;
  purchase option `full-access-buy`, Buy, backward compatible, **Draft**.
- Owner approved USD 9.99 one time. U.S. price was verified before saving;
  saved option lists United States only. Other regions were made unavailable
  for this purchase option after missing-price validation blocked draft saving.
  This does not change the app's closed-test release countries.
- Product description currently promises permanent Spanish verbs, all CEFR study
  levels and unlimited Reference, without subscription. Digital app sales,
  All ages. Combined-course purchase remains the direction; update description
  when that content is actually supported. Never create a duplicate product ID.
- **Do not activate yet.** Implement and test verified permanent ownership,
  acknowledgement, restore, promo redemption and migration before paid access.
  Draft configuration is not evidence of live lookup or working entitlements.
- Tomorrow: inspect the saved option if needed, then continue the isolated
  entitlement branch; preserve current tester Full Access and free browser.
  Review international tester redemption before broader recruitment.
- Corrected reward timing: no arbitrary 30-day activation deadline. Qualifying
  testers must receive earned permanent access before future paid restrictions
  affect them. Seven-day completion review remains a proposed operational target;
  prove fulfillment before publishing. Existing full testing access is distinct
  from verified permanent Play ownership.
- Current page/ad/reward text is prepared for review. Push is authorized now;
  no ad purchase, outreach, Play upload or explicit site publication is authorized.
  Check any automatic deployment triggered by the website push before describing
  the page as unpublished; no live deployment verification done this session.


## Tester tracking — owner decision October 22

Use the existing private Founding Tester roster for Reddit recruits:
`C:\Repos\verbcompass-private\founding-tester-roster.csv`.
Do not create a separate Reddit tester roster. Inspect existing columns before
adding only missing tracking fields. Record recruitment source/campaign, request
and invitation status, Play opt-in date, participation/feedback, qualification
and permanent-access fulfillment. Keep participant data and codes outside Git.
The educator outreach roster is a separate contact/outreach record, not the
canonical tracker for these tester enrollments.

Updated October 20, 2026.

October 22 clarification: existing EUV can accept testers now. Billing serves
permanent ownership/restore, not eligibility to join the closed test. Do not
make finishing public checkout or SUV a prerequisite to accepting volunteers.
Read [FOUNDING_TESTER_REWARD_TERMS.md](FOUNDING_TESTER_REWARD_TERMS.md) for the
corrected timetable: proposed seven-day completion-report review and earned
permanent access before future paid restrictions affect qualifying testers.
Prove deliverability before publication.
The owner explicitly requires confirmation before any purchase or charge.

Billing implementation has begun in a separate checkout:
`C:\Repos\verbcompass-android-entitlements`, branch
`feature/android-tester-entitlements`, based on EUV `b393ae7`. Read its
`docs/TESTER_ENTITLEMENT_IMPLEMENTATION.md`. Read-only product lookup is implemented;
seven focused JS tests and native Java compile pass. No product/account ownership
query, purchase, permanent grant or restore is implemented yet. No APK installed.
Original app checkout and combined planning branch remain untouched. Changes in
the isolated checkout are included in the authorized checkpoint commit/push.
Merchant/product draft is now saved as recorded above; activation and supported
test-account arrangements remain prerequisites for live lookup. A seven-day completion-review target is proposed
in its operations notes, not approved or added to public copy.

Latest local preparation: owner approved the Reddit example and requested
continuation. Read [REDDIT_EUV_CAMPAIGN_DRAFT.md](REDDIT_EUV_CAMPAIGN_DRAFT.md).
The Founding Tester HTML now has an unpublished matching offer: full Spanish
access during the Android closed test, then permanent Spanish Full Access after
14 consecutive days opted in, app use and honest private feedback. Do not offer
a public limited Android download before production. The browser remains separate.
Reward implementation, precise delivery timing and policy checks still gate
publication. No ad/page publication, external messages or spend authorized.

Read [ANDROID_ACCESS_AUDIT.md](ANDROID_ACCESS_AUDIT.md) for the completed source
audit. EUV defaults to Full locally; free Reference includes A1 plus 25 additional
verbs. Installed Play behavior remains unverified. Billing is unfinished and
SUV development access is not commercial gating. Next observe the Play-installed
EUV and select the release baseline before changes; preserve browser Full Access.

Emulator UI inspection is now recorded in the audit. Owner confirms this version
matches the Play upload/phone download. All CEFR levels were selected and a C2
Reference entry displayed without an upgrade prompt; feedback instructions/link
are present. No settings/data changed. Permanent reward ownership and restoration
remain unverified; do not repeat the initial Home/Settings inspection needlessly.

Read [COMBINED_APP_LAUNCH_PLAN.md](COMBINED_APP_LAUNCH_PLAN.md) and the current
section of [MARKETING_HANDOFF.md](MARKETING_HANDOFF.md) before acting.

Current sequence: qualify the current EUV Android offer and permanent reward,
prepare/approve a small Reddit recruitment campaign, then support that cohort
while preparing the combined EUV/SUV update. Update the same app/closed track
and meaningfully test the combined build before applying for production access.
Do not require completion of all SUV work before EUV recruitment; current-build,
reward-delivery and policy gates still precede paid launch.

First audience: English speakers learning Spanish. SUV is English for Spanish
speakers and has no CEFR setting; its free Study starter set is undecided, with
a separate 25-verb Reference allowance proposed. One combined permanent purchase
remains the product direction. Finalize the initial recruitment reward scope:
The latest initial campaign draft covers Spanish access only; future English
access is not advertised. Preserve broader prior individual promises.
Resolve platform-policy uncertainty for the exact reward offer before spending.
No rewards for public reviews/ratings or artificial installs.

Confirmed via screenshots: existing download locked free; merchant setup needed;
active Alpha release 1.0.3/code 3; releases signed by Play. Upload-key match,
highest uploaded code, qualifying tester count and entitlement fulfillment remain
unverified. Next audit current EUV access/feedback and reward implementation needs.

Keep the browser app and tester links unchanged; use the existing Founding Tester
page with required age/Google-account confirmations. Up to $500 is willingness to
spend, not launch permission. No external publishing, outreach or charges authorized.

Plan and handoff edits are local/uncommitted in website main as of this update.
Verify status before work. Preserve app branches, generated directories and the
completed 1,500-headword dataset. Older instructions below are historical only.

## Previous handoff and historical evidence

**Last Updated:** October 16, 2026

Start with **docs/MARKETING_HANDOFF.md** for the next conversation. It records
the free Spanish browser offer, proposed $50 Reddit trial (not approved spend),
repository/branch separation, current deployment evidence and next steps.

Website confirmations were merged and pushed to main as **94ce343** and both
required fields were verified live. Earlier pending-deployment statements below
are historical. No new campaign, outreach or advertising purchase has occurred.

Current change on website branch `feature/educator-outreach`: the Founding
Tester request form requires separate confirmations of age 18+ and use of the
submitted email account for Google Play on the applicant’s Android device.
Local validity, submitted-field and phone-layout checks pass; no real request
was submitted. This is self-confirmation, not independent age/account
verification. Deployment/live Netlify field capture remains to be checked after
push. The app repository’s `planning/multilanguage-platform` is unchanged.

The owner reports no volunteer testers joined after earlier outreach. Paid
Reddit recruitment is under discussion; no advertising purchase or new outreach
was authorized/performed in this change. The earlier response-window notes below
are historical.

The website work required for Founding Tester recruitment and feedback is live
and verified. General Reddit recruitment has not produced the needed tester
cohort. The educator-facing bridge is implemented locally on
`feature/educator-outreach` and is live. Its form workflow is verified. Eight
individualized private-review messages were sent September 8–9 and responses
are pending; no organization, moderator, or community outreach has begun.

The canonical reasons, goals, transparency requirements, audiences, assets,
outreach sequence, privacy rules, measurements, and checklist are in the
Android repository at:

`spanish-verb-companion/docs/EDUCATOR_OUTREACH_IMPLEMENTATION_PLAN.md`

## Live Paths

- Web edition: `https://app.verbcompass.com/`
- Founding Tester information and request:
  `https://www.verbcompass.com/founding-testers/`
- Founding Tester feedback:
  `https://www.verbcompass.com/founding-testers/feedback/`
- Educator resource after deployment:
  `https://www.verbcompass.com/educators/`

## Verified Workflow

The Android-only Information link opens the hosted feedback form. A completed
form is stored by Netlify, redirects to the dedicated thank-you page, and sends
a form-specific email notification to `support@verbcompass.com`.

The `educator-feedback` form is also detected by Netlify. Its submission,
storage, thank-you redirect, and email notification to
`support@verbcompass.com` were verified on September 4, 2026.

## Next Steps

1. Monitor the support inbox and educator feedback form while the initial eight
   recipients have time to respond.
2. Verify the production layout on a real mobile device, including the
   educator page, thank-you page, navigation, and Founding Tester role options.
3. Do not count messages sent as completed reviews, and do not begin broad
   outreach until actual feedback supports the initial validation gate.
4. If no reply arrives, send no more than one brief follow-up after
   approximately one week. Five organizational gatekeepers are researched but
   remain uncontacted.

The transparency message must make clear that the browser edition is genuinely
free with no testing obligation; the Android test supports the public Google
Play release; and that release establishes the foundation for future
VerbCompass English-verb editions, beginning with English for Spanish-speaking
learners.

Keep prospect details, tester emails, and submitted feedback private. Use the
Android repository's `docs/CLOSED_TEST_FEEDBACK_WORKFLOW.md` and
`docs/EDUCATOR_OUTREACH_IMPLEMENTATION_PLAN.md` as the canonical operating
instructions.

## Connected Android restore checkpoint — October 27, 2026

Netlify published 2daea48. Live empty POST now returns 401 unauthorized instead
of disabled 503; Android-origin preflight returns 204. This demonstrates the
handler runs and rejects missing proof, not that Google accepted a real receipt.
Google credential contents were never inspected. Secret is Production-only,
scoped Builds/Functions/Runtime because finer scopes require a paid upgrade.

Local Android configuration now names project 42384135159 and endpoint
https://verbcompass-verification.netlify.app/v1/play/restore. Information includes
an Android-only Restore Full Access panel with pending/no-purchase/unavailable
messages and duplicate-click protection. Verified ownership is displayed only
following the existing server-confirmed result. No token or entitlement is saved
in browser storage, and no access restriction or paid purchase flow was added.
This confirmation UI is not the future offline access enforcement mechanism.
All 42 tests pass; assembleDebug passed offline. Browser visual smoke test was
blocked by unavailable sandbox browser runtime; layout remains visually unverified.
Generated Capacitor host-specific dependency paths were restored after building.
No build was installed or uploaded. App version/code remain 1.0.3/3, unsuitable
for another Play upload unchanged. Next prepare a signed internal-test bundle
with a fresh version code, then obtain owner authorization before uploading or
rolling out. Use a dedicated test account/device; do not uninstall owner data.
Product remains Draft based on last evidence; activation and promo-code creation
still required before the real free redemption/reinstall test. Privacy/Data safety
review and safe offline entitlement persistence remain before paid restrictions.
