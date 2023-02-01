/**
 * Read the file as array buffer.
 *
 * @param file - File
 * @returns File As Array Buffer
 * Blog URL: {@link https://dilshankelsen.com/convert-file-to-byte-array/}
 */
export const readFileAsArrayBuffer = (
  file: Blob
): Promise<string | ArrayBuffer | null | undefined> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    // Register event listeners
    reader.addEventListener('loadend', (event) =>
      resolve(event.target?.result)
    );
    reader.addEventListener('error', reject);

    // Read file
    reader.readAsArrayBuffer(file);
  });
};

/**
 * Read the file as Byte Array.
 * @param file - File
 * @returns Byte Array
 *
 * @example
 * const byteFile = await getAsByteArray(file)
 */
export const getAsByteArray = async (file: Blob) => {
  return new Uint8Array((await readFileAsArrayBuffer(file)) as ArrayBufferLike);
};

export const readFileAsText = (file: File | Blob) => {
  const reader = new FileReader();

  reader.onload = ((theFile) => {
    console.log('🚀 ~ theFile', theFile);

    return (fileReaderEvent) => {
      console.log(
        '🚀 ~ fileEvent.target?.result',
        fileReaderEvent.target?.result
      );
    };
  })(file);

  reader.readAsText(file);
};
