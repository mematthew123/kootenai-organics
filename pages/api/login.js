import { client } from "/sanity/lib/client";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Fetch from Sanity
    const whitelistedEmails = await client
      .fetch('*[_type == "whitelistedEmail" && email == $userEmail]', {
        userEmail: email,
      })
      .catch((err) => console.error(err));
    console.log(whitelistedEmails);

    // If email is whitelisted
    if (whitelistedEmails.length > 0) {
      const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Email not whitelisted" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are accepted" });
  }
}
