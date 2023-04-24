import { joinClass } from "@/libs/client/utils";

interface ChatTextProps {
  name: string;
  text: string;
  reverse?: boolean;
}
export default function ChatText({ name, text, reverse }: ChatTextProps) {
  return (
    <div
      className={joinClass(
        "flex w-full flex-col",
        reverse ? "items-end justify-end" : "items-start"
      )}
    >
      <div className="max-w-[50%]">
        <p className={reverse ? "text-right" : "text-left"}>{name}</p>
        <p
          className={joinClass(
            "w-full rounded-2xl px-3 py-2",
            reverse ? "bg-blue-500 text-white" : "bg-white"
          )}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
