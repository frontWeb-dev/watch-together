"use client";
import Header from "@/components/Header";
import SignUpForm from "@/components/SignUpForm";

export default function Page() {
  return (
    <div>
      <Header title="회원가입" goBack="/sign-in" />

      <div className="flex h-screen w-full flex-col justify-center space-y-10 overflow-hidden p-4">
        <SignUpForm />
      </div>
    </div>
  );
}
