import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_123");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, linkedin, goal, revenue, help, challenges } = body;

    await resend.emails.send({
      from: "UbrandDigital <onboarding@resend.dev>", // must be verified domain in Resend
      to: "mohdhashim@ubranddigitals.com", // where you want to receive form data
      subject: "New Strategy Call Form Submission",
      html: `
        <h2>New Strategy Call Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>Goals:</strong> ${Array.isArray(goal) ? goal.join(", ") : goal}</p>
        <p><strong>Revenue:</strong> ${revenue}</p>
        <p><strong>Help Needed:</strong> ${Array.isArray(help) ? help.join(", ") : help}</p>
        <p><strong>Challenges:</strong> ${challenges}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
