#!/usr/bin/env sh
# The resulting languages_data_query_results.json isn't git tracked
# but the artefacts built from it are
npx --package=wikibase-cli@15 wd sparql ./scripts/languages_data.rq > ./scripts/languages_data_query_results.json
