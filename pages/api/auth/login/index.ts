import { NextApiRequest, NextApiResponse } from "next";
import { getAccountWithEmail } from "../../../../lib/users";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const { account, error } = await getAccountWithEmail({ email });
      if (error) throw new Error(error as any);

      if (!account?.password === password) throw new Error("Invalid login");

      // user is now logged in, make jwt refresh & auth token with userId stored in it.

      return res.status(200).json({ msg: "LMFAOOO" });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
