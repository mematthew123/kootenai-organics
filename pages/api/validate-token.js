import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method === "POST") {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Token is not valid or expired" });
      }
      res.status(200).json({ message: "Token is valid", user: decodedToken });
    });
  }
}
