// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: NextApiResponse<any>
) {
  console.log('start');
  console.log('body: ', req.body);
  console.log('end');
  res.status(200).json({ name: 'John Doe' });
}
