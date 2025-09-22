// src/lib/sendEmail.js
import nodemailer from "nodemailer";

export default async function sendEmail({ to, subject, text, html }) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"eBike Rentals" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html: html || text,
    });

    console.log(`📧 Email sent: ${info.messageId}`);
    return info;
  } catch (err) {
    console.error("❌ Error sending email:", err);
    throw err;
  }
}
