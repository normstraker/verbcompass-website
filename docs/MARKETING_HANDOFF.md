# Marketing handoff — EUV-first recruitment, October 20, 2026

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


Latest preparation: [REDDIT_EUV_CAMPAIGN_DRAFT.md](REDDIT_EUV_CAMPAIGN_DRAFT.md)
records the owner-approved example. Matching Founding Tester HTML is a local,
unpublished draft: full Spanish Android access during closed testing, permanent
Spanish Full Access earned through participation. No public limited Android
download is offered before production. Reward delivery/timing and policy review
remain launch gates; no publication, messages or charges are authorized.

## Current direction — read first

Use `C:\Repos\verbcompass-private\founding-tester-roster.csv` as the existing
private tester tracker for new Reddit recruits (owner confirmed October 22).
Do not create a separate Reddit tester roster. Inspect its columns before adding
missing source/campaign, enrollment, feedback, qualification or fulfillment fields.
Keep identities and reward codes out of Git; educator outreach tracking is separate.

Start with [COMBINED_APP_LAUNCH_PLAN.md](COMBINED_APP_LAUNCH_PLAN.md), the authoritative
current sequence and decision record. This section supersedes earlier free-browser-first
and combined-update-before-recruitment strategies.

1. Prepare paid Reddit recruitment for the current EUV Android closed test first:
   English speakers learning Spanish, through the existing Founding Tester page.
2. Before launch, verify the current Play build, meaningful test tasks, enrollment,
   exact reward terms and dependable permanent-access delivery. Merchant setup and
   unfinished billing remain work; a focused EUV update may be necessary first.
3. Prepare the combined EUV/SUV update while that cohort participates. Do not make
   all SUV work a prerequisite for EUV recruitment. SUV teaches English to Spanish
   speakers; it has no CEFR setting, and free Study starter limits remain undecided.
4. Keep the same app/package and closed-test track, preserve enrollment and progress,
   and collect meaningful combined-build feedback before seeking production access.
   EUV participation alone does not prove SUV readiness or guarantee approval.

The future product direction remains one free Android download and one permanent
purchase unlocking both courses. The latest initial campaign draft covers Spanish
access, with no future English course promised. Honor broader prior individual
commitments. Reward delivery timing still needs final terms before public launch.

The exact lifetime-reward recruitment offer has not been explicitly approved by Google
or Reddit. No rewards for public ratings/reviews, positivity or artificial installs.
Resolve policy ambiguity before paid launch; prepare support questions without sending.

Leave the free browser app and its tester information/links unchanged, preserving
educator paths. Keep browser use independent of Play participation. Continue to use
https://www.verbcompass.com/founding-testers/ and preserve both required confirmations.

Owner willingness: up to $500, starting small. This is a planning envelope, not a
charge/launch authorization. No new ads, posts, outreach messages, website publication,
Play upload or production application has been authorized by this documentation update.

## Verified facts and next action

Owner screenshots confirmed the existing com.verbcompass.app listing is locked to a
free download; One-time products requires merchant setup; Alpha is active at release
1.0.3 Closed Alpha 1 / code 3; releases are signed by Play. Upload-key matching, highest
uploaded code across tracks, qualifying tester count and product setup remain unverified.
Do not request screenshots already supplied as though they were missing.

Next perform a read-only audit of the current EUV access/feedback behavior and permanent
reward implementation needs. Resolve the reward's exact scope and timing before public
copy. Select app implementation branch deliberately after verifying repository status.

Website work is local in C:\Repos\verbcompass-website on main, with this plan and handoff
changes uncommitted/unpushed as of October 20. The earlier handoff commit dcea91a is local.
Recheck status at continuation. App was last inspected on feature/free-web-promotion at
b393ae7; planning/multilanguage-platform contains the combined work. Read-only inspection
has not switched app branches or modified generated directories. Preserve the fixed
1,500-headword dataset, planning work, private records and existing progress.

## Historical handoff — superseded strategy, retained context

The sections below record the previous campaign direction. Their repository,
privacy and completed-work evidence remains useful, but their free-first offer,
Spanish-only reward restriction, $50 ceiling and next-step priorities do not
override the current plan above.

## Objective and agreed offer

Return the focus to the Spanish-learning product for English-speaking users
and recruit genuine Android volunteers toward Google Play production access.

Advertise **https://app.verbcompass.com/** as the free browser edition of
VerbCompass. Browser use is free and has no testing obligation. Separately
invite interested adults with Android devices to the optional Google Play
Closed Test. Do not advertise the new English-for-Spanish-speakers course as
the product in this campaign or imply that browser use counts toward the test.

The owner reports that no volunteer testers joined after earlier outreach.
The historical records show general Reddit recruitment was unsuccessful and
eight individualized educator-review messages were sent September 8–9. Do not
count those messages as testers or reviews. Whether any one-time follow-up was
sent must be checked privately before preparing another.

## Paid advertising discussion: proposal, not spending authorization

The owner is open to modest paid advertising on Reddit or Discord. The assistant
recommended one focused **Reddit trial with a $50 total ceiling**. This is a
proposed experiment, not an approved purchase, platform minimum or guarantee
of recruits. No campaign has been purchased, launched or configured here.

The offer remains free browser access plus a separate Android-test invitation.
Make Android eligibility and the participation commitment clear. Judge results
by qualified requests, actual Play opt-ins, installation and participation;
clicks and browser visits are supporting measurements, not the goal.

