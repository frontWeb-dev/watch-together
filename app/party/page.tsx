'use client';

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import PartyInfo from '@/components/party/PartyInfo';
import Payment from '@/components/party/Payment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [payment, setPayment] = useState(false);

  return (
    <div className='relative min-h-screen'>
      <Header title='파티 목록' />
      <div className='pb-28 pt-20'>
        {/* party list */}
        <div className='space-y-4 px-4'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className=' flex items-center justify-between rounded-xl border p-4'>
              <div className='flex'>
                <div className='h-12 w-12 rounded-full bg-slate-200' />
                <div className='ml-4'>
                  <h3 className='font-bold'>웨이브 볼 사람</h3>
                  <p className='text-sm text-gray-500'>모집인원 : 2 / 4</p>
                </div>
              </div>
              <button onClick={() => setInfo(true)}>아이콘</button>
            </div>
          ))}
        </div>

        {/* party info */}
        {info && <PartyInfo info={setInfo} payment={setPayment} />}

        {/* party payment */}
        {payment && <Payment payment={setPayment} />}
      </div>

      <TabBar />
    </div>
  );
}
