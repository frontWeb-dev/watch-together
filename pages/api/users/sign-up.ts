import { NextApiRequest, NextApiResponse } from "next";
import bcrpyt from "bcrypt";
import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nickname, email, password } = req.body;
  const hashedPassword = await bcrpyt.hash(password, 10);

  const existEmail = await client.users.findUnique({
    where: {
      email,
    },
  });

  if (existEmail) {
    res.status(400).json({
      errorCode: "ALREADY_SIGNUP_EMAIL",
      message: "이미 사용중인 이메일 입니다.",
    });
  }

  const existName = await client?.users.findUnique({
    where: {
      nickname,
    },
  });

  if (existName) {
    res.status(400).json({
      errorCode: "ALREADY_SIGNUP_NICKNAME",
      message: "이미 사용중인 닉네임 입니다.",
    });
  }

  const user = await client?.users.create({
    data: {
      email,
      nickname,
      password: hashedPassword,
      cash: 0,
    },
  });

  res.status(200).json({
    message: "회원 가입에 성공하였습니다. 인증 메일을 확인해주세요.",
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
});
