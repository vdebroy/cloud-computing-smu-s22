# For the new GCP Project
I set up a new container registry (all defaults) and then locally I ran.

 - Build the image locally and tag it (in this case just version 1)

    docker build . -t gcr.io/smu-5346-s22/simple-webserver:1

 - Push it to the container registry
 
    docker push gcr.io/smu-5346-s22/simple-webserver:1

**Troubleshooting**:
We should all be able to run docker commands, git commands and gcloud commands locally. But if you do run into config issues and are blocked, Cloud Shell is useful for quick commands. Most of what we need is already in there.

    gcloud auth login # To authenticate to GCP, not needed if already in cloud shell
    gcloud auth configure-docker # Uses the gcloud credential helper for docker commands

[Authentication to GCP Container Registry](https://cloud.google.com/container-registry/docs/advanced-authentication)

## Cloud Run Commands

[Command reference](https://cloud.google.com/sdk/gcloud/reference/run/deploy)

Deploy to cloud run our service named 'simple-webserver', specifying which image, region and to allow unauthenticated invocations.

    gcloud run deploy simple-webserver --image=gcr.io/smu-5346-s22/simple-webserver:1 --region=us-central1 --allow-unauthenticated 

How about setting some environment variables?

    gcloud run deploy simple-webserver --image=gcr.io/smu-5346-s22/simple-webserver:1 --region=us-central1 --allow-unauthenticated --set-env-vars=ENV_TEST=dummy

How about a secret?

    gcloud run deploy simple-webserver --image=gcr.io/smu-5346-s22/simple-webserver:1 --region=us-central1 --allow-unauthenticated --set-env-vars=ENV_TEST=dummy --set-secrets=SECRET_TEST=<secret_name>:<version>

And what if we wanted to run under a service account?

    gcloud run deploy simple-webserver --image=gcr.io/smu-5346-s22/simple-webserver:1 --region=us-central1 --allow-unauthenticated --set-env-vars=ENV_TEST=dummy --set-secrets=SECRET_TEST=<secret_name>:<version> --service-account=<service_acount_fullname>

## Your standard Cloud Build Command

    gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/YOUR_SERVICE_NAME
    gcloud builds submit --tag gcr.io/smu-5346-s22/simple-webserver

