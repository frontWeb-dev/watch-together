import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  children?: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({ register, type, name, children, ...rest }: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        {...register}
        {...rest}
        className="w-full rounded-full border px-4 py-3 text-sm"
      />
      {children && <p className="pl-2 text-sm text-red-500">{children}</p>}
    </>
  );
}
