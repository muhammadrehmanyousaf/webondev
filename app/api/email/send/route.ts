import { NextRequest, NextResponse } from 'next/server';
import {
  processContactSubmission,
  processBookingSubmission,
  processNewsletterSignup,
  sendContactConfirmation,
  sendBookingConfirmation,
  sendWelcomeEmail,
  sendLeadNotification,
  type ContactFormData,
  type BookingFormData,
  type NewsletterData,
} from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { success: false, message: 'Missing type or data' },
        { status: 400 }
      );
    }

    let result;

    switch (type) {
      case 'contact':
        // Process contact form - sends confirmation to user + notification to team
        result = await processContactSubmission(data as ContactFormData);
        break;

      case 'booking':
        // Process booking - sends confirmation to user + notification to team
        result = await processBookingSubmission(data as BookingFormData);
        break;

      case 'newsletter':
        // Process newsletter signup - sends welcome email + notification to team
        result = await processNewsletterSignup(data as NewsletterData);
        break;

      case 'contact-confirmation':
        // Send only contact confirmation (no team notification)
        const contactResult = await sendContactConfirmation(data as ContactFormData);
        result = { userEmail: contactResult };
        break;

      case 'booking-confirmation':
        // Send only booking confirmation (no team notification)
        const bookingResult = await sendBookingConfirmation(data as BookingFormData);
        result = { userEmail: bookingResult };
        break;

      case 'welcome':
        // Send only welcome email (no team notification)
        const welcomeResult = await sendWelcomeEmail(data as NewsletterData);
        result = { userEmail: welcomeResult };
        break;

      case 'lead-notification':
        // Send only team notification
        const leadType = data.leadType || 'contact';
        const notificationResult = await sendLeadNotification(data, leadType);
        result = { teamEmail: notificationResult };
        break;

      default:
        return NextResponse.json(
          { success: false, message: `Unknown email type: ${type}` },
          { status: 400 }
        );
    }

    // Check if any email was sent successfully
    const success =
      (result.userEmail?.success || result.teamEmail?.success) ?? false;

    return NextResponse.json({
      success,
      message: success ? 'Email(s) sent successfully' : 'Failed to send email(s)',
      result,
    });

  } catch (error) {
    console.error('Error in email API:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send email'
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Email API is running',
    availableTypes: [
      'contact',
      'booking',
      'newsletter',
      'contact-confirmation',
      'booking-confirmation',
      'welcome',
      'lead-notification',
    ],
  });
}
