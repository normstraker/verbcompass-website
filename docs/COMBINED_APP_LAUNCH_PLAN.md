# Combined Android app and Founding Tester launch plan

Updated: October 20, 2026. Status: EUV-first recruitment preparation; no release or advertising launch.

## Direction and authority

Recruit genuine testers for the existing EUV Android app first, through the
existing https://www.verbcompass.com/founding-testers/ page and a small paid
Reddit campaign once launch prerequisites are met. Prepare the combined EUV/SUV
update while that cohort participates, then distribute the qualified update
through the same app and closed-test track. Collect meaningful feedback on the
combined build before seeking production access for that intended release.

Terminology in this conversation: EUV is the English-user version teaching
Spanish; SUV is the Spanish-user version teaching English. The combined app
contains both courses. Always use the explicit learner/course description in
public copy to avoid acronym confusion.

This October 20 sequence supersedes the earlier assumption that the complete
combined update must be ready before EUV recruitment can launch. It does not
remove reward-fulfillment, policy, enrollment or current-build readiness gates.

The owner authorized preparation of this documentation. No purchase, advertising
launch, public post, new outreach message, Play upload or production publication
is authorized by this plan. Prepare concrete artifacts for review before those
external actions. Local implementation can proceed when requested.

The owner is prepared to spend up to **$500** and favors starting small. This is
a planning envelope, not authorization to charge $500. The previous $50 ceiling
is superseded. A $50 initial experiment remains a recommendation, subject to
current platform minimums and owner approval of its exact setup. Do not assume
the remaining $450 will be spent or add automatic replenishment.

Keep the free browser app and its Founding Tester information/links unchanged.
Earlier educator emails used that path; visitors may still volunteer. Browser
use remains free, optional, and independent of qualifying Google Play testing.

## Proposed defaults requiring final offer confirmation

| Item | Proposed default | Remaining decision/check |
| --- | --- | --- |
| Android business model | Free download with a one-time, non-consumable Full Access purchase | Check existing Play pricing/products and approve model |
| Tester reward | Permanent Full Access to both included courses and updates to those courses, without recurring fees | Approve exact scope; future separately sold courses excluded by default |
| Qualification | Remain opted in for at least 14 consecutive days, use the app meaningfully during that period, and provide brief honest feedback | Publish specific achievable tasks and completion process |
| Reward delivery | Individual Google Play promo code for a permanent Full Access product | Implement and prove redemption, acknowledgement and restoration |
| First paid audience | English speakers learning Spanish, adults with Android/Google Play | Verify selectable Reddit audiences, locations and device targeting |
| Second audience | Separate Spanish campaign for Spanish speakers learning English | Prepare after first funnel evidence; no automatic second launch |

The combined one-purchase model remains the agreed product direction. Initial
campaign copy should describe the currently testable Spanish course. A narrower
Spanish-only recruitment reward was suggested in the latest discussion, but
has not been separately approved as a replacement for the proposed combined
reward. Resolve and record the exact advertised scope before launch; do not
silently reduce an existing promise or advertise the English course as currently
available in the Play test. If both courses are promised, distinguish future
delivery from what testers can install today and honor that promise.

The reward must depend on stated participation, not positive feedback, a public
rating/review, or Google granting production access. Do not require daily use as
though Google mandated it. Specify when the reward is granted and how fulfillment
works if production access is delayed. Existing Spanish-only promises must be
honored; broader combined-course terms must be approved before public claims.

Define permanent/lifetime access in plain language: covered product/courses,
Google account association, updates, restoration, and any service dependencies.
Do not imply an unlimited promise of every future VerbCompass product or service.

## Both-course Free and Full Access requirements

The owner confirmed that the newer course must also have Free and Full Access
behavior. These are two access states within the same combined Android app,
not separate Free and Paid app listings.

- One permanent, non-consumable Full Access entitlement unlocks both included
  courses. Qualifying testers receive that same combined entitlement free.
- Preserve the existing Spanish course's intended free model: A1-only Study
  (documented as 76 verbs) and 25 unique Reference verbs with unlimited revisits.
  Verify actual enforcement against the existing access implementation.
