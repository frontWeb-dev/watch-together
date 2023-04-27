import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;

  if (!user) {
    return res.status(401).json({
      errorCode: "UNAUTHORIZED",
      message: "인증 정보가 없습니다.",
    });
  }

  const data = await client.users.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!data) {
    return res.status(400).json({
      errorCode: "NOT_FOUND_USER",
      message: "일치히는 사용자가 없습니다.",
    });
  } else {
    await client.users.delete({
      where: {
        id: user.id,
      },
    });

    req.session.destroy();

    res.status(200).json({
      message: "회원 탈퇴에 성공하였습니다.",
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["DELETE"],
    handler,
  })
);
