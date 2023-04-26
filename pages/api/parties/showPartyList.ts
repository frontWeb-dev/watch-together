import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const parties = await client.party.findMany({});

  res.status(200).json({
    parties,
    message: "success",
  });
}

export default withHandler({
  methods: ["GET"],
  handler,
});
