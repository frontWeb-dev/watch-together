import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  type: string;
  name: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({ register, type, name, ...rest }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      {...register}
      {...rest}
      className='w-full rounded-full border px-4 py-3 text-sm'
    />
  );
}
