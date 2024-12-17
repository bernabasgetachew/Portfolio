import nodemailer from 'nodemailer';

// Handle POST requests
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { fullName, email, message } = body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for security
        pass: process.env.EMAIL_PASS, // Email password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: 'bernabasgetachew946@gmail.com', // Replace with your email
      subject: `New Contact Message from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send the email.' }),
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'This endpoint only supports POST requests.' }),
    { status: 405 }
  );
}
