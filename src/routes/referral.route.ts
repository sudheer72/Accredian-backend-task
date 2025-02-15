import express, { Request, Response } from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req: Request, res: Response) => {
  const { name, email, company } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "recipient@example.com", // Change this to where you want to receive the referrals
    subject: "New Referral Submission",
    text: `You have a new referral:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Referral email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;
