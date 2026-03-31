import { emailApi } from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, website, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // email content
    const emailData = {
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "Aikya Vidya Website",
      },
      to: [{ email: process.env.RECEIVER_EMAIL }],
      replyTo: {
        email: email,
        name: name,
      },
      subject: "New Contact Form Submission",
      htmlContent: `
        <h2>New Message from AIKYA VIDYA Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await emailApi.sendTransacEmail(emailData);

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message" });
  }
};