import { FieldErrors, useForm } from 'react-hook-form';

type TForm = {
  firstName: string;
};

const defaultValues: TForm = {
  firstName: '',
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    mode: 'onTouched',
    defaultValues,
  });

  const onFormSubmit = (data: TForm) => console.log(data);
  const onErrors = (errors: FieldErrors<TForm>) => console.error(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <input
          type="text"
          {...register('firstName', {
            required: 'First name is required',
            minLength: {
              value: 8,
              message: 'First name must have at least 8 characters',
            },
          })}
        />

        {errors.firstName?.message ?? 'No error'}
        <button>Submit</button>
      </form>
    </>
  );
}
