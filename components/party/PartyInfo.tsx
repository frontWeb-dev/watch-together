import { PartyState } from "@/app/party/page";
import Button from "@/components/Button";

interface PartyInfoProps {
  party: PartyState;
  info: React.Dispatch<React.SetStateAction<boolean>>;
  payment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PartyInfo({ party, info, payment }: PartyInfoProps) {
  const movePayment = () => {
    info(false);
    payment(true);
  };

  return (
    <div className="fixed top-0 z-[1000] mx-auto h-screen w-full max-w-md">
      {/* <Header title="파티 신청" /> */}
      <div className="h-full w-full bg-gray-500 opacity-70" />
      <div className="absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="text-center text-lg font-bold">{party.title}</h2>
        <div className="flex items-center justify-center">
          <div className="mr-4 h-10 w-10 rounded-full bg-gray-500" />
          <p>모집 인원 : {party.people} / 4</p>
        </div>
        <div className="rounded-lg border border-gray-300 p-4">
          <p>{party.body}</p>
        </div>
        <div className="flex justify-between">
          <Button onclick={() => info(false)} text="취소하기" warning />
          <Button onclick={movePayment} text="신청하기" common />
        </div>
      </div>
    </div>
  );
}
