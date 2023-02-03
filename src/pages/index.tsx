/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from 'react';
import { BlobReader, ZipReader } from '@zip.js/zip.js';

const env = process.env.NEXT_PUBLIC_ENV;
if (env) console.log('🚀 ~ env', env);

export default function Home() {
  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new Worker(new URL('../lib/zip.ts', import.meta.url));
    workerRef.current.onmessage = (evt: MessageEvent<any>) => {
      console.log(`WebWorker Response => ${evt.data}`);
      if (evt) {
        const url = URL.createObjectURL(evt.data);
        const dl = document.createElement('a');
        dl.download = 'compressed.zip';
        dl.href = url;
        dl.click();
        URL.revokeObjectURL(url);
      }
      return () => {
        workerRef.current?.terminate();
      };
    };
  }, []);

  const getAllEntries = async (file: File) => {
    const zipReader = new ZipReader(new BlobReader(file));
    const entries = await zipReader.getEntries();
    console.log(entries);
  };

  const handleFolderSelected = async (event: any) => {
    const files = event.target.files;

    if (!files) throw new Error('Files are not found!');
    console.log(files);
    // workerRef.current?.postMessage(files);

    getAllEntries(files[0]);
  };

  return (
    <>
      <main>
        <input
          id="files"
          type="file"
          directory=""
          multiple
          webkitdirectory=""
          mozdirectory=""
          onChange={handleFolderSelected}
        />
      </main>
    </>
  );
}
