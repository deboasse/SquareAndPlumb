import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            name,
            email,
            phone,
            projectType,
            projectAddress,
            idealTimeline,
            hearAboutUs,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Format the email content
        const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
      <p><strong>Project Address:</strong> ${projectAddress || 'Not provided'}</p>
      <p><strong>Ideal Timeline:</strong> ${idealTimeline || 'Not provided'}</p>
      <p><strong>How they heard about us:</strong> ${hearAboutUs || 'Not specified'}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message || 'No message provided'}</p>
    `;

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Square & Plumb Website <noreply@squareandplumb.com>',
            to: ['info@squareandplumb.com'],
            cc: ['rita@squareandplumb.com'],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: emailHtml,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, messageId: data.id });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
