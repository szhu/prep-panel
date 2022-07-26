#!/bin/sh
set -e

curl -fsSL https://deno.land/install.sh |
PATH="$PATH:./bin" DENO_INSTALL=. sh
