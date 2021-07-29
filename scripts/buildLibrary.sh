#! /bin/bash -ex
./scripts/createSchemas.sh $(PROMPT_EOL_MARK='' &&  ls -1 ./src/ | sed -e 's/\.ts$//' | grep -E -v '^(index|schemas|generic|enums|types).*$' | tr '\n' ' ')
tsc
