# Android access audit — October 20, 2026

Status: source audit plus non-destructive emulator UI inspection. Permanent
ownership, fresh-install free limits and account restoration are not tested.

## Emulator observation and owner confirmation

On October 20 the owner explained that the emulator version was the basis for
the Google Play upload and that the downloaded phone app matches it. Treat the
emulator as a useful behavioral baseline with that owner confirmation. This is
not an independent binary comparison. Installer metadata alone does not show a
behavioral difference from Play.

Opened the already installed `com.verbcompass.app` on Pixel 9. Package metadata
reports version 1.0.3/code 3, DEBUGGABLE/TEST_ONLY, installer null. Did not replace
the app, clear storage, change selections, apply settings or submit feedback.

Observed:

- Home: Spanish Verb Companion with Reference, Study, Settings and Information;
  no course switch, purchase button or access-status message visible there.
- Settings: CEFR A1 through C2 and All shown; All was selected. Existing custom
  pool had two verbs and group size 25. No selections were changed. A 25-verb
  group size is not evidence of a 25-verb access limit.
- Information: version 1.0.3, 2,674 Spanish Verbs, CEFR A1–C2 displayed. Founding
  Tester Feedback expands to instructions requesting problems, suggestions and
  observations, plus a feedback-form link. Link was not followed or submitted.
- Reference: opened to ABAJAR, labeled CEFR C2, showing its content without an
  upgrade dialog or visible allowance counter. No search or new verb selection
  was performed. This establishes access to that entry, not exhaustive access.

Presentation is consistent with unrestricted access in the current emulator
state. It does not establish a verified permanent purchase, fresh-install
default, working Free mode, or whether every higher-level Study item is usable.
Do not claim testers already receive an account-restorable lifetime entitlement.

## Evidence

App checkout stayed on `feature/free-web-promotion` at `b393ae7`. Read combined
`planning/multilanguage-platform` at `a8199fb` without switching. Generated
directories were untouched. Website started clean on `main` at `ff4b64e`.
These revisions are not proof of the contents of the installed Play code 3.

## Findings

| Area | Source finding | Implication |
| --- | --- | --- |
| EUV default | Both inspected revisions default to Full in `assets/js/state.js` | Local Full mode is not proof of paid ownership; preserve the browser's free behavior when defining Android defaults |
| EUV Study | Free policy specifies A1; helpers check `cefr_level` | Verify actual entry-point enforcement and count; 76 is a documented count, not newly verified |
| EUV Reference | `helpers.js` includes A1 verbs without spending slots and allows 25 additional unique verbs; revisits spend no extra slot | Earlier shorthand of 25 total Reference verbs was inaccurate for inspected code |
| Stored access | Local mode persists through helpers/storage | Not account-backed ownership or reinstall/device restoration |
| Billing | Java bridge connects, reports owned false, leaves purchase callback unfinished; JS exposes initialize/status | Purchase, acknowledgement, promo fulfillment and restoration remain unfinished |
| Shared service | Combined `access-service.js` delegates to a policy | Not an ownership verification service |
| SUV policy | Prototype policy grants development requests in its exact context | Development authorization is not commercial Free/Full gating |
| SUV entry | Normal entry mounts indexed shell using development-named context/session components | Trace the actual shell/session path; changing prototype policy alone is not proven sufficient |
| SUV purchase boundary | No shared Billing/hasFullAccess/AccessService/Reference usage request found in inspected normal-entry, indexed shell and learner-repository files | Commercial integration still needs implementation; search is not an exhaustive bypass proof |
| SUV settings | Forms/meanings and chunk size, no CEFR setting | Use a stable starter set if approved; do not classify the frozen dataset for monetization |

## Next implementation slice

1. Observe the Play-installed EUV on the owner's device: access status, A1 Study,
   included A1 Reference, additional slots, feedback and visible upgrade/restore
   controls. Do not clear personal data to simulate a fresh install casually.
2. Compare EUV-only changes across branches before choosing a release baseline.
   Preserve browser promotion, combined work and generated directories. A newer
   combined branch is not automatically the EUV recruitment build.
3. Define Android ownership verification, offline access and revocation behavior.
   Plan migration of legacy local Full state: neither call it a verified purchase
   nor silently revoke promised access. Keep browser Full Access independent.
4. Finish merchant/product setup and permanent reward handling. A focused EUV
   update may be needed; SUV completion is not a prerequisite for recruitment.
5. Qualify purchase/redemption, acknowledgement, restore, access boundaries and
   preserved progress with controlled accounts/devices. No passing tests claimed
   by this source review. Carry forward unrelated dataset evidence.
6. Continue SUV gating alongside cohort testing: explicit starter membership,
   separate allowances and the shared permanent unlock. Exact count/content and
   whether starter verbs are included free in Reference or spend its proposed
   25 slots need an explicit decision.

Reward scope/timing, policy review, merchant/product/price, current Play behavior,
upload-key match and highest uploaded code remain unresolved. No app code,
public page, Console setting, enrollment or external message changed.
