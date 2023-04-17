"use client";

import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Header title="쪽지함" goBack="/party" />
      {children}
    </div>
  );
}
