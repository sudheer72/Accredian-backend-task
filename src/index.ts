import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Configure Nodemailer SMTP Transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or any SMTP service
  auth: {
    user: "sudheerraavi777@gmail.com", // Your email
    pass: "qxat xdwm gabo jxfs", // Your generated App Password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, company } = req.body;

  try {
    // Referral Link (Replace with your actual website referral page)
    const referralLink = `https://accredian.com/`;


    const mailOptions = {
      from: "sudheerraavi <sudheerraavi777@gmail.com>",
      to: email, // Recipient's email
      subject: "You've Been Referred!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">Hi ${name},</h2>
          <p>Welcome to Accredian! We're very excited to have you on board.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f8f8f8;">
              <th style="padding: 10px; border: 1px solid #ddd;">Course</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Description</th>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Full Stack Web Development</td>
              <td style="padding: 10px; border: 1px solid #ddd;">Join with us to become a top software developer</td>
            </tr>
            <tr style="background: #f8f8f8;">
              <td style="padding: 10px; border: 1px solid #ddd;">AI/ML Development</td>
              <td style="padding: 10px; border: 1px solid #ddd;">Join with us to excel in AI/ML</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Data Science</td>
              <td style="padding: 10px; border: 1px solid #ddd;">Join us to master Data Science</td>
            </tr>
          </table>

          <p style="margin-top: 20px;">To get started with Accredian, please click below:</p>
          
          <a href="${referralLink}" style="background: #28a745; color: white; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px; font-size: 16px;">
            Click Me
          </a>

          <p style="margin-top: 20px;">Need help? Just reply to this email, we'd love to assist you!</p>

          <p>Best Regards,<br>Accredian Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully!");

    res.status(200).json({ message: "Referral Sent & Email Delivered!" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the Express server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
