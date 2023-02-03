// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { zip } from '@/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
addEventListener('message', async function (event: MessageEvent<any>) {
  console.log('Posting message back to main script');
  const folderZip = await zip(event.data);

  console.log('folderZip: ', folderZip);
  postMessage(folderZip);
});
