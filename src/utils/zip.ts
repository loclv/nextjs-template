import { zlibSync, unzipSync, Unzipped } from 'fflate';

export const zip = (file: Uint8Array) => {
  return zlibSync(file, { level: 9 });
};

export const unzip = (
  file: Uint8Array
): string | undefined | never | Unzipped => {
  let unzipFile: undefined | Unzipped;

  try {
    unzipFile = unzipSync(file);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('🚀 ~ error', error);

    throw error;
  }

  return unzipFile;
};
