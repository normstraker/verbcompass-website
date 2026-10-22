# Next session — EUV-first tester recruitment

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
