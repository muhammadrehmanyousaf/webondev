import { Resend } from 'resend';
import ContactConfirmationEmail from '@/emails/ContactConfirmation';
import BookingConfirmationEmail from '@/emails/BookingConfirmation';
import LeadNotificationEmail from '@/emails/LeadNotification';
import WelcomeEmail from '@/emails/WelcomeEmail';
import { createElement } from 'react';

// Lazy-initialize Resend (only when actually used, not at build time)
let resend: Resend | null = null;
function getResend(): Resend {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

// Email configuration
const EMAIL_CONFIG = {
  from: 'Web On Dev <social@webondev.com>',
  replyTo: 'webondev786@gmail.com',
  teamEmail: 'webondev786@gmail.com',
};

// Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  source?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  timezone?: string;
  notes?: string;
}

export interface NewsletterData {
  name: string;
  email: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send contact form confirmation to user
 */
export async function sendContactConfirmation(data: ContactFormData): Promise<EmailResult> {
  try {
    const { data: result, error } = await getResend().emails.send({
      from: EMAIL_CONFIG.from,
      to: data.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: `Thanks for contacting Web On Dev, ${data.name}!`,
      react: createElement(ContactConfirmationEmail, {
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
        company: data.company,
      }),
    });

    if (error) {
      console.error('Error sending contact confirmation:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: result?.id };
  } catch (err) {
    console.error('Failed to send contact confirmation:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Send booking confirmation to user
 */
export async function sendBookingConfirmation(data: BookingFormData): Promise<EmailResult> {
  try {
    const bookingId = `WOD-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    const { data: result, error } = await getResend().emails.send({
      from: EMAIL_CONFIG.from,
      to: data.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: `Your consultation is confirmed for ${data.date}!`,
      react: createElement(BookingConfirmationEmail, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        date: data.date,
        time: data.time,
        timezone: data.timezone || 'PST',
        notes: data.notes,
        bookingId,
      }),
    });

    if (error) {
      console.error('Error sending booking confirmation:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: result?.id };
  } catch (err) {
    console.error('Failed to send booking confirmation:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Send lead notification to team
 */
export async function sendLeadNotification(
  data: ContactFormData | BookingFormData,
  leadType: 'contact' | 'booking' | 'quote' | 'newsletter' = 'contact'
): Promise<EmailResult> {
  try {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    const { data: result, error } = await getResend().emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.teamEmail,
      subject: `🔔 New ${leadType.charAt(0).toUpperCase() + leadType.slice(1)} Lead: ${data.name}`,
      react: createElement(LeadNotificationEmail, {
        leadType,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: 'company' in data ? data.company : undefined,
        service: data.service,
        budget: 'budget' in data ? data.budget : undefined,
        timeline: 'timeline' in data ? data.timeline : undefined,
        message: 'message' in data ? data.message : ('notes' in data ? data.notes : undefined),
        source: 'source' in data ? data.source : (leadType === 'booking' ? 'Booking Page' : 'Website'),
        date: dateStr,
        time: timeStr,
      }),
    });

    if (error) {
      console.error('Error sending lead notification:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: result?.id };
  } catch (err) {
    console.error('Failed to send lead notification:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Send welcome email to new subscriber
 */
export async function sendWelcomeEmail(data: NewsletterData): Promise<EmailResult> {
  try {
    const { data: result, error } = await getResend().emails.send({
      from: EMAIL_CONFIG.from,
      to: data.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: `Welcome to Web On Dev, ${data.name || 'there'}! 🎉`,
      react: createElement(WelcomeEmail, {
        name: data.name || 'there',
        email: data.email,
      }),
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: result?.id };
  } catch (err) {
    console.error('Failed to send welcome email:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

/**
 * Process contact form submission - sends both confirmation and notification
 */
export async function processContactSubmission(data: ContactFormData): Promise<{
  userEmail: EmailResult;
  teamEmail: EmailResult;
}> {
  // Send both emails in parallel
  const [userResult, teamResult] = await Promise.all([
    sendContactConfirmation(data),
    sendLeadNotification(data, 'contact'),
  ]);

  return {
    userEmail: userResult,
    teamEmail: teamResult,
  };
}

/**
 * Process booking submission - sends both confirmation and notification
 */
export async function processBookingSubmission(data: BookingFormData): Promise<{
  userEmail: EmailResult;
  teamEmail: EmailResult;
}> {
  // Send both emails in parallel
  const [userResult, teamResult] = await Promise.all([
    sendBookingConfirmation(data),
    sendLeadNotification(data, 'booking'),
  ]);

  return {
    userEmail: userResult,
    teamEmail: teamResult,
  };
}

/**
 * Process newsletter signup - sends welcome email and team notification
 */
export async function processNewsletterSignup(data: NewsletterData): Promise<{
  userEmail: EmailResult;
  teamEmail: EmailResult;
}> {
  // Send both emails in parallel
  const [userResult, teamResult] = await Promise.all([
    sendWelcomeEmail(data),
    sendLeadNotification({ ...data, message: 'Newsletter signup', service: 'Newsletter' } as ContactFormData, 'newsletter'),
  ]);

  return {
    userEmail: userResult,
    teamEmail: teamResult,
  };
}

export default {
  sendContactConfirmation,
  sendBookingConfirmation,
  sendLeadNotification,
  sendWelcomeEmail,
  processContactSubmission,
  processBookingSubmission,
  processNewsletterSignup,
};