- Newer English-course free Study limit is undecided. Inspection of its settings
  provider confirms Study focus (forms/meanings) and chunk size, with no CEFR
  setting. The earlier A1-only proposal incorrectly assumed parity with Spanish
  and is withdrawn. Recommend considering a fixed starter set of headwords,
  with size and selection approved before implementation. Its own 25-verb
  Reference allowance remains proposed. Do not introduce CEFR classification
  or change the frozen dataset merely to create a commercial limit.
- Keep each course's free Reference allowance and learning progress separate.
  Course switching, search, saved lists, custom pools, restored settings and
  alternate entry points must not bypass free restrictions. Revisiting an
  already unlocked Reference verb must not spend another allowance.
- Audit the newer course's current access policy and all entry points before
  reusing Spanish controls. A functioning learning surface does not prove its
  commercial restrictions are implemented.
- Use a shared entitlement source with course-specific free rules. Purchase,
  promo redemption and restoration must unlock both courses consistently,
  including after course switching, app restart and offline reopening under the
  documented entitlement policy. Unknown/pending ownership must not grant Full
  Access accidentally; previously verified ownership needs defined offline use.
- Preserve existing learning data and valid paid ownership across updates. Free
  restrictions should limit use without deleting saved lists or progress.
- Present accurate Free/Full status, limits, upgrade and restore guidance in each
  course's interface language. Do not introduce Android purchase restrictions
  into the independently free browser edition.

Release evidence must cover both courses in Free and Full states: allowed free
Study content (A1 for Spanish; an agreed starter set for English if selected),
blocked paid-only Study content through every selection route, Reference
allowance boundaries/revisits, independent allowances, successful unlock of both
courses, pending/canceled purchase handling, restored ownership and preserved
progress after an upgrade. Final free limits and entitlement scope must match
the store listing, purchase description, tester page and onboarding.

## Verified evidence and unresolved facts

Read-only repository inspection on October 16 found:

- Website: `C:\Repos\verbcompass-website`, `main`, clean before this documentation,
  local handoff commit `dcea91a` ahead of local `origin/main` at `94ce343`.
- App: `C:\Repos\spanish-verb-companion`, `feature/free-web-promotion`, `b393ae7`.
  Untracked `android-multilanguage-development/` and
  `www-multilanguage-development/` were present and left untouched.
- Read `planning/multilanguage-platform` through Git without switching branches.
  Its Android configuration retains `com.verbcompass.app`, version code 3/name
  1.0.3, compile/target SDK 36. Version must increase beyond the highest uploaded
  code, which requires a live Console check.
- `docs/NORMAL_APP_ENGLISH_INTEGRATION.md` records successful combined Android
  debug packaging, offline emulator flows, course switching and persistence.
  Owner phone-browser checks passed; physical-phone APK testing was deferred.
- That branch's `VerbCompassBillingPlugin.java` connects to Billing but leaves
  purchase handling unfinished and reports `owned: false`. Billing connection
  alone does not establish a working purchase or lifetime reward.

Direct browser inspection was blocked; owner screenshots established the facts
below. Product inventory, upload-key match, highest uploaded code across all
tracks, qualifying tester count and production-access state remain unverified.
The browser app's Netlify deployment source remains unconfirmed; verify it before
any browser deployment changes. No real enrollment was submitted in this work.

### Console inspection attempt — October 16

Owner-provided Console screenshots subsequently confirmed:

- Existing app: VerbCompass: Spanish Verbs, package `com.verbcompass.app`,
  status Closed testing, installed audience 1. Installed audience is not proof
  of the number of qualifying continuously opted-in testers.
- App pricing explicitly states: “Your app is available for free on Google Play,
  and can't be changed to paid.” The existing listing cannot become a paid
  download. Retain it as a free download if using this update path; investigate
  a one-time Full Access in-app product and permanent tester promo redemption.
  This screenshot does not verify any existing in-app products or billing flow.

The owner's next screenshot showed One-time products blocked by “Missing
requirements for accessing this page”: a Google Payments merchant account must
be set up. The page does not expose product inventory, so no existing product
or promo eligibility is verified. Merchant setup is a prerequisite for the
proposed Full Access purchase and promo mechanism; the owner must complete any
financial identity, banking and agreement steps directly. Do not store those
details in Git. After setup, inspect/create the agreed non-consumable product
and qualify redemption before advertising the reward.

