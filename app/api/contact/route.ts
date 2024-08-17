import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Set up transporter with your SMTP configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
    },
});

// Handler for POST requests
export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, phone, message } = await req.json();

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.SMTP_USER, // Your Roundcube email
            subject: subject || `New contact form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Failed to send message" },
            { status: 500 }
        );
    }
}
