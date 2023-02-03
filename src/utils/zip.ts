/* eslint-disable @typescript-eslint/no-explicit-any */
import JSZip from 'jszip';

export const zip = async (files: FileList) => {
  const zip = JSZip();

  for (let file = 0; file < files.length; file++) {
    const fileDir = files[file].webkitRelativePath || files[file].name;
    zip.file(fileDir, files[file]);
  }
  zip.folder('test empty');

  const zippedFile = await zip.generateAsync({ type: 'blob' });
  return zippedFile;
};
