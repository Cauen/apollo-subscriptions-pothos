import * as fs from "fs";
import * as path from "path";

interface ImportOptions {
  root: string;
  extensions: string[];
  ignore: string[];
}

import { dirname } from 'path';

/**
 * ! Getting path cannot be converted into a function, bacause file that call that function get the name
 * Get the name of the resolver from file
 */
export const getResolverName = () => {
  const originalFunc = Error.prepareStackTrace;
  
  let callerfile = ""
  try {
      const err = new Error();
      Error.prepareStackTrace = function (err, stack) { return stack; };
      // @ts-expect-error
      const currentfile = err.stack[1].getFileName();
      callerfile = currentfile;
  } catch (e) {}
  Error.prepareStackTrace = originalFunc;
  const path = callerfile ?? "";

  const folders = path.split(/[\\/]/).reverse()
  const [fileName, parent, parent2] = folders
  const withoutExtensions = fileName?.split(".")[0]
  const fileNameIsIndex = withoutExtensions === "index"
  const nameParts = [
    ...(fileNameIsIndex ? [parent] : [withoutExtensions]),
    ...(fileNameIsIndex ? [parent2] : [parent]),
  ]
  const joined = nameParts.join("")
  return joined
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
      require(fullPath)
      return importedFiles.concat([fullPath]);
    }
    
    return importedFiles;
  }, []);
}
