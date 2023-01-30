import { zlibSync } from 'fflate';

export const zip = (file: Uint8Array) => {
  return zlibSync(file, { level: 9 });
};
