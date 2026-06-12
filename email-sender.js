const nodemailer = require("nodemailer");

// Task 5: Send an email using SMTP credentials from environment variables.
async function sendEmail() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_FROM,
    EMAIL_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !EMAIL_TO) {
    console.log("Missing email configuration.");
    console.log("Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM, and EMAIL_TO environment variables.");
    return;
  }

  // Create SMTP transporter using your provider settings.
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: "Hello from Node.js",
    text: "This is a test email sent with nodemailer.",
    html: "<b>This is a test email sent with nodemailer.</b>",
  });

  console.log("Email sent:", info.messageId);
}

sendEmail().catch((error) => {
  console.error("Failed to send email:", error.message);
});