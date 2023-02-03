import { zlibSync } from 'fflate';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
addEventListener('message', (event) => {
  console.log(event.data);
  const zipFile = zlibSync(event.data, { level: 9 });
  postMessage(zipFile);
});
