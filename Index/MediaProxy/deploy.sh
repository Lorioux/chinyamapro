#!/bin/sh -

KEY=$MEDIA_STOKE_KEY

create(){
    gcloud functions deploy media-proxy \
        --region us-central1 \
        --allow-unauthenticated \
        --entry-point "proxy" \
        --env-vars-file "./env.yaml" \
        --runtime python39 \
        --stage-bucket "media-chin-00" \
        --source "./" \
        --trigger-http
}

"$@" && echo