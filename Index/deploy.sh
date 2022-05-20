#!/bin/bash -c
NAME=$2
BUCKET=$3
SDIR=$4
echo $SDR
create(){
    gcloud functions deploy $NAME \
        --region us-central1 \
        --allow-unauthenticated \
        --entry-point proxy \
        --runtime python39 \
        --stage-bucket $BUCKET \
        --source "./$SDIR" \
        --trigger-http \
        --project ccoe-chin-solutions \
        --timeout 360 \
        --min-instances 1
        # --env-vars-file "./env.yaml" \
}

serve(){
    functions-framework --target proxy --port 5000
}

"$@" && echo