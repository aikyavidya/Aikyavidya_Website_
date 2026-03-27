import { transporter } from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, website, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // mail content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from AIKYA VIDYA Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
};