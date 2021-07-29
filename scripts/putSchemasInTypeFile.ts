import fs = require('fs');

const schemaList = process.argv.splice(2, process.argv.length);

const tsSchemaFileContent = schemaList
  .map((schemaName: string) => {
    return {
      name: schemaName,
      schema: fs.readFileSync(`./schemas/${schemaName}.schema.json`, 'utf-8')
    };
  })
  .map(({name, schema}) => {
    const lowerCasedName = name.charAt(0).toLowerCase() + name.slice(1);
    return `export const ${lowerCasedName}Schema = \`${schema}\`;`;
  })
  .map((constLine) => constLine + "\n")
  .reduce<string>((agg, constLine) => {
    return agg + constLine
  }, '');

fs.writeFileSync('./src/schemas.ts', tsSchemaFileContent);
