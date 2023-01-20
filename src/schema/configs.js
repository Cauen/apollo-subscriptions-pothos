const fs = require("fs");
const path = require("path");

/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  crud: {
    outputDir: './src/schema/__generated__/',
    // replacer(generated, position) {
    //   return `// THIS CONTENT WAS INSERTED AT REPLACE. THE POSITION IS ${position}\n${generated}`
    // },
    // excludeResolversContain: ["User"],
    prismaCaller: '_context.db',
    disabled: false,
    builderImporter: "import { builder } from '../builder';",
    // inputsImporter: "import * as Inputs from '@/schema/inputs'",
    deleteOutputDirBeforeGenerate: true,
  },
  inputs: {
    builderImporter: "import { builder } from '../builder';",
    prismaImporter: `import { Prisma } from '.prisma/client';`,
    outputFilePath: './src/schema/__generated__/inputs.ts',
  },
  global: {
    afterGenerate: ({ datamodel: { enums, models } }) => {
      fs.writeFile(
        path.join(__dirname, `CodeSchema/adminSettings.json`),
        JSON.stringify({ enums, models }, null, 2),
        {},
        (err) => {
          console.log({ err });
        }
      );
    },
    replacer: (str, section) => {
      if (section === 'crud.model.object') {
        return str.replace(
          "type: Inputs.Address,",
          'type: "Json", // Mongodb Types not working yet',
        );
      }
      return str;
    },
  },
};
