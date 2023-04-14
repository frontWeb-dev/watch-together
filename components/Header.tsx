import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
interface HeaderProps {
  goBack?: string;
  title?: string;
}

export default function Header({ goBack, title }: HeaderProps) {
  const router = useRouter();

  const clickBack = (goBack: string) => {
    router.push(goBack);
  };

  return (
    <header className="fixed z-[1000] flex h-14 w-full max-w-md items-center justify-center bg-white py-4 shadow-sm">
      {goBack && (
        <button onClick={() => clickBack(goBack)} className="absolute left-4 cursor-pointer">
          <span className="sr-only">뒤로가기</span>
          <MdKeyboardArrowLeft size={30} />
        </button>
      )}
      {title && <h2 className="text-xl font-bold">{title}</h2>}
    </header>
  );
}
