#!/usr/bin/env bash
set -euo pipefail
source .env.delekt
mkdir -p _live-backup
lftp -u "$DELEKT_FTP_USER","$DELEKT_FTP_PASS" "$DELEKT_FTP_HOST" <<LFTP
set ftp:ssl-allow true
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ssl:verify-certificate no
lcd ./_live-backup
mirror --verbose --parallel=4 . .
bye
LFTP
