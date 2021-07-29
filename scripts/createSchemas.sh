#!/usr/bin/env bash -e

echo "Please run this script from the project root directory"

mkdir -p schemas
# npm install
echo $@
for typeName in "$@"
do
    fileName="$(tr '[:upper:]' '[:lower:]' <<< ${typeName:0:1})${typeName:1}"
    typePath="./src/${typeName}.ts"
    echo "create schema in '${fileName}' from file '${typePath}'"
    ./node_modules/.bin/ts-json-schema-generator --path $typePath --type $typeName > ./dist/schemas/$fileName.schema.json
done
echo $@
ts-node ./scripts/putSchemasInTypeFile.ts $@
