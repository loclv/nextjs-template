import { FieldErrors, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type TForm = {
  firstName: string;
};

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .min(8, { message: 'First name must have at least 8 characters' }),
});

const defaultValues: TForm = {
  firstName: '',
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues,
  });

  const onFormSubmit = (data: TForm) => console.log(data);
  const onErrors = (errors: FieldErrors<TForm>) => console.error(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <input type="text" {...register('firstName')} />

        {errors.firstName?.message ?? 'No error'}
        <button>Submit</button>
      </form>
    </>
  );
}
