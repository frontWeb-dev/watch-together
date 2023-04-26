"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Modal from "@/components/party/SearchMember";
import useFetch from "@/libs/client/useFetch";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

interface addPartyForm {
  title: string;
  inviteMember?: string;
  partyId: string;
  partyPassword: string;
  description?: string;
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ottId = searchParams?.get("ottId");
  const [invite, setInvite] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [createParty, { data, error }] = useFetch("/api/parties/create");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<addPartyForm>();

  const onValid = (validForm: addPartyForm) => {
    const { title, partyId, partyPassword, description } = validForm;
    const body = {
      email: "test@gmail.com",
      title,
      id: partyId,
      password: partyPassword,
      body: description,
      ottId,
      nickname: invite,
    };

    createParty(body);
  };

  useEffect(() => {
    if (data) {
      toast.success(<h1>{data.message}</h1>);
      setTimeout(() => {
        router.push("/party");
      }, 1000);
    }
  }, [data, error]);

  useEffect(() => {
    setValue("inviteMember", invite.join(", "));
  }, [invite, setValue]);

  return (
    <div className="relative min-h-screen">
      <ToastContainer position="top-center" autoClose={1000} />
      <Header title="파티 모집하기" goBack="/select-service?role=true" />

      <div className="px-4 pt-20">
        <form onSubmit={handleSubmit(onValid)} className="space-y-4">
          <Input
            label="모집 제목"
            type="text"
            name="title"
            register={register("title", {
              required: "모집 제목을 입력해주세요",
            })}
          >
            {errors.title?.message}
          </Input>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="mb-1 block pl-2 font-semibold"
            >
              파티원 초대하기
            </button>
            <Input
              type="text"
              name="inviteMember"
              register={register("inviteMember")}
              placeholder="초대하기를 클릭하면 파티원 닉네임을 검색할 수 있어요!"
              readOnly
            />
          </div>

          <Input
            label="OTT 계정"
            type="text"
            name="partyId"
            placeholder="Id"
            register={register("partyId", {
              required: "OTT 계정 아이디를 입력해주세요",
            })}
          >
            {errors.partyId?.message}
          </Input>
          <Input
            type="password"
            name="partyPassword"
            placeholder="Password"
            register={register("partyPassword", {
              required: "OTT 계정 비밀번호를 입력해주세요",
            })}
          >
            {errors.partyPassword?.message}
          </Input>

          <div>
            <label className="mb-1 block pl-2 font-semibold">모집 내용</label>
            <textarea
              {...register("description")}
              rows={20}
              className="h-32 w-full resize-none rounded-xl border p-4"
            />
          </div>

          <Button text="등록하기" common large />
        </form>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} invite={invite} setInvite={setInvite} />}
    </div>
  );
}
