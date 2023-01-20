import * as fs from "fs";
import * as path from "path";

interface ImportOptions {
  root: string;
  extensions: string[];
  ignore: string[];
}

export function autoImport(options: ImportOptions): string[] {
  const { root, extensions, ignore } = options;

  return fs.readdirSync(root).reduce((importedFiles: string[], file) => {
    const fullPath = path.join(root, file);

    if (ignore.indexOf(file) !== -1) return importedFiles;
    if (fs.lstatSync(fullPath).isDirectory()) {
      return importedFiles.concat(
        autoImport({ root: fullPath, extensions, ignore })
      );
    } else if (extensions.some((ext) => file.endsWith(ext))) {
      require(fullPath);
      return importedFiles.concat([fullPath]);
    }
    return importedFiles;
  }, []);
}
