import { joinClass } from "@/libs/client/utils";

interface ButtonProps {
  common?: boolean;
  warning?: boolean;
  large?: boolean;
  text: string;
  onclick?: () => void;
  [key: string]: any;
}

export default function Button({ large, common, warning, text, onclick, ...rest }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      {...rest}
      className={joinClass(
        "relative rounded-xl text-white",
        large ? "w-full py-3" : "w-[48%] py-2",
        common ? "bg-blue-500" : "bg-black",
        warning ? "bg-red-500" : "bg-black"
      )}
    >
      {text}
    </button>
  );
}
