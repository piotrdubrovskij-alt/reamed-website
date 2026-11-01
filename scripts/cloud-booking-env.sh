#!/usr/bin/env bash
# Wires the booking page to the clinic system in Google Cloud (project reamed-site), once:
# gives the site's Cloud Run service account read access to the shared key
# klinika-website-api-key (created by klinika-system/scripts/cloud-launch.sh website-key) and
# sets KLINIKA_API_ORIGIN + WEBSITE_API_KEY on the reamed-site service. Later Cloud Build
# deploys keep these. Run in Cloud Shell as the project owner:
#   bash scripts/cloud-booking-env.sh            # wire
#   bash scripts/cloud-booking-env.sh status     # show what the service has
#   bash scripts/cloud-booking-env.sh off        # remove both (the page says "not available yet")
set -euo pipefail
PROJECT=${PROJECT:-reamed-site}
REGION=${REGION:-europe-west1}
SERVICE=${SERVICE:-reamed-site}
SECRET=${SECRET:-klinika-website-api-key}
KLINIKA_ORIGIN=${KLINIKA_API_ORIGIN:-https://klinika-986835987912.europe-north1.run.app}

g() { gcloud --project "$PROJECT" "$@"; }

case "${1:-wire}" in
  status)
    g run services describe "$SERVICE" --region "$REGION" \
      --format='yaml(spec.template.spec.containers[0].env,spec.template.spec.serviceAccountName)'
    ;;
  off)
    g run services update "$SERVICE" --region "$REGION" \
      --remove-env-vars KLINIKA_API_ORIGIN --remove-secrets WEBSITE_API_KEY --format=none
    echo "Removed. /rezervacija now says online booking is not available yet."
    ;;
  wire)
    sa=$(g run services describe "$SERVICE" --region "$REGION" --format='value(spec.template.spec.serviceAccountName)')
    if [ -z "$sa" ]; then
      number=$(g projects describe "$PROJECT" --format='value(projectNumber)')
      sa="${number}-compute@developer.gserviceaccount.com"
    fi
    echo "Service account: $sa"
    g secrets describe "$SECRET" --format=none
    g secrets add-iam-policy-binding "$SECRET" --member="serviceAccount:$sa" \
      --role=roles/secretmanager.secretAccessor --condition=None --format=none
    g run services update "$SERVICE" --region "$REGION" \
      --update-env-vars "KLINIKA_API_ORIGIN=$KLINIKA_ORIGIN" \
      --update-secrets "WEBSITE_API_KEY=$SECRET:latest" --format=none
    echo "Wired: $SERVICE -> $KLINIKA_ORIGIN with the shared key. Check https://reamed.lt/rezervacija."
    ;;
  *)
    echo "usage: $0 [wire|status|off]" >&2
    exit 2
    ;;
esac
