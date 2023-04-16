"use client";
import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Header title="마이 페이지" goBack="/party" />

      <div className="flex flex-col space-y-8 pt-20">
        <div className="flex flex-col items-center">
          <div className="mb-2 h-28 w-28 rounded-full bg-slate-200" />
          <p className="text-xl">사용자</p>
        </div>
        <ul className="space-y-4 px-8">
          <li className="w-full">
            <Link href="/my-page/user" className="flex justify-between border-b py-4">
              내 정보
              <span>아이콘</span>
            </Link>
          </li>
          <li className="w-full">
            <Link href="/my-page/party" className="flex justify-between border-b py-4">
              내 파티
              <span>아이콘</span>
            </Link>
          </li>
          <li className="w-full">
            <Link href="/my-page/payment" className="flex justify-between border-b py-4">
              결제 내역
              <span>아이콘</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
