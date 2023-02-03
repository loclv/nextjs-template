// When decompressing, folders are not nested; all filepaths are fully
// written out in the keys. For example, the return value may be:

import { unzipSync } from 'fflate';
import { getAsByteArray } from './reader';

// { 'nested/directory/structure.txt': Uint8Array(2) [97, 97] }
export const unzip = async (zipFile: File) => {
  const buff = await getAsByteArray(zipFile);
  return unzipSync(buff);
};
