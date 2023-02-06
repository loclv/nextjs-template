import { TWorkerMess } from '@/models';

const onmessage = (event: MessageEvent<TWorkerMess>) => {
  console.log('🐝 Worker: Message received from main script');
  const data = event.data;
  const result = data[0] + data[1];

  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    const workerResult = 'Result: ' + result;
    console.log('🐝 Worker: Posting message back to main script');
    postMessage(workerResult);
  }
};

addEventListener('message', onmessage);
