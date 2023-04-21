import { joinClass } from "@/libs/client/utils";

interface PaymentButtonProps {
  name: string;
  children: React.ReactNode;
  select?: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PaymentButton({ onclick, name, select, children }: PaymentButtonProps) {
  return (
    <button
      className={joinClass(
        "w-[30%] rounded-lg border border-blue-500 py-2 text-blue-500",
        select === name ? "bg-blue-500 text-white" : ""
      )}
      onClick={onclick}
      data-name={name}
    >
      {children}
    </button>
  );
}
