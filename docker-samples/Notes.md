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
