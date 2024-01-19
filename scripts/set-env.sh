#!/bin/bash

# Script to create a .env file from environment variables

# Define the .env file path
ENV_FILE=".env"

# Create or clear the .env file
> $ENV_FILE

# Append the environment variables to the .env file
echo "MIX_PANEL_KEY=${MIX_PANEL_KEY}" >> $ENV_FILE
echo "AUTH0_AUDIENCE=${AUTH0_AUDIENCE}" >> $ENV_FILE
echo "AUTH0_REDIRECT_URL=${AUTH0_REDIRECT_URL}" >> $ENV_FILE
echo "AUTH0_DOMAIN=${AUTH0_DOMAIN}" >> $ENV_FILE
echo "AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID}" >> $ENV_FILE

echo "Environment variables written to $ENV_FILE"
