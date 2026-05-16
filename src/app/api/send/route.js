import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["saifahmedprince001@gmail.com"],
      reply_to: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log("Resend response:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
