#!/bin/bash
gcloud functions deploy handleNewProjectCreation \
  --runtime nodejs10 \
  --trigger-resource "projects/smiles-ai/databases/(default)/documents/projects/{id}" \
  --trigger-event providers/cloud.firestore/eventTypes/document.create \
  --env-vars-file ../.env.yaml \
