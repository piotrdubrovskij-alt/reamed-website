# Privacy page release gate — 2026-09-06

The LT/EN `/privatumas` page and footer/form notices are prepared locally, but
have NOT been published. Production build and TypeScript checks passed.
Existing mail delivery settings and domain/MX settings have not been changed.

Before publishing:

1. DONE: Cloud CLI authentication restored as info@reamed.lt for the existing
   reamed-site project. Existing mail and MX settings are unchanged.
2. DONE: On 2026-09-06 the owner explicitly confirmed disabled audio and
   deletion/overwrite no later than 72 hours. This is owner-confirmed, not a
   remote camera inspection. The printable notice has been finalized; the owner
   must place it before entry into the monitored area. The policy discloses
   remote application access and does not claim exclusively local processing.
   Review the remote-access provider's processor/transfer safeguards separately.
3. Agree the medical-record classification and retention implementation. The
   025/a outpatient history schedule is 15 years after attendance ceases, not
   15 years after a signature. The form app has no last-visit integration. Do not
   enable a blanket automatic purge based on PDF creation time. Vault currently
   has neither default nor custom retention rules. Scope any future rule to the
   ReaMed patient shared drive; confirm irreversible deletion behavior first.
4. Verify provider agreements/transfer safeguards for Workspace, form hosting,
   email and surveillance. Do not claim EEA-only storage from a plan name.
5. DONE: Removed the WhatsApp button on `/kontaktai`, matching the confirmed
   clinic workflow. WhatsApp was not added to the patient form.
6. Archive the released policy edition with the consent template; retain future
   editions without retroactively changing signed documents.

After the public page is live, configure the existing OAuth application's
branding with `https://reamed.lt` and `https://reamed.lt/privatumas`, then change
Testing to Production with the user's approval and obtain a fresh Drive-only
refresh token. Keep the existing `drive.file` scope and closed archive access.
Never place OAuth tokens or staff PINs in this repository.
