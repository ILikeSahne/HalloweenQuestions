import prisma from "@/app/database/Prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Extract the question and goes_to data from the request body
    let { question, goes_to } = req.body;

    if(!goes_to) {
      goes_to = ""
    }

    // Check if the required data is provided
    if (!question) {
      return res.status(400).json({ error: "Missing data" });
    }

    try {
      // Create a new question entry in the database using Prisma
      const createdQuestion = await prisma.questions.create({
        data: {
          question,
          goes_to
        },
      });

      // Return a 201 Created response with the created question
      return res.status(201).json(createdQuestion);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