The owner's Closed testing - Alpha screenshot confirmed an active track, latest
release `1.0.3 Closed Alpha 1`, available to selected testers, with availability
in 178 countries/regions. A subsequent expanded summary confirmed numeric
version code **3**. The screen offers Create new release; no release was created.
This supports using the existing track for the combined update but does not
verify signing, bundle compatibility or Google approval of the proposed build.

Another screenshot confirmed “Releases signed by Play” under Protected with
Play > Play Store protection. The upload certificate has not been compared with
the local upload key. Next inspect Manage Play app signing > Upload key certificate.
The highest uploaded code across all tracks/bundles still needs checking before
choosing a new code. Leave release settings unchanged.

After the owner authorized starting the plan, browser inventory showed no
existing Console session. Opening `https://play.google.com/console/` was blocked
by automatic browser approval review, which reported a destination of
`https://google.play` without granted origin access. No Console content was
observed and no account settings changed. Do not treat this as a Google account
or release failure, and do not bypass the browser restriction.

Do not request the already supplied pricing, blocked-products, active-release
or Play-signing screenshots again. Obtain only the remaining evidence needed.
Hide private account identifiers and never request signing keys or passwords.
Local package/build-script review remains consistent with the evidence above;
no release build or branch switch was performed during this attempt.

## Current sequence and launch gates — October 20 decision

1. **Qualify the existing EUV offer.** Inspect the actual Play-installed build's
   free/full behavior and feedback path. Define achievable Spanish-course test
   tasks. Finish reward terms, delivery timing and reliable permanent entitlement
   fulfillment. Merchant/billing work may require a focused EUV update first;
   if so, qualify that update without making the entire SUV integration a gate.
   Do not assume the current build already delivers permanent Full Access.
2. **Prepare EUV recruitment.** Use the existing tester URL, adult/Google-account
   confirmations, clear opt-in/install instructions and private feedback. Keep
   the browser app/links unchanged. Resolve policy uncertainty and obtain approval
   for the finished advertisement, landing page, terms and actual spending.
3. **Run the approved small EUV campaign and support the cohort.** Recruit real
   Spanish learners, document opt-in continuity, actual use and feedback, and
   measure qualified participation rather than purchased installs. Nothing in
   this documentation authorizes the external launch or messages.
4. **Prepare the combined update while EUV testing runs.** Audit both access
   models, decide SUV starter limits, complete billing, signing and upgrade tests,
   and preserve course progress. Do not wait for recruitment to finish to do
   this work, or delay EUV recruitment solely for unfinished SUV features.
5. **Update the same app/closed track and continue meaningful testing.** Preserve
   enrollment and have the cohort use the combined build. Test the English
   course, course switching, both-course access and data preservation. Initial
   English-speaking recruits may not be suitable Spanish-speaking English-course
   evaluators; recruit a small appropriate supplemental group if needed. Paid
   Spanish recruitment remains a separate decision.
6. **Assess production readiness.** Apply only when the Console's participation
   requirements and meaningful testing of the intended release are satisfied.
   Updating during testing is supported; do not promise a new build resets the
   opt-in period or that the first EUV cohort automatically qualifies SUV quality.
   No automatic production application at day 14; approval is Google's decision.

### Advertising and reward policy uncertainty

The intended activity is genuine closed testing with honest private feedback.
No reward may depend on a public review/rating, positivity, fake engagement or
Google approval. Do not sell the offer as buying installs or bypassing Google.
Google's published policy prohibits manipulation of installs, ratings and reviews;
it does not explicitly approve our exact lifetime-reward arrangement. Reddit
also has not approved the exact ad/landing-page offer. Earlier confident statements
about permission were not platform approval.

Before paid launch, review the final arrangement against current policies and
resolve any ambiguity with platform support if the published rules do not settle
it. Prepare a support question locally; do not contact anyone without owner
authorization. Reddit ad approval does not establish Google policy compliance.
Use a website Traffic/appropriate lead objective for the manual application
funnel unless current Ads Manager evidence supports a different choice; do not
assume a closed-test listing works as a public install campaign.

