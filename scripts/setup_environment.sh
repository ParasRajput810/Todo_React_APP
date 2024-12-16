#!/bin/bash
set -e

# Create the target directory
TARGET_DIR="/var/www/my-react-app"
if [ ! -d "$TARGET_DIR" ]; then
  mkdir -p "$TARGET_DIR"
fi

# Clean up any previous deployments
rm -rf "$TARGET_DIR"/*

# Clone the repository into the target directory
GIT_REPO="https://github.com/ParasRajput810/Todo_React_APP.git"
git clone "$GIT_REPO" "$TARGET_DIR"

echo "Setup environment completed. Repository cloned to $TARGET_DIR."
