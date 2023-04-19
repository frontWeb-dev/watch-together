"use client";
import PartyDetail from "@/app/party/[id]/page";
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="pb-28 pt-20">
        <div className="space-y-4 px-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className=" flex items-center justify-between rounded-xl border p-4">
              <div className="flex">
                <div className="h-12 w-12 rounded-full bg-slate-200" />
                <div className="ml-4">
                  <h3 className="font-bold">웨이브 볼 사람</h3>
                  <p className="text-sm text-gray-500">모집인원 : 2 / 4</p>
                </div>
              </div>
              <Link href={`/party/${i}`}>아이콘</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
