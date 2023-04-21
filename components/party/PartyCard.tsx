interface PartyCardProps {
  gather?: number;
  onclick: () => void;
}

export default function PartyCard({ gather, onclick }: PartyCardProps) {
  return (
    <div className=" flex items-center justify-between rounded-xl border p-4">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-slate-200" />
        <div className="ml-4">
          <h3 className="font-bold">웨이브 볼 사람</h3>
          {gather && <p className="text-sm text-gray-500">모집인원 : {gather} / 4</p>}
        </div>
      </div>
      <button onClick={onclick}>아이콘</button>
    </div>
  );
}
