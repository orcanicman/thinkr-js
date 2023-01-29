import { NextApiResponse } from "next";

export const sendRefreshToken = (res: NextApiResponse, token: string) => {
  res.setHeaders().set("jid", token, {
    httpOnly: true,
  });
};

export const removeRefreshToken = (res: NextApiResponse) => {
  res.setHeaders().set("jid", "", {
    httpOnly: true,
    maxAge: 1,
  });
};
