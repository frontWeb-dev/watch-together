import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";
import bcrypt from "bcrypt";
import { withApiSession } from "@/libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = await client.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res
      .status(400)
      .json({ errorCode: "NOT_FOUND_USER", message: "일치하는 사용자가 없습니다." });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).json({
      errorCode: "WRONG_PASSWORD_USER",
      message: "패스워드가 일치하지 않습니다.",
    });
  }

  req.session.user = {
    id: user.id,
  };

  await req.session.save();

  res.status(200).json({
    user: {
      email: user.email,
      nickname: user.nickname,
      cash: user.cash,
    },
    message: "로그인에 성공하였습니다.",
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
