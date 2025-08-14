import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.sendMail({
  from: `"Test Mailer" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: "Test Email",
  text: "This is a test email sent from the backend script.",
}, (err, info) => {
  if (err) {
    return console.error("Failed to send test email:", err.message);
  }
  console.log("✅ Test email sent:", info.response);
});
