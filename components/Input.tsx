import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  type: string;
  name: string;
  children?: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({ register, label, type, name, children, ...rest }: InputProps) {
  return (
    <div>
      {label && <label className="mb-1 block pl-2 font-semibold">{label}</label>}
      <input
        type={type}
        name={name}
        {...register}
        {...rest}
        className=" w-full rounded-xl border px-4 py-3 text-sm"
      />
      {children && <p className="pl-2 text-sm text-red-500">{children}</p>}
    </div>
  );
}
