// src/app/api/test-email/route.js
import sendEmail from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const info = await sendEmail({
      to: "dhruvilpatel20099@gmail.com", // change to your email
      subject: "✅ Test Email from Next.js",
      text: "Hello! This is a test email from your Next.js app using Nodemailer.",
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