Public messaging should lead with the learning benefit, identify Android beta
testing and the commitment, and clearly state the permanent-access terms. Avoid
“help us reach 12 installs” as the selling point. Final copy must match the
build people actually receive and distinguish any future combined features.

## Implementation workstreams and completion gates

The numbered workstreams below are dependency checklists, not a requirement to
finish all combined-app work before launching EUV recruitment. Follow the current
sequence above. Current-build/reward and campaign gates still precede paid launch.

### 1. Inspect Play Console and settle the commercial offer

- Record existing package, highest uploaded version code, tracks/release status,
  signing/upload-key arrangement and production-access requirements.
- Check app pricing, payments setup, Full Access products and promo-code support.
  A free browser app says nothing about Android pricing. An app offered free on
  Play cannot become a paid download under the same package; do not assume closed
  testing avoids that restriction.
- Confirm combined release can use the existing listing and signing arrangement.
  Record any Console blocker before implementation; do not create a replacement
  listing or package silently.
- Finalize reward scope, qualification, delivery timing and first campaign audience.

Completion: factual Console findings and agreed offer recorded without private
account details, keys or tester addresses in Git.

### 2. Prepare and qualify the combined Android update

- Recheck repository/branch/status and applicable instructions. Choose the release
  branch deliberately; preserve the planning work and generated directories.
- Carry forward existing course/data verification. Keep the initial English
  dataset fixed at 1,500 headwords; do not reopen corpus or content expansion.
- Implement the one-time entitlement and promo redemption path if selected:
  product lookup, purchase verification, acknowledgement, ownership restoration,
  cancellation/pending/error handling and both-course access boundaries.
- Implement and verify the both-course Free/Full requirements above before
  qualifying billing and tester rewards. Confirm the newer course's exact free
  limits first; carry forward existing dataset verification without expansion.
- Test a real promo redemption path, including redemption outside the app,
  reopening, reinstall and restoration on another device with the same account.
  License-test purchases or a local access flag are not proof of permanent reward.
- Increment version, prepare the correctly signed release bundle, and test upgrade
  from the existing Play-installed app. Verify Spanish progress/settings and
  English progress/settings remain intact, plus course switching and offline use.
- Complete physical-phone APK testing. Update store metadata, screenshots and
  applicable app-content/Data safety declarations to reflect actual behavior.

Completion: update and reward evidence recorded; release artifact ready for review.
Upload/distribution is a separate approved external action. Google review and
production approval cannot be guaranteed by local testing.

### 3. Prepare the Founding Tester page and operating workflow

- Keep the existing URL and explain the combined Android product. Lead with the
  relevant learning benefit, then tester commitment and reward.
- Preserve required, initially unchecked age-18+ and Google Play email confirmations.
  These remain self-confirmations, not independent verification.
- Keep browser access free and independent. Preserve existing educator paths.
- Explain personal application review, account addition in Console, opt-in link,
  installation, participation tasks, private feedback and reward delivery.
- Capture course interest to support relevant instructions and later audience
  comparison; avoid unnecessary personal data.
- Verify mobile layout, validation, submission fields and thank-you behavior.
  Live Netlify storage of the two newest confirmations remains untested; use an
  explicitly authorized test submission rather than manufacturing a real applicant.
- Keep applicant records, contact histories, eligibility and reward fulfillment
  private outside Git. Prepare follow-up templates without sending messages.

Completion: EUV page changes and instructions reviewable locally and aligned with
the actual test build and implemented reward. Revise again for the combined
release when available. Publishing/contacting applicants require authorization.

### 4. Prepare one small Reddit experiment

Recommended first audience: English speakers learning Spanish. Use one English
message and a matching landing experience; the product may include both courses
without asking the ad to explain both audiences at once.

Prepare a campaign sheet containing:

- Exact objective, locations, available learning-community/interest targets,
  adult/Android targeting settings, exclusions and audience expansion settings.
  Verify actual Ads Manager availability; suggested communities are not guaranteed
  selectable inventory and paid ads are distinct from community posts.
