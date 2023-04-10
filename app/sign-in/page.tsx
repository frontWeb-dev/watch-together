"use client";
import Header from "@/components/Header";
import SignInForm from "@/components/SignInForm";

export default function Page() {
  return (
    <div>
      <Header title="로그인" goBack="/" />

      <div className="flex h-screen w-full flex-col justify-center space-y-10 overflow-hidden p-4">
        <div>
          <p className="mb-4 text-2xl font-bold">
            쉬운 파티원 초대와 매칭, <br />
            결제까지 한번에
            <br />
          </p>
          <p>
            이 모든 것을 가능하게 하는
            <br />
            같이 보는 가치, <span className="font-bold">가치 와치!</span>
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
