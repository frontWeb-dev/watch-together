"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import PaymentButton from "@/components/payment/PaymentButton";
import { charges } from "@/mocks/charge";
import { useEffect, useState } from "react";

export default function Page() {
  const [charge, setCharge] = useState({ label: "", name: "" });
  const [payment, setPayment] = useState({ label: "", name: "" });

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const target = e.target;
    const name = target.dataset.name!;
    const label = target.innerText;

    if (Number.isNaN(Number(name))) {
      setPayment({ label, name });
    } else {
      setCharge({ label, name });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header title="캐시 충전" goBack="/my-page" />
      <div className="space-y-4 px-4 pb-10 pt-20">
        <div className="space-y-4 rounded-lg border p-4 shadow-sm">
          <h2 className="border-b pb-1 text-center text-lg font-bold">충전 금액</h2>
          <div className="flex flex-wrap justify-between gap-y-4">
            {charges
              .filter((a) => !a.isPayment)
              .map((a) => (
                <PaymentButton key={a.id} onclick={clickButton} name={a.name} select={charge.name}>
                  {a.label}
                </PaymentButton>
              ))}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border p-4 shadow-sm">
          <h2 className="border-b pb-1 text-center text-lg font-bold">충전 방식</h2>
          <div className="flex flex-wrap justify-between gap-y-4">
            {charges
              .filter((a) => a.isPayment)
              .map((a) => (
                <PaymentButton key={a.id} onclick={clickButton} name={a.name} select={payment.name}>
                  {a.label}
                </PaymentButton>
              ))}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border p-4 shadow-sm">
          <h2 className="border-b pb-1 text-center text-lg font-bold">충전 정보</h2>
          <p className="flex justify-between">
            닉네임 <span>닉네임</span>
          </p>
          <p className="flex justify-between">
            이메일 <span>이메일</span>
          </p>
          <p className="flex justify-between">
            비밀번호
            <button className="rounded-lg bg-blue-500 px-2 py-1 text-white">비밀번호 확인</button>
          </p>
          <p className="flex justify-between">
            결제 수단 <span className="text-blue-500">{payment.label}</span>
          </p>
          <p className="flex justify-between">
            충전 금액 <span className="text-blue-500">{charge.label}</span>
          </p>
        </div>

        <div className="flex justify-between">
          <Button text="충전 하기" common large />
        </div>
      </div>
    </div>
  );
}
