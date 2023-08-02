import { client } from "/sanity/lib/client";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, license } = req.body;

    try {
      // Fetch from Sanity
      const whitelistedUsers = await client.fetch(
        '*[_type == "whitelistedEmail" && email == $userEmail &&  == $userLicense]',
        {
          userEmail: email,
          userLicense: license,
        }
      );

      // If email and license are whitelisted
      if (whitelistedUsers.length > 0) {
        // Ensure JWT_SECRET is available
        if (!process.env.JWT_SECRET) {
          return res
            .status(500)
            .json({ message: "JWT_SECRET environment variable not set" });
        }

        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        console.log("Generated Token: ", token); // log the token

        return res.status(200).json({ token });
      } else {
        return res
          .status(401)
          .json({ message: "Email or license not whitelisted" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while handling your request" });
    }
  } else {
    return res.status(405).json({ message: "Only POST requests are accepted" });
  }
}

export const logout = () => {
  // Remove the token from localStorage
  localStorage.removeItem("auth.token");
  // Redirect to home page
  window.location.href = "/";
};
