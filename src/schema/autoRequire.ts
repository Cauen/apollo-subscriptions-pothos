import fs from "fs";
import path from "path";

const folders = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((el) => el.isDirectory() && el.name !== "__generated__")
  .map((folder) => {
    const foldername = folder.name;
    const dirname = `${__dirname}/${foldername}`;
    console.log({ dirname })

    const files = fs
      .readdirSync(dirname)
      .filter((file) => file.endsWith(".ts"))
      .map((file) => {
        const filepath = path.join(dirname, file);
        console.log({ filepath })
        const module = require(filepath);
        return module.default;
      });
    return files;
  });

export default folders;
