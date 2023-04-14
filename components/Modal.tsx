import { flattenDiagnosticMessageText } from "typescript";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface searchForm {
  searchMember: string;
}

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  invite: string[];
  setInvite: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Modal({ setIsOpen, invite, setInvite }: ModalProps) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<searchForm>();

  const onValid = (validForm: searchForm) => {
    const { searchMember } = validForm;

    // invite member가 최대 3명 이상 -> setError 3명까지만 가능
    if (invite.length == 3)
      setError("searchMember", { message: "파티원 초대는 최대 3명까지만 가능합니다." });
    else {
      setInvite([...invite, searchMember]);
      reset();
    }
    // 서버로 해당 유저 있는지 검색하기
    // 있으면 invite에 추가 -> form reset

    // 없으면 setErrors => 없어요
  };

  const cancleInvite = () => {
    setInvite([]);
    setIsOpen(false);
  };
  useEffect(() => {
    console.log(invite);
  }, [invite]);

  return (
    <>
      <div className="fixed top-0 mx-auto h-screen w-screen max-w-md bg-gray-100 opacity-90" />;
      <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white">
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col space-y-4 p-4">
          <Input
            type="text"
            name="searchMember"
            placeholder="닉네임을 입력하세요"
            register={register("searchMember", {
              required: "닉네임을 입력해주세요",
            })}
          />
          {/* <button type="submit">검색</button> */}
          <div className="h-24 rounded-xl border p-2">{invite.join(", ")}</div>
          {errors.searchMember?.message && (
            <p className="text-sm text-red-500"> {errors?.searchMember?.message}</p>
          )}
          <div className=" flex justify-between">
            <Button onClick={cancleInvite} type="button" text="취소하기" warning />
            <Button onClick={() => setIsOpen(false)} type="button" text="초대하기" common />
          </div>
        </form>
      </div>
    </>
  );
}
