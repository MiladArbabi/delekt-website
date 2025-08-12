#!/usr/bin/env bash
set -euo pipefail

# Pick Homebrew rsync if available, else fallback to system rsync
if [ -x /opt/homebrew/bin/rsync ]; then
  RSYNC_BIN="/opt/homebrew/bin/rsync"
else
  RSYNC_BIN="$(command -v rsync)"
fi

# Show which rsync we’re using (sanity check)
"$RSYNC_BIN" --version | head -1 || true

npm run build

# Ensure files=644, dirs=755 on the server
"$RSYNC_BIN" -avz --delete --chmod=F644,D755 out/ delekt:/var/www/delekt.com/