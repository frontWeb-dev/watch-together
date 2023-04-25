import { NextApiRequest, NextApiResponse } from "next";

export interface ReponseType {
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export function withHandler({ methods, handler }: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    console.log(req);
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    try {
      handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
