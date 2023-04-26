"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { joinClass } from "@/libs/client/utils";
import { services } from "@/mocks/service";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [ottId, setOttId] = useState(0);
  const searchParams = useSearchParams();
  const role = searchParams?.get("role");

  const clickNext = () => {
    // 파티장 -> 파티 등록 페이지, 파티원 -> 파티 리스트
    if (role === "true") router.push(`/add-party?ottId=${ottId}`);
    else router.push("/party");
  };

  return (
    <>
      <Header title="OTT 플랫폼을 선택하세요" goBack="/select-role" />

      <div className="relative flex h-screen w-full flex-col items-center space-y-6 px-4 pt-20">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setOttId(service.id)}
            className={joinClass(
              "flex w-[90%] cursor-pointer flex-col justify-center rounded-xl border bg-slate-50 py-5 text-center shadow-md",
              ottId === service.id ? "border-2 border-blue-500" : ""
            )}
          >
            <h3 className="text-lg font-bold">{service.name}</h3>
            {ottId === service.id && (
              <p>
                월 이용료 : <span>{service?.pass?.toLocaleString("ko-kr")} 원</span>
                <br />
                가치와치에서는
                <span className="font-bold">
                  {" "}
                  월{" "}
                  {role === "true"
                    ? service.leader.toLocaleString("ko-kr")
                    : service.member.toLocaleString("ko-kr")}{" "}
                  원
                </span>
              </p>
            )}
          </div>
        ))}

        <Button onClick={clickNext} text="다음" common large />
      </div>
    </>
  );
}
