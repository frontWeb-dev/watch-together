"use client";

import Header from "@/components/Header";
import ListText from "@/components/listText";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Header title="결제 내역" goBack="/my-page" />

      <div className="flex flex-col space-y-4 px-6 pb-10 pt-20">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2 rounded-xl border p-4">
            <ListText label="결제일" text="23년 04월 24일, 21시 02분 00초" />
            <ListText label="결제 상태" text="대기" />
            <ListText label="결제 유형" text="출금" />
            <ListText label="거래자" text="테스트1" />
          </div>
        ))}
      </div>
    </div>
  );
}
