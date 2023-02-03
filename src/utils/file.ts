import fs from 'fs';
import path from 'path';

export const getFilePathsRecursively = (dir: string): string[] => {
  // returns a flat array of absolute paths of all files recursively contained in the dir
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  let pending = list.length;
  if (!pending) return results;

  for (let file of list) {
    file = path.resolve(dir, file);

    const stat = fs.lstatSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFilePathsRecursively(file));
    } else {
      results.push(file);
    }

    if (!--pending) return results;
  }

  console.log(results);

  return results;
};
