import { joinClass } from '@/libs/client/utils';

interface ButtonProps {
  large?: boolean;
  text: string;
  onclick?: () => void;
  [key: string]: any;
}

const Button = ({ large, text, onclick, ...rest }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      {...rest}
      className={joinClass(
        'rounded-full bg-blue-500 text-white',
        large ? 'w-full py-3' : 'w-[48%] py-2'
      )}>
      {text}
    </button>
  );
};

export default Button;
