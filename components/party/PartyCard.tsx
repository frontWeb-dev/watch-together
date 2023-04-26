import { Party } from "@prisma/client";

interface PartyCardProps {
  party: Party;
  onclick: () => void;
}

export default function PartyCard({ party, onclick }: PartyCardProps) {
  return (
    <div className=" mb-4 flex items-center justify-between rounded-xl border p-4">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-slate-200" />
        <div className="ml-4">
          <h3 className="font-bold">{party.title}</h3>
          {party.people && <p className="text-sm text-gray-500">모집인원 : {party.people} / 4</p>}
        </div>
      </div>
      <button onClick={onclick}>아이콘</button>
    </div>
  );
}
