"use client";
import ChatText from "@/components/ChatText";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const backPath = pathname.replace("/chat", "");

  return (
    <div className="relative h-screen">
      <Header title="채팅방" goBack={backPath} />
      <div className="h-full w-full space-y-4 px-4 pb-10 pt-20">
        <div className="h-[85%] w-full space-y-3 overflow-scroll rounded-2xl bg-blue-50 p-4">
          <ChatText name="상대방" text="안녕?" />
          <ChatText name="사용자" text="안녕하세요?" reverse />
          <ChatText name="사용자" text="몇 살이세요?" reverse />
          <ChatText
            name="상대방"
            text="마흔 살 처럼 보이지만 스무 살 처럼 보이기도 했다가 쉰 처럼 보이기도 하는 나도 몰라"
          />
          <ChatText name="사용자" text="뭔소리야" reverse />
          <ChatText name="사용자" text="뭔소리야" reverse />
          <ChatText name="사용자" text="뭔소리야" reverse />
          <ChatText name="사용자" text="뭔소리야" reverse />
          <ChatText name="사용자" text="뭔소리야" reverse />
          <ChatText name="사용자" text="뭔소리야" reverse />
        </div>
        <form className="relative">
          <Input type="text" name="message" placeholder="메시지를 입력해주세요" />
          <button className="absolute right-0 top-0 h-[46px] rounded-r-xl bg-blue-500 px-4 text-white">
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
