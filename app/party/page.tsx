"use client";

import Header from "@/components/Header";
import PartyCard from "@/components/party/PartyCard";
import TabBar from "@/components/TabBar";
import PartyInfo from "@/components/party/PartyInfo";
import Payment from "@/components/party/Payment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [payment, setPayment] = useState(false);

  const clickCard = () => {
    setInfo(true);
  };
  return (
    <div className="relative min-h-screen">
      <Header title="파티 목록" />
      <div className="pb-28 pt-20">
        {/* party list */}
        <div className="space-y-4 px-4">
          {[...Array(5)].map((_, i) => (
            <PartyCard key={i} onclick={clickCard} gather={1} />
          ))}
        </div>

        {/* party info */}
        {info && <PartyInfo info={setInfo} payment={setPayment} />}

        {/* party payment */}
        {payment && <Payment payment={setPayment} />}
      </div>

      <TabBar />
    </div>
  );
}
