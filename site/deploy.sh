#!/usr/bin/env bash
set -euo pipefail

npm run build

# Ensure files=644, dirs=755 on the server
rsync -avz --delete --chmod=F644,D755 out/ delekt:/var/www/delekt.com/