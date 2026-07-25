const nodemailer = require('nodemailer');

const getEmailConfig = () => {
  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPassword = process.env.EMAIL_PASSWORD?.replace(/\s+/g, '').trim();
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  const sendAsUser = process.env.SEND_AS_USER === 'true';

  if (!emailUser || !emailPassword) {
    throw new Error('Email service credentials are not configured. Set EMAIL_USER and EMAIL_PASSWORD in .env');
  }

  return { emailUser, emailPassword, contactEmail, sendAsUser };
};

const createTransporter = (emailUser, emailPassword) => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

const sendContactEmail = async (contactData) => {
  const { emailUser, emailPassword, contactEmail, sendAsUser } = getEmailConfig();
  const transporter = createTransporter(emailUser, emailPassword);
  const { name, email, phone, message } = contactData;

  const mailOptions = {
    // 'from' header shown to recipients. If SEND_AS_USER is enabled we try to
    // set it to the visitor's email (may be rewritten by mail providers).
    from: sendAsUser && email ? `${name} <${email}>` : emailUser,
    to: contactEmail || emailUser,
    replyTo: email,
    subject: `New Enquiry from ${name} - Udan Travels`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Message:</strong></p>
        <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="font-size: 12px; color: #999;">This email was sent from the Udan Travels contact form.</p>
      </div>
    `,
  };

  // Ensure SMTP envelope uses the authenticated account to avoid rejection by the SMTP server.
  // This keeps the SMTP MAIL FROM as `emailUser` while the message headers may show the visitor's email.
  mailOptions.envelope = {
    from: emailUser,
    to: contactEmail || emailUser,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
};
