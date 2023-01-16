import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../../lib/posts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { posts, error } = await getPosts();
      if (error) throw new Error("awd");
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
