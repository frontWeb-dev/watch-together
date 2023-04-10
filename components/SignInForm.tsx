import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SignInForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  return (
    <div>
      <form className='mb-8 space-y-2'>
        <Input type='email' name='email' />
        <Input type='password' name='password' />
        <Button type='submit' text='로그인' large common />
      </form>
      <div className='relative border-t pt-8'>
        <p className='absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500'>
          또는
        </p>
        <Button onclick={() => router.push('/sign-up')} text='계정 만들기' large />
      </div>
    </div>
  );
}
