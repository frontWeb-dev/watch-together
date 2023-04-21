"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import PartyCard from "@/components/party/PartyCard";

export default function Page() {
  const router = useRouter();

  const clickParty = (id: number) => {
    router.push(`/my-page/party/${id}`);
  };
  return (
    <div className="relative min-h-screen">
      <Header title="내 파티" goBack="/my-page" />

      <div className="flex flex-col px-8 pb-10 pt-20">
        <h2 className="mb-2 text-lg font-bold text-blue-500">대기 중 파티</h2>
        <div className="mb-8 space-y-4">
          {[...Array(3)].map((_, i) => (
            <PartyCard key={i} onclick={() => clickParty(i)} />
          ))}
        </div>

        <h2 className="mb-2 text-lg font-bold text-blue-500">내 파티</h2>
        <div className="space-y-4">
          {[...Array(1)].map((_, i) => (
            <PartyCard key={i} onclick={() => clickParty(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}
