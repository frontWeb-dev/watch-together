"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { services } from "@/mocks/service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [ottId, setOttId] = useState(0);
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  console.log(role);
  return (
    <>
      <Header title="OTT 플랫폼을 선택하세요" goBack="/select-role" />

      <div className="relative flex h-screen w-full flex-col items-center space-y-6 px-4 pt-20">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setOttId(service.id)}
            className="flex w-[90%] flex-col justify-center rounded-xl border bg-slate-50 py-5 text-center shadow-md"
          >
            <h3 className="text-lg font-bold">{service.name}</h3>
            {ottId === service.id && (
              <p>
                월 이용료 : <span>{service.pay.toLocaleString("ko-kr")} 원</span>
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

        <Button text="다음" common large />
      </div>
    </>
  );
}
