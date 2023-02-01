import {
  ZipReader,
  BlobWriter,
  BlobReader,
  ERR_ENCRYPTED,
  ERR_INVALID_PASSWORD,
} from '@zip.js/zip.js';

/**
 * Verify that using password.
 *
 * @param file - File
 * @param password - optional password
 * @returns true if using password
 */
export const isZipFileUsingPassword = async (file: Blob, password?: string) => {
  let reader: undefined | ZipReader<Blob>;

  try {
    reader = new ZipReader(new BlobReader(file), { password });
    const entries = await reader.getEntries();

    for (const entry of entries) {
      try {
        await entry.getData(new BlobWriter());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // importance logger
        console.log('zip - reader:', error.message);

        if (
          error.message === ERR_ENCRYPTED ||
          error.message === ERR_INVALID_PASSWORD
        ) {
          return true;
        } else {
          throw error;
        }
      }
    }
  } finally {
    if (reader) await reader.close();
  }

  return false;
};
