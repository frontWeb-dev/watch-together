interface PaymentProps {
  data?: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Payment({ data, setIsOpen }: PaymentProps) {
  return <div className="fixed top-0 h-screen w-full bg-white"></div>;
}
