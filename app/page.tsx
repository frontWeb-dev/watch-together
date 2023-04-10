import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function Page() {
  const router = useRouter();

  return (
    <div className='flex h-screen w-full flex-col justify-center overflow-hidden p-4'>
      <div className='flex flex-col'>
        <h1 className='mb-8 text-3xl font-bold'>
          같이 봐요, <br /> 가치와치!
        </h1>

        <div className='mb-8 space-y-2'>
          <p>
            더 이상 비싼 비용으로
            <br /> OTT 서비스를 이용하지 마세요.
          </p>
          <p>
            같이 보면 부담 없는 가격에
            <br />
            같이 보는 가치, 가치 와치!
          </p>
        </div>
        <Button onclick={() => router.push('/sign-in')} text='Get Start' large />
      </div>
    </div>
  );
}
