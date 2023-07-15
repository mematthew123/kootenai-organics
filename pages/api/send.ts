import type { NextApiRequest, NextApiResponse } from "next";
import { NewsletterSignupEmail } from "../../emails/NewsletterSignupEmail";
import { resend } from "../../lib/resend";

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "POST": {
      const data = await resend.sendEmail({
        from: "hello@kootenaiorganics.com",
        to: body.email,
        subject: "Welcome to Kootenai Organics!",
        react: NewsletterSignupEmail({ name: "Kootenai" }),
      });

      return res.status(200).send(data);
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
