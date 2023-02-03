import { zipSync } from 'fflate';

export const zip = (file: Uint8Array) => {
  let zippedFile: undefined | Uint8Array;

  try {
    zippedFile = zipSync({ sampleFolder: file }, { level: 9 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log('🚀 ~ err', err);
    throw err;
  }
  return zippedFile;
};