- Final copy and actual-app visual. Explain the learning benefit, Android testing,
  participation and permanent-access offer. Avoid guaranteed Google acceptance,
  earnings claims or invented product prices/value comparisons.
- Destination: existing Founding Tester page, with non-identifying campaign tags.
  Confirm tags survive the enrollment path before relying on attribution.
- Exact total cap, daily/lifetime budget behavior, dates, billing/tax treatment
  and stop controls. Suggested first spend: $50 total if platform controls permit.
  If no enforceable total cap is available, document monitoring and pause controls
  and obtain approval for that arrangement before launch.
- Owner approval of the complete campaign and exact spend before any charge.

Completion: finished campaign package with current account settings and costs,
ready for an owner launch decision. No ad setup or spend is implied by this file.

### 5. Measure participation and decide whether to continue

Track aggregate counts by campaign/cohort: spend, clicks, qualified applications,
accepted applicants, actual Play opt-ins, installs/confirmed use, feedback,
continuous participation and rewards delivered. Do not count outreach sent or
browser visits as testers. Report cost per qualified applicant and per participant
meeting the stated commitment, with cohort dates and incomplete follow-up clear.

Suggested initial review controls, to finalize with the campaign:

- Pause immediately for broken enrollment, inability to install/redeem, misleading
  reward claims, policy issues or the approved cap being reached.
- Review at approximately $25 spend. If there are no qualified requests, pause
  and inspect message, targeting and enrollment before spending the balance.
- At the end of the first approved tranche, report actual conversions and follow
  the cohort through the participation period. Do not infer 14-day success from
  early clicks or opt-ins. Extend spending only through an explicit next decision.
- Recruit above Google's minimum where feasible to allow for attrition; no $50
  or $500 budget guarantees the required cohort.
- Consider a separate Spanish-language campaign once the first funnel works.
  Use Spanish copy, page/instructions and support; measure it separately. The
  owner can choose earlier parallel testing with an explicit separate allocation.

## Platform references and verification limits

Official guidance consulted during this conversation on October 16, 2026:

Additional policy and sequencing review on October 20, 2026:

- [Google ratings, reviews and installs](https://support.google.com/googleplay/android-developer/answer/9898684?hl=en):
  manipulation is prohibited; do not infer explicit approval of our tester reward.
- [Reddit advertising policies](https://business.reddithelp.com/articles/Knowledge/Reddit-Advertising-Policy-Overview)
  and [campaign review](https://business.reddithelp.com/articles/Knowledge/Set-up-a-Reddit-Ads-Campaign):
  final ads require review; exact reward eligibility has not been established.
- [Reddit campaign objectives](https://business.reddithelp.com/articles/Knowledge/Ad-campaign-objectives):
  website traffic/lead objectives differ from app-install promotion.

Earlier October 16 technical references:

- [App updates](https://support.google.com/googleplay/android-developer/answer/9859350?hl=en):
  same package, appropriate signing and increased version code.
- [Testing requirements](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en):
  affected personal accounts need 12 continuously opted-in testers for at least
  14 days before applying; meaningful testing/feedback informs review. Google
  supports updating apps during closed testing.
- [Pricing](https://support.google.com/googleplay/android-developer/answer/6334373?hl=en):
  an app offered free cannot become a paid download under the same package.
- [Promo codes](https://support.google.com/googleplay/android-developer/answer/6321495?hl=en):
  paid apps and one-time products can be granted free; subscription codes are
  temporary trials. Non-subscription code limit is currently 500 per quarter per
  app. Redemption deadlines are distinct from the granted product's duration.
- [Billing tests](https://developer.android.com/google/play/billing/test) and
  [purchase lifecycle](https://developer.android.com/google/play/billing/lifecycle/one-time):
  test redemption/detection and acknowledge non-consumable purchases properly.
- [Reddit targeting](https://www.business.reddit.com/advertise/targeting/community-and-interest):
  community/interest and device targeting exist; actual inventory/settings,
  minimum budgets and prices require account verification.

Recheck changeable requirements at implementation and launch. These references
establish available mechanisms, not acceptance of our build or verification of
our account. No new external actions were performed for this documentation.
