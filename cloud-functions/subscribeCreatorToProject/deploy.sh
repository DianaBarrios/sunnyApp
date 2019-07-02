#!/bin/bash
gcloud functions deploy subscribeCreatorToProject \
  --runtime nodejs10 \
  --trigger-resource projects/smiles-ai/databases/smiles-ai/documents/projects/{id} \
  --trigger-event providers/cloud.firestore/eventTypes/document.update \
  --env-vars-file ../.env.yaml \
