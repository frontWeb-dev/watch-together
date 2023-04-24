import { joinClass } from "@/libs/client/utils";

interface ListTextProps {
  label: string;
  text: string;
  labelBlue?: boolean;
  warning?: boolean;
  success?: boolean;
}

export default function ListText({ label, text, labelBlue, warning, success }: ListTextProps) {
  return (
    <p className={joinClass("flex items-center justify-between", labelBlue ? "text-blue-500" : "")}>
      {label}
      <span
        className={joinClass(
          warning ? "text-red-500" : success ? "text-blue-500" : "text-gray-600"
        )}
      >
        {text}
      </span>
    </p>
  );
}
