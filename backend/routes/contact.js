import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_TO"];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  // eslint-disable-next-line no-console
  console.warn(`Missing env vars: ${missingEnv.join(", ")}`);
}

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.SMTP_TO;
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `Portfolio Contact <${from}>`,
      to,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Email send failed:", error);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

export default router;
