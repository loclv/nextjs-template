import formidable from 'formidable';
import { NextApiRequest } from 'next';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FormidableError = formidable.errors.FormidableError;

export const parseForm = async (
  req: NextApiRequest
): Promise<{
  fields: formidable.Fields;
  files: formidable.Files;
}> => {
  console.log(req);
  return new Promise((resolve) => {
    resolve({
      files: {},
      fields: {},
    });
  });
};
