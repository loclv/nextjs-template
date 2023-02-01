// When decompressing, folders are not nested; all filepaths are fully
// written out in the keys. For example, the return value may be:

import { unzipSync } from 'fflate';
import { getAsByteArray } from './reader';

// { 'nested/directory/structure.txt': Uint8Array(2) [97, 97] }
export const unzip = async (zipFile: File) => {
  const buff = await getAsByteArray(zipFile);
  return unzipSync(buff, {
    // You may optionally supply a filter for files. By default, all files in a
    // ZIP archive are extracted, but a filter can save resources by telling
    // the library not to decompress certain files
    filter(file) {
      // Don't decompress the massive image or any files larger than 10 MiB
      return file.name != 'massiveImage.bmp' && file.originalSize <= 10_000_000;
    },
  });
};
