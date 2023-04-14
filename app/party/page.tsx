"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Header title="파티 목록" />
    </div>
  );
}
