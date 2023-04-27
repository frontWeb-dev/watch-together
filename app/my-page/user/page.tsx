"use client";

import Header from "@/components/Header";
import useFetch from "@/libs/client/useFetch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useSWR, { SWRConfig } from "swr";

function User() {
  const router = useRouter();
  const { data } = useSWR("/api/users/my-page");

  const deleteUser = async () => {
    const response = await (
      await fetch("/api/users", {
        method: "DELETE",
      })
    ).json();

    console.log(response);

    toast.success(<h1>{response.message}</h1>);

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Header title="내 정보 관리" goBack="/my-page" />
      <div className="relative h-screen">
        <div className="flex flex-col items-center px-8 pt-20">
          <div className="h-28 w-28 rounded-full bg-gray-100" />
          <div className="mb-4 w-full space-y-8 border-b py-8">
            <p className="flex justify-between">
              닉네임 <span>{data?.userInfo?.nickname}</span>
            </p>
            <p className="flex justify-between">
              이메일 <span>{data?.userInfo?.email}</span>
            </p>
            <p className="flex items-center justify-between">
              비밀번호
              <button className="rounded-lg bg-blue-500 px-2 py-1 text-white">변경하기</button>
            </p>
            <p className="flex items-center justify-between">
              캐시잔액
              <div>
                <span className="mr-4">{data?.userInfo?.cash} 원</span>
                <Link href="/my-page/charge" className="rounded-lg bg-blue-500 p-2 text-white">
                  충전하기
                </Link>
              </div>
            </p>
          </div>
          <button className="text-red-500" onClick={deleteUser}>
            탈퇴하기
          </button>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}>
      <User />
    </SWRConfig>
  );
}
