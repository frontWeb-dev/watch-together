"use client";

import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Header title="파티 목록" />
      {children}
      <TabBar />
    </div>
  );
}