Reddit can target community/interests; Discord was discussed but no server,
sponsor, placement or price was selected. Verify current platform settings,
targeting options and costs before presenting a concrete campaign. Confirm the
actual budget and finished campaign before any charge or launch. No permission
has been given to send new emails/DMs, contact moderators or post advertisements.

## Repositories and branches — keep these distinct

| Repository | Verified current checkout | Meaning |
| --- | --- | --- |
| `C:\Repos\verbcompass-website` | `main` | Marketing site, enrollment/feedback pages; Netlify production deploys from main |
| `C:\Repos\spanish-verb-companion` | `feature/free-web-promotion` | App repo; original free-web work is preserved here, with later work also in dev and feature/educator-outreach |

Website `main` and `origin/main` were equal at **94ce343**, the published merge
of tester confirmations. Its earlier feature commit is **90861da** on website
`feature/educator-outreach`. At handoff preparation the website tree was clean.

The app checkout is at **b393ae7**. It contains two untracked generated build
directories: `android-multilanguage-development/` and
`www-multilanguage-development/`. Do not commit, delete or rebuild them just for
marketing. Do not switch the app branch or modify the multilanguage work.

The app's `planning/multilanguage-platform` contains completed English-course
integration, committed/pushed through **40c56db**, plus phone-test documentation
commit **a8199fb**. That work is preserved separately. English is fixed at
1,500 headwords for its initial version; additional corpus/content work is
outside this marketing task. The owner passed the phone-browser checklist;
physical-phone APK testing was deferred until Android release preparation.

**The currently deployed Netlify source branch for app.verbcompass.com has not
been independently confirmed.** Do not confuse a local branch, a site label
such as DEV, or a merge commit's message with that setting. Verify the app's
actual deployment before paid traffic or changes. The website's main deployment
was confirmed from the owner's screenshot and the successful public update.

## Public pages and recent completed change

- Free app: https://app.verbcompass.com/
- Website: https://www.verbcompass.com/
- Enrollment: https://www.verbcompass.com/founding-testers/
- Tester feedback: https://www.verbcompass.com/founding-testers/feedback/
- Educator overview: https://www.verbcompass.com/educators/

The Founding Tester form now includes two required, initially unchecked boxes:
“I am 18 years of age or older” and confirmation that the supplied email is the
Google account used for Google Play on the Android device. Local browser checks
confirmed independent required validation, both submitted fields, and mobile
layout. After the main push, both required inputs were verified on the live
page. No real request was submitted; post-deployment Netlify storage of the
new fields has not been tested. Do not manufacture a real request without
explicit authorization.

These are self-confirmations, not independent age/account verification. Keep
the existing personal review → add account in Play Console → send opt-in link
workflow. The existing public page promises qualifying active testers lifetime
Full Access to the Spanish Android app; do not expand that promise or invent
new compensation. Browser use remains independent and free.

## Google Play and historical records

The recorded Closed Test release is Spanish Verb Companion 1.0.3 (code 3),
package `com.verbcompass.app`; only the owner's Play install/test is recorded.
Live Console status has not been checked in this conversation. Verify current
release, tester numbers and production-access status before treating old
documentation as current.

Google's official guidance checked October 15, 2026 requires affected new
personal accounts to have at least 12 testers continuously opted in for the
preceding 14 days before applying for production access. Meaningful testing
and feedback must also support the application; meeting the count does not
guarantee approval. Source:
https://support.google.com/googleplay/android-developer/answer/14151465?hl=en

Do not upgrade, sign, upload or publish a new Play build just for campaign
preparation. Netlify browser testing is separate from qualifying Play testing.

The app's existing educator documents are on `feature/educator-outreach` and
may be absent in its current checkout. Read without switching with:

```text
git show feature/educator-outreach:docs/EDUCATOR_OUTREACH_IMPLEMENTATION_PLAN.md
git show feature/educator-outreach:docs/EDUCATOR_OUTREACH_MESSAGES.md
git show feature/educator-outreach:docs/CLOSED_TEST_FEEDBACK_WORKFLOW.md
git show feature/educator-outreach:docs/NEXT_SESSION_HANDOFF.md
```

Their older development deferrals/response-window dates are historical; use
this handoff and the owner's current decisions for continuation. A private
roster exists outside Git at
`C:\Repos\verbcompass-private\educator-outreach-roster.csv`. Read only if
needed for actual outreach work. Keep names, emails, submissions and contact
histories private; do not copy them into campaign docs or Git.

## Start the marketing conversation here

1. Read this handoff and verify current repository/branch/status. Stay focused
   on the Spanish free browser app and optional Android recruitment.
2. Verify the live free-app experience, campaign destination and Netlify app
   deployment. Inspect existing intake privately if the owner provides access;
   do not assume zero traffic just because no volunteers joined.
3. Prepare one small Reddit campaign proposal: audience, message, destination,
   ad copy/visual, budget/end date, measurement and pause/review criteria. Keep
   the browser benefit and optional Android-test commitment explicit.
4. Review whether to send paid traffic directly to the tester page or to a
   focused free-app landing page; do not silently replace the agreed free-first
   offer. Simplify only where needed, preserving form eligibility confirmations.
5. Get the owner's decision on the finished proposal and actual spend cap.
   Nothing is approved for payment or launch yet.

No software suite is needed for this documentation handoff. Carry prior
passing evidence forward; check only behavior affected by future changes.
