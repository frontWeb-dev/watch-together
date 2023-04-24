"use client";
import Header from "@/components/Header";
import ListText from "@/components/listText";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  const enterChat = () => {
    router.push(`${pathname}/chat`);
  };
  return (
    <div className="relative min-h-screen">
      <Header title="파티 정보" goBack="/my-page/party" />
      <div className="space-y-4 px-4 pb-10 pt-20">
        <div className="space-y-2 rounded-2xl border border-blue-500 p-4">
          <ListText label="파티명 :" text="티빙 볼 사람" />
          <ListText label="파티 소개 : " text="티빙 볼 사람" />
          <ListText label="파티 생성일 :" text="23년 04월 24일, 20시 53분" />
          <ListText label="파티 인원 :" text="4명" />
          <ListText label="OTT 플랫폼 :" text="TVING" />
          <ListText label="계정 아이디 :" text="파티 대기중" warning />
          <ListText label="계정 비밀번호 :" text="파티 대기중" warning />
          <ListText label="파티 구성원 :" text="박지호, 구름이, 빈이, 연근이" />
        </div>
        <button
          onClick={enterChat}
          className="w-full rounded-full border border-blue-500 py-2 text-blue-500"
        >
          채팅방 입장하기
        </button>
        <button className="w-full rounded-full border border-blue-500 py-2 text-blue-500">
          OTT 비밀번호 변경하기
        </button>
        <button className="w-full rounded-full border border-blue-500 py-2 text-red-500">
          파티 나가기
        </button>
      </div>
    </div>
  );
}
