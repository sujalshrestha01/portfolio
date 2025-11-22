import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Route for sending email
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
const port=process.env.PORT || 4000
// Start server
app.listen(port, () => console.log(`Backend running at http://localhost:${port}`));
