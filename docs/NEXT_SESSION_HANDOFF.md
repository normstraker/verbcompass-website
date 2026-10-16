# Next Session Handoff — Marketing restart

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
