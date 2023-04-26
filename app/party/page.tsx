"use client";

import Header from "@/components/Header";
import PartyCard from "@/components/party/PartyCard";
import TabBar from "@/components/TabBar";
import PartyInfo from "@/components/party/PartyInfo";
import Payment from "@/components/party/Payment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";
import { Party } from "@prisma/client";

interface PartyResponse {
  parties: Party[];
}

export interface PartyState {
  title: string;
  body: string;
  people: number | null;
}

function Party() {
  const initialData = { title: "", body: "", people: 1 };
  const [partyData, setPartyData] = useState<PartyState>(initialData);
  const [info, setInfo] = useState(false);
  const [payment, setPayment] = useState(false);
  const { data } = useSWR<PartyResponse>("/api/parties/showPartyList");

  const clickCard = (party: Party) => {
    setInfo(true);
    setPartyData({ title: party.title, body: party.body, people: party.people });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="relative min-h-screen">
      <Header title="파티 목록" />
      <div className="pb-28 pt-20">
        {/* party list */}

        <div className="space-y-4 px-4">
          {data?.parties?.map((party) => (
            <PartyCard key={party.id} onclick={() => clickCard(party)} party={party} />
          ))}
        </div>

        {/* party info */}
        {info && <PartyInfo info={setInfo} payment={setPayment} party={partyData} />}

        {/* party payment */}
        {payment && <Payment payment={setPayment} />}
      </div>

      <TabBar />
    </div>
  );
}

export default function Page() {
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}>
      <Party />
    </SWRConfig>
  );
}
