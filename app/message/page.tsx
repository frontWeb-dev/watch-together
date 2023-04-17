"use client";
import Pagination from "@/components/Pagination";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;
  const total = 10;

  return (
    <div className="space-y-6 p-8 pb-24 pt-20">
      <div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-md">
        <p className="font-bold">TRANSACTION</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          디즈니 플러스 너만 오면 고! 파티의 거래가 어쩌구 저쩌구 요로콩 조로콩
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-md">
        <p className="font-bold">TRANSACTION</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          디즈니 플러스 너만 오면 고! 파티의 거래가 어쩌구 저쩌구 요로콩 조로콩
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-md">
        <p className="font-bold">TRANSACTION</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          디즈니 플러스 너만 오면 고! 파티의 거래가 어쩌구 저쩌구 요로콩 조로콩
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-md">
        <p className="font-bold">TRANSACTION</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          디즈니 플러스 너만 오면 고! 파티의 거래가 어쩌구 저쩌구 요로콩 조로콩
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-md">
        <p className="font-bold">TRANSACTION</p>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          디즈니 플러스 너만 오면 고! 파티의 거래가 어쩌구 저쩌구 요로콩 조로콩
        </p>
      </div>

      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  );
}
