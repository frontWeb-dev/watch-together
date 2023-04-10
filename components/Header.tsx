import { MdKeyboardArrowLeft } from 'react-icons/md';
interface HeaderProps {
  goBack?: string;
  title?: string;
  onclick?: () => void;
}

export default function Header({ goBack, onclick, title }: HeaderProps) {
  return (
    <header className='z-1000 fixed flex h-14 w-full items-center justify-center bg-white py-4 shadow-sm'>
      {goBack && (
        <button onClick={onclick} className='absolute left-4'>
          <span className='sr-only'>뒤로가기</span>
          <MdKeyboardArrowLeft size={30} />
        </button>
      )}
      {title && <h2 className='text-xl font-bold'>{title}</h2>}
    </header>
  );
}
