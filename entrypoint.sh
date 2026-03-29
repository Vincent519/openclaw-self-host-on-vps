#!/bin/bash
set -e

if [ -z "$OPENCLAW_VERSION" ]; then
  echo "Error: OPENCLAW_VERSION environment variable is not set"
  exit 1
fi

echo "Installing openclaw@v${OPENCLAW_VERSION}..."
npm install -g "openclaw@v${OPENCLAW_VERSION}"

chown -R openclaw:openclaw /data
chmod 700 /data

if [ ! -d /data/.linuxbrew ]; then
  cp -a /home/linuxbrew/.linuxbrew /data/.linuxbrew
fi

rm -rf /home/linuxbrew/.linuxbrew
ln -sfn /data/.linuxbrew /home/linuxbrew/.linuxbrew

exec gosu openclaw node src/server.js
