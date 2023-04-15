"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <div className="space-y-2 px-4 pb-28 pt-20">
      {[...Array(5)].map((_, i) => (
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex">
            <div className="h-12 w-12 rounded-full bg-slate-200" />
            <div className="ml-4">
              <h3 className="font-bold">웨이브 볼 사람</h3>
              <p className="text-sm text-gray-500">모집인원 : 2 / 4</p>
            </div>
          </div>
          <Link href="/">아이콘</Link>
        </div>
      ))}
    </div>
  );
}
