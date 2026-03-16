"use server";

import { Resend } from "resend";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  console.log("DEBUG: API Key present:", !!apiKey);
  if (apiKey) {
    console.log("DEBUG: API Key starts with:", apiKey.substring(0, 5));
  }

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from environment variables.");
    return {
      success: false,
      error:
        "Email service configuration error. Please check environment variables.",
    };
  }

  const resend = new Resend(apiKey);

  // Validate data
  const result = contactSchema.safeParse(formData);
  if (!result.success) {
    return {
      success: false,
      error: "Invalid form data.",
    };
  }

  const { name, email, message } = result.data;

  try {
    console.log(`Attempting to send email from ${name} (${email})...`);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "business.naderghu@gmail.com",
      subject: `New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #00E5FF; padding-bottom: 10px;">New Portfolio Inquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; pt: 10px;">
            <p>Sent via Portfolio Contact Form • ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        error: error.message,
      };
    }

    console.log("Email sent successfully:", data);
    return { success: true };
  } catch (err) {
    console.error("Unexpected Server Error:", err);
    return {
      success: false,
      error:
        err instanceof Error ? err.message : "An unexpected error occurred.",
    };
  }
}
