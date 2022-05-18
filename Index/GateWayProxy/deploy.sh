#!/bin/sh -

KEY=$CREDENTIALS_KEY
set -e
create(){
    gcloud functions deploy gateway-proxy \
        --region us-central1 \
        --allow-unauthenticated \
        --entry-point proxy \
        --runtime python39 \
        --stage-bucket "media-chin-00" \
        --source "./" \
        --trigger-http \
        --project ccoe-chin-solutions
        # --env-vars-file "./env.yaml" \
}

"$@" && echo