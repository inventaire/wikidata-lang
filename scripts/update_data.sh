#!/usr/bin/env sh
npx --package=wikibase-cli wd sparql ./scripts/languages_data.rq > ./scripts/languages_data_query_results.json
