export const uploadFile = async (url = '', data: Uint8Array) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: data,
  });

  return response;
};
