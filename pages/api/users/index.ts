import { NextApiRequest, NextApiResponse } from "next";
import {
  createUser,
  getAccountWithEmail,
  getProfileWithUserByTag,
} from "../../../lib/users";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // going to kms
  // if (req.method === "GET") {
  //   // what am i doing again?

  //   try {
  //     const { profile, error } = await getProfileWithUserByTag(tag);

  //     if (error) throw new Error(JSON.stringify({ error: error }));
  //     return res.status(200).json({ account });
  //   } catch (error) {
  //     return res.status(500).json({ error: error });
  //   }
  // }

  if (req.method === "POST") {
    try {
      const { user, error } = await createUser({
        email: req.body.email,
        password: req.body.password,
      });
      if (error) throw new Error(JSON.stringify({ error: error }));
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
