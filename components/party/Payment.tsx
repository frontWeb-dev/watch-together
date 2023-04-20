import Button from '@/components/Button';

interface PaymentProps {
  payment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Payment({ payment }: PaymentProps) {
  const joinParty = () => {
    // 서버 실행 함수
    try {
    } catch (error) {
      console.log('파티에 가입하지 못했습니다.');
    } finally {
      payment(false);
    }
  };

  return (
    <>
      <div className='fixed w-[100%] space-y-4  rounded-lg bg-white p-4 shadow-md'>
        <div className='space-y-2 p-4'>
          <h2 className='text-center'>고객 정보</h2>
          <p>
            이름 <span>사용자</span>
          </p>
          <p>
            이메일 <span>이메일</span>
          </p>
        </div>
        <div className='space-y-2 p-4'>
          <h2 className='text-center'>결제 정보</h2>
          <p>
            파티 모집 명 <span></span>
          </p>
          <p>
            월 플랫폼 이용료 <span></span>
          </p>
          <p>
            월 파티원 이용료 <span></span>
          </p>
          <p>
            결제 금액 <span></span>
          </p>
          <p>
            보유 캐시 <span></span>
          </p>
          <p>
            결제 후 잔액 <span></span>
          </p>
        </div>
        <div className='flex justify-between'>
          <Button onclick={() => payment(false)} text='취소하기' warning />
          <Button onclick={joinParty} text='신청하기' common />
        </div>
      </div>
    </>
  );
}
