import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import useFetch from "@/libs/client/useFetch";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

interface SignInForm {
  email: string;
  password: string;
}

export default function SignInForm() {
  const router = useRouter();
  const [signInAPI, { data, error }] = useFetch("/api/users/sign-in");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: "onChange" });

  const onValid = (formData: SignInForm) => {
    signInAPI(formData);
  };

  useEffect(() => {
    if (data && !data.errorCode) {
      toast.success(<h1>{data.message}</h1>);

      setTimeout(() => {
        router.push("/select-role");
      }, 1000);
    }
    if (data && data.errorCode) {
      toast.error(<h1>{data.message}</h1>);
    }

    if (error) {
      toast.error(<h1>{error.message}</h1>);
    }
  }, [data, error]);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={1000} />
      <form onSubmit={handleSubmit(onValid)} className="mb-8 space-y-2">
        <Input
          register={register("email", {
            required: "이메일을 입력하세요",
          })}
          type="email"
          name="email"
          placeholder="Email"
        >
          {errors.email?.message}
        </Input>

        <Input
          register={register("password", {
            required: "비밀번호를 입력하세요",
          })}
          type="password"
          name="password"
          placeholder="Password"
        >
          {errors.password?.message}
        </Input>
        <Button type="submit" text="로그인" large common />
      </form>
      <div className="relative border-t pt-8">
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500">
          또는
        </p>
        <Button onclick={() => router.push("/sign-up")} text="계정 만들기" large />
      </div>
    </div>
  );
}
