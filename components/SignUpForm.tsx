import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useEffect } from "react";
import { signUpAPI } from "@/api/users";

interface SignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: "onChange" });

  const onValid = async (formData: SignUpForm) => {
    const body = {
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
    };
    await signUpAPI(body).then((res) => console.log(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)} className="mb-8 space-y-2">
        <Input
          label="이름"
          register={register("nickname", {
            required: "이름을 입력하세요",
          })}
          type="text"
          name="name"
          placeholder="Nick name"
        >
          {errors.nickname?.message}
        </Input>
        <Input
          label="이메일"
          register={register("email", {
            required: "이메일을 입력하세요",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바른 이메일 형식이 아닙니다",
            },
          })}
          type="email"
          name="email"
          placeholder="Email"
        >
          {errors.email?.message}
        </Input>

        <Input
          label="비밀번호"
          register={register("password", {
            required: "비밀번호를 입력하세요",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
              message: "8자 이상, 문자, 숫자, 특수문자를 포함해야 합니다.",
            },
          })}
          type="password"
          name="password"
          placeholder="8자 이상 문자, 숫자, 특수문자 포함"
        >
          {errors.password?.message}
        </Input>

        <Input
          label="비밀번호 확인"
          register={register("passwordConfirm", {
            required: "비밀번호를 한번 더 입력하세요",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "비밀번호가 일치하지 않습니다.";
              }
            },
          })}
          type="password"
          name="passwordConfirm"
          placeholder="8자 이상 문자, 숫자, 특수문자 포함"
        >
          {errors.passwordConfirm?.message}
        </Input>
        <Button type="submit" text="로그인" large common />
      </form>
    </div>
  );
}
