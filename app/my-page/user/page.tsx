"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-screen">
      <Header title="내 정보 관리" goBack="/my-page" />

      <div className="flex flex-col items-center px-8 pt-20">
        <div className="h-28 w-28 rounded-full bg-gray-100" />
        <div className="mb-4 w-full space-y-8 border-b py-8">
          <p className="flex justify-between">
            닉네임 <span>닉네임</span>
          </p>
          <p className="flex justify-between">
            이메일 <span>닉네임</span>
          </p>
          <p className="flex items-center justify-between">
            비밀번호
            <button className="rounded-lg bg-blue-500 px-2 py-1 text-white">변경하기</button>
          </p>
          <p className="flex items-center justify-between">
            캐시잔액
            <div>
              <span className="mr-4">0 원</span>
              <Link href="/my-page/charge" className="rounded-lg bg-blue-500 p-2 text-white">
                충전하기
              </Link>
            </div>
          </p>
        </div>
        <button className="text-red-500">탈퇴하기</button>
      </div>
    </div>
  );
}
