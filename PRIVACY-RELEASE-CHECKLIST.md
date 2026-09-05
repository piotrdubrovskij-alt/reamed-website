# Privacy page release gate — 2026-09-06

The LT/EN `/privatumas` page and footer/form notices are prepared locally, but
have NOT been published. Production build and TypeScript checks passed.
Existing mail delivery settings and domain/MX settings have not been changed.

Before publishing:

1. Re-authorize deployment to the existing ReaMed Google Cloud project. The old
   gcloud identity was renamed; reauthentication currently requires the user's
   approval for the standard broad Cloud CLI scopes. Do not use another account.
2. Confirm the reception camera's actual 72-hour overwrite and disabled audio.
   Replace the draft's reference to the entrance notice with the confirmed
   duration; ensure the notice itself exists. Local SD-card storage does not
   prove remote access is exclusively local: check the Xiaomi remote-access
   arrangements and applicable processor/transfer safeguards.
3. Agree the medical-record classification and retention implementation. The
   025/a outpatient history schedule is 15 years after attendance ceases, not
   15 years after a signature. The form app has no last-visit integration. Do not
   enable a blanket automatic purge based on PDF creation time. Vault currently
   has neither default nor custom retention rules. Scope any future rule to the
   ReaMed patient shared drive; confirm irreversible deletion behavior first.
4. Verify provider agreements/transfer safeguards for Workspace, form hosting,
   email and surveillance. Do not claim EEA-only storage from a plan name.
5. Resolve the existing WhatsApp button on `/kontaktai`: the latest confirmed
   clinic workflow does not use WhatsApp. It is an existing website inconsistency,
   not permission to add WhatsApp to the patient form or privacy workflow.
6. Archive the released policy edition with the consent template; retain future
   editions without retroactively changing signed documents.

After the public page is live, configure the existing OAuth application's
branding with `https://reamed.lt` and `https://reamed.lt/privatumas`, then change
Testing to Production with the user's approval and obtain a fresh Drive-only
refresh token. Keep the existing `drive.file` scope and closed archive access.
Never place OAuth tokens or staff PINs in this repository.
