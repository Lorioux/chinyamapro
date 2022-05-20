@echo off
@setlocal
set NAME=%2%
set BUCKET=%3%
set SDIR=%4%
echo %SDR%
@REM set -e
set CREATE=gcloud functions deploy %NAME% ^
        --region us-central1 ^
        --allow-unauthenticated ^
        --entry-point proxy ^
        --runtime python39 ^
        --stage-bucket %BUCKET% ^
        --source "./%SDIR%" ^
        --trigger-http ^
        --project ccoe-chin-solutions ^
        --timeout 360 ^
        --min-instances 1
        @REM --env-vars-file "./env.yaml" 

@REM serve(){
@REM     functions-framework --target proxy --port 5000
@REM }

%CREATE%