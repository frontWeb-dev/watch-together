import Button from '@/components/Button';
import Header from '@/components/Header';

interface PartyInfoProps {
  info: React.Dispatch<React.SetStateAction<boolean>>;
  payment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PartyInfo({ info, payment }: PartyInfoProps) {
  const movePayment = () => {
    info(false);
    payment(true);
  };

  return (
    <>
      <Header title='파티 신청' />
      <div className='fixed top-0 h-screen w-screen bg-gray-500 opacity-70' />
      <div className='absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-lg bg-white p-4 shadow-md'>
        <h2 className='text-center text-lg font-bold'>디즈니 플러스 3명 모집, 너만 오면 고!</h2>
        <div className='flex items-center justify-center'>
          <div className='mr-4 h-10 w-10 rounded-full bg-gray-500' />
          <p>모집 인원 : 1 / 4</p>
        </div>
        <div className='rounded-lg border border-gray-300 p-4'>
          <p>
            디즈니 플러스 3명 모집 합니다. 함께 마블 영화도 보고 애니메이션 좋아하시면 애니메이션
            같이 보면서 얘기도 나눠봐요!
          </p>
        </div>
        <div className='flex justify-between'>
          <Button onclick={() => info(false)} text='취소하기' warning />
          <Button onclick={movePayment} text='신청하기' common />
        </div>
      </div>
    </>
  );
}
