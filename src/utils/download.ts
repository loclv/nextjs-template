export const downloadFromUint8Array = (
  uint8Array: Uint8Array,
  name?: string
) => {
  const link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link);

  const blob = new Blob([uint8Array.buffer]);
  console.log('🚀 ~ uint8Array.buffer', uint8Array.buffer);
  console.log('🚀 ~ blob', blob);
  const objectURL = URL.createObjectURL(blob);

  link.href = objectURL;
  link.href = URL.createObjectURL(blob);
  link.download = name || 'fflate-demo-' + Date.now() + '.zip';
  link.click();
  URL.revokeObjectURL(objectURL);
};

export const downloadFromBlobPartFile = (file: BlobPart, name?: string) => {
  const url = URL.createObjectURL(new Blob([file]));
  const dl = document.createElement('a');
  dl.download = name || 'fflate-demo-' + Date.now() + 'blob.zip';
  dl.href = url;
  dl.click();
  URL.revokeObjectURL(url);
};
