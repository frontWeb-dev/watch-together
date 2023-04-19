'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Modal from '@/components/party/SearchMember';
import { useSearchParams } from 'next/navigation';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface addPartyForm {
  title: string;
  inviteMember?: string;
  ottId: string;
  ottPassword: string;
  description?: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const ottId = searchParams.get('ottId');
  const [invite, setInvite] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<addPartyForm>();

  const onValid = (validForm: addPartyForm) => {
    // 서버 데이터 전송
    console.log(validForm);
  };

  useEffect(() => {
    setValue('inviteMember', invite.join(', '));
  }, [invite, setValue]);

  return (
    <div className='relative min-h-screen'>
      <Header title='파티 모집하기' goBack='/select-service?role=true' />

      <div className='px-4 pt-20'>
        <form onSubmit={handleSubmit(onValid)} className='space-y-4'>
          <Input
            label='모집 제목'
            type='text'
            name='title'
            register={register('title', {
              required: '모집 제목을 입력해주세요',
            })}>
            {errors.title?.message}
          </Input>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              type='button'
              className='mb-1 block pl-2 font-semibold'>
              파티원 초대하기
            </button>
            <Input
              type='text'
              name='inviteMember'
              register={register('inviteMember')}
              placeholder='초대하기를 클릭하면 파티원 닉네임을 검색할 수 있어요!'
              readOnly
            />
          </div>

          <Input
            label='OTT 계정'
            type='text'
            name='ottId'
            placeholder='Id'
            register={register('ottId', {
              required: 'OTT 계정 아이디를 입력해주세요',
            })}>
            {errors.ottId?.message}
          </Input>
          <Input
            type='password'
            name='ottPassword'
            placeholder='Password'
            register={register('ottPassword', {
              required: 'OTT 계정 비밀번호를 입력해주세요',
            })}>
            {errors.ottPassword?.message}
          </Input>

          <div>
            <label className='mb-1 block pl-2 font-semibold'>모집 내용</label>
            <textarea
              {...register('description')}
              rows={20}
              className='h-32 w-full resize-none rounded-xl border'
            />
          </div>

          <Button text='등록하기' common large />
        </form>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} invite={invite} setInvite={setInvite} />}
    </div>
  );
}
