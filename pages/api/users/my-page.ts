import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;

  const userInfo = await client.users.findUnique({
    where: {
      id: user?.id,
    },
  });

  res.status(200).json({
    userInfo,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
