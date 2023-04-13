"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { joinClass } from "@/libs/client/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLeader, setIsLeader] = useState(false);
  const nextSelect = () => {
    // state에 role 담아서 보내기 {state: {role: isLeader}}
    router.push(`/select-service?role=${isLeader}`);
  };
  return (
    <>
      <Header title="이용 유형을 선택하세요" goBack="/" />

      <div className="relative flex h-screen w-full flex-col items-center justify-around px-4 pb-4 pt-14">
        <div
          onClick={() => setIsLeader(true)}
          className={joinClass(
            "mt-6 h-[35%] w-[90%] cursor-pointer rounded-lg border-2 bg-slate-100 p-4 shadow-md hover:border-blue-500",
            isLeader ? "border-blue-500" : ""
          )}
        >
          <div className="flex h-full w-full flex-col">
            <h3 className="mb-4 text-center text-2xl font-bold">파티장</h3>
            <ul className="space-y-2 text-sm">
              <li>내 계정에 이용권을 먼저 결제해요.</li>
              <li>파티원을 모아서 월 이용료를 받아요</li>
              <li>수수료 : 월 500원</li>
            </ul>
          </div>
        </div>

        <div
          onClick={() => setIsLeader(false)}
          className={joinClass(
            "mt-6 h-[35%] w-[90%] cursor-pointer rounded-lg border-2 bg-slate-100 p-4 shadow-md hover:border-blue-500",
            !isLeader ? "border-blue-500" : ""
          )}
        >
          <div className="flex h-full w-full flex-col">
            <h3 className="mb-4 text-center text-2xl font-bold">파티원</h3>
            <ul className="space-y-2 text-sm">
              <li>모집중인 파티에 가입해요.</li>
              <li>파티장에게 이용료를 결제해요.</li>
              <li>수수료 : 월 900원</li>
            </ul>
          </div>
        </div>
        <Button onClick={nextSelect} text="다음" common large />
      </div>
    </>
  );
}
