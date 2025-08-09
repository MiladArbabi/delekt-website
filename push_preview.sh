#!/usr/bin/env bash
set -euo pipefail
source .env.delekt
LOCAL_DIR="${1:-site/out}"
lftp -u "$DELEKT_FTP_USER","$DELEKT_FTP_PASS" "$DELEKT_FTP_HOST" <<LFTP
set ftp:ssl-allow true
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ssl:verify-certificate no
cd preview
lcd $LOCAL_DIR
mirror -R --verbose --parallel=4 \
  --exclude-glob ".DS_Store" \
  . .
bye
LFTP
