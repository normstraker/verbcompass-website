# Next Session Handoff — Educator Outreach Response Window

**Last Updated:** September 9, 2026

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
