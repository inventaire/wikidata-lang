#!/usr/bin/env sh
npx --package=wikibase-cli wd sparql ./scripts/lang_data.rq > ./scripts/lang_data.json
