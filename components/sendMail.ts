// src/pages/api/sendMail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, linkedin, goal, revenue, help, challenges } = req.body;

    await resend.emails.send({
      from: "Strategy Call <onboarding@resend.dev>", // can be your domain
      to: "your-email@example.com", // change to your email
      subject: "New Strategy Call Form Submission",
      html: `
        <h2>New Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>LinkedIn:</b> ${linkedin}</p>
        <p><b>Goal:</b> ${goal}</p>
        <p><b>Revenue:</b> ${revenue}</p>
        <p><b>Help Needed:</b> ${help}</p>
        <p><b>Challenges:</b> ${challenges}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
