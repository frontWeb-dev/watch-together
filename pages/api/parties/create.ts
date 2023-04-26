import client from "@/libs/server/client";
import { withHandler } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, title, inviteMember, ottId, id, password, body } = req.body;

  const party = await client.party.create({
    data: {
      title,
      ott_id: +ottId,
      party_ott_id: id,
      party_ott_password: password,
      party_full: false,
      body: body,
      leader_verify: true,
    },
  });

  res.status(200).json({
    message: "파티가 성공적으로 생성되었습니다.",
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
});
