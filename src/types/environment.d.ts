/* eslint-disable @typescript-eslint/naming-convention */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      NEXT_PUBLIC_ENV: 'test' | 'dev' | 'prod';
    }
  }
}
