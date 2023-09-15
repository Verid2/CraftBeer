import { NextApiRequest, NextApiResponse } from "next";
import connection from "@/data/db"; // Import your MySQL connection

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userName, password } = req.body;

    // Perform a database query to check if the user exists
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    const [rows] = await connection.promise().query(query, [userName, password]);

    if (rows.length === 1) {
      // User exists in the database, allow login
      res.status(200).json({ message: "Login successful" });
    } else {
      // User does not exist or incorrect credentials
      res.status(401).json({ message: "Invalid username or password" });
    }
  } else {
    // Only accept POST requests
    res.status(405).json({ message: "Method not allowed" });
  }
};