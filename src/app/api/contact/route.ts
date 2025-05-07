import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail from '@sendgrid/mail';

// Your SendGrid API key should be stored in environment variables
// Never hardcode API keys in your code as they can be exposed in public repositories
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || 'YOUR_API_KEY_HERE';
sgMail.setApiKey(SENDGRID_API_KEY);

// The email address you want form submissions to go to
const RECIPIENT_EMAIL = 'deyanmitev05@gmail.com'; // Your email for receiving contact submissions

// The verified sender email in your SendGrid account - must be verified in SendGrid
const SENDER_EMAIL = 'deyanmitev05@gmail.com'; // Your verified sender email

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, projectType, budget, timeline, inspirationLinks, message } = data;
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // For logging purposes
    console.log('Form submission received:');
    console.log({ name, email, projectType, budget, timeline, inspirationLinks, message });
    
    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Inspiration Links:</strong> ${inspirationLinks || 'None provided'}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const emailText = `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      Project Type: ${projectType || 'Not specified'}
      Budget: ${budget || 'Not specified'}
      Timeline: ${timeline || 'Not specified'}
      Inspiration Links: ${inspirationLinks || 'None provided'}

      Message:
      ${message}
    `;

    // Prepare email message
    const msg = {
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      subject: `New Contact Form: ${projectType || 'Project'} Inquiry from ${name}`,
      text: emailText,
      html: emailHtml,
      replyTo: email // Let's client reply directly to the sender
    };

    // Send email with better error handling
    try {
      const response = await sgMail.send(msg);
      console.log('SendGrid API Response:', response);
      console.log('Email sent successfully');
    } catch (error: any) {
      console.error('SendGrid Error:', error);
      if (error.response && typeof error.response === 'object') {
        console.error('SendGrid Error Body:', error.response.body);
      }
      throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
    }
    
    // Return a success response
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 1 business day.'
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
