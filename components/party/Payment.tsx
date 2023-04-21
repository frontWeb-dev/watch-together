import Button from "@/components/Button";
import Header from "../Header";

interface PaymentProps {
  payment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Payment({ payment }: PaymentProps) {
  const joinParty = () => {
    // 서버 실행 함수
    try {
    } catch (error) {
      console.log("파티에 가입하지 못했습니다.");
    } finally {
      payment(false);
    }
  };

  return (
    <div className="fixed top-0 z-[1000] h-screen w-full max-w-md space-y-4  rounded-lg bg-white shadow-md">
      <Header title="결제 정보" />
      <div className="space-y-6 px-4 pt-16">
        <div className="space-y-4 rounded-lg border p-4 shadow-sm">
          <h2 className="border-b pb-1 text-center text-lg font-bold">고객 정보</h2>
          <p className="flex justify-between">
            이름 <span>사용자</span>
          </p>
          <p className="flex justify-between">
            이메일 <span>이메일</span>
          </p>
        </div>
        <div className="space-y-4 rounded-lg border p-4 shadow-sm">
          <h2 className="border-b pb-1 text-center text-lg font-bold">결제 정보</h2>
          <p className="flex justify-between">
            파티 모집 명 <span></span>
          </p>
          <p className="flex justify-between">
            월 플랫폼 이용료 <span></span>
          </p>
          <p className="flex justify-between">
            월 파티원 이용료 <span></span>
          </p>
          <p className="flex justify-between">
            결제 금액 <span></span>
          </p>
          <p className="flex justify-between">
            보유 캐시 <span></span>
          </p>
          <p className="flex justify-between">
            결제 후 잔액 <span></span>
          </p>
        </div>
        <div className="flex justify-between">
          <Button onclick={() => payment(false)} text="취소하기" warning />
          <Button onclick={joinParty} text="신청하기" common />
        </div>
      </div>
    </div>
  );
}
