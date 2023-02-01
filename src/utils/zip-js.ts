import {
  ZipReader,
  BlobWriter,
  BlobReader,
  ERR_ENCRYPTED,
  ERR_INVALID_PASSWORD,
  ERR_EOCDR_NOT_FOUND,
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
      } catch (entryError: any) {
        // importance logger
        console.log('zip - reader entry:', entryError.message);

        if (
          entryError.message === ERR_ENCRYPTED ||
          entryError.message === ERR_INVALID_PASSWORD
        ) {
          return true;
        }

        if (entryError.message === ERR_EOCDR_NOT_FOUND) {
          console.log('zip - reader: this is may not a zip file!');
          return false;
        }

        throw entryError;
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.message === ERR_EOCDR_NOT_FOUND) {
      console.log('zip - reader: this is may not a zip file!');
      return false;
    }

    console.log('zip - reader:', err.message);
    return false;
  } finally {
    if (reader) await reader.close();
  }

  return false;
};
