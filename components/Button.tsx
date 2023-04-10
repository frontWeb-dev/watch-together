import { joinClass } from '@/libs/client/utils';

interface ButtonProps {
  common?: boolean;
  large?: boolean;
  text: string;
  onclick?: () => void;
  [key: string]: any;
}

export default function Button({ large, common, text, onclick, ...rest }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      {...rest}
      className={joinClass(
        'relative rounded-full text-white',
        large ? 'w-full py-3' : 'w-[48%] py-2',
        common ? 'bg-blue-500' : 'bg-black'
      )}>
      {text}
    </button>
  );
}
