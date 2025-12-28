import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface BookingConfirmationEmailProps {
  name: string;
  email: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  timezone?: string;
  notes?: string;
  bookingId?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com';

export const BookingConfirmationEmail = ({
  name = 'John',
  email = 'john@example.com',
  phone = '+1-555-123-4567',
  service = 'Free Consultation',
  date = 'Monday, December 30, 2024',
  time = '10:00 AM',
  timezone = 'PST',
  notes = 'I want to discuss building a SaaS platform for my startup.',
  bookingId = 'WOD-2024-X7K9M2',
}: BookingConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your consultation is confirmed for {date} at {time}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Text style={logoText}>WEB ON DEV</Text>
          <Text style={logoTagline}>DIGITAL EXCELLENCE</Text>
        </Section>

        {/* Confirmation Badge */}
        <Section style={badgeSection}>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td align="center">
                <div style={badgeCircle}>📅</div>
              </td>
            </tr>
          </table>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td>
                <div style={confirmedBadge}>CONFIRMED</div>
              </td>
            </tr>
          </table>
        </Section>

        {/* Main Heading */}
        <Section style={headingSection}>
          <Heading style={mainHeading}>You're All Set, {name}! 🎉</Heading>
          <Text style={subHeading}>Your consultation has been successfully scheduled</Text>
        </Section>

        {/* Booking Card */}
        <Section style={bookingCard}>
          {/* Booking ID Bar */}
          <Section style={bookingIdBar}>
            <Text style={bookingIdLabel}>BOOKING REFERENCE</Text>
            <Text style={bookingIdValue}>{bookingId}</Text>
          </Section>

          {/* Date & Time */}
          <Section style={dateTimeSection}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={dateCell}>
                  <Text style={dtLabel}>DATE</Text>
                  <Text style={dateValue}>{date}</Text>
                </td>
                <td style={dividerCell}>
                  <div style={verticalDivider}></div>
                </td>
                <td style={timeCell}>
                  <Text style={dtLabel}>TIME</Text>
                  <Text style={timeValue}>{time}</Text>
                  <Text style={timezoneText}>{timezone}</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Meeting Details */}
          <Section style={detailsSection}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={iconCell}>🎯</td>
                <td style={labelCell}>Service</td>
                <td style={valueCell}>{service}</td>
              </tr>
              <tr>
                <td colSpan={3} style={dividerRowCell}><div style={rowDivider}></div></td>
              </tr>
              <tr>
                <td style={iconCell}>📧</td>
                <td style={labelCell}>Email</td>
                <td style={valueCell}>{email}</td>
              </tr>
              {phone && (
                <>
                  <tr>
                    <td colSpan={3} style={dividerRowCell}><div style={rowDivider}></div></td>
                  </tr>
                  <tr>
                    <td style={iconCell}>📱</td>
                    <td style={labelCell}>Phone</td>
                    <td style={valueCell}>{phone}</td>
                  </tr>
                </>
              )}
              {notes && (
                <>
                  <tr>
                    <td colSpan={3} style={dividerRowCell}><div style={rowDivider}></div></td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={notesCell}>
                      <Text style={notesLabel}>📝 Your Notes</Text>
                      <Text style={notesValue}>"{notes}"</Text>
                    </td>
                  </tr>
                </>
              )}
            </table>
          </Section>
        </Section>

        {/* Meeting Link Notice */}
        <Section style={noticeSection}>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%">
            <tr>
              <td align="center">
                <Text style={noticeIcon}>🎥</Text>
                <Text style={noticeTitle}>Meeting Link Coming Soon</Text>
                <Text style={noticeText}>
                  You'll receive your Google Meet or Zoom link <strong style={highlightGreen}>30 minutes before</strong> your scheduled time.
                </Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Preparation Checklist */}
        <Section style={checklistSection}>
          <Text style={sectionTitle}>📋 Prepare for Your Call</Text>
          <Section style={checklistCard}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={checkCell}>☐</td>
                <td style={checkTextCell}>Have your project requirements ready</td>
              </tr>
              <tr>
                <td style={checkCell}>☐</td>
                <td style={checkTextCell}>Prepare reference designs or examples</td>
              </tr>
              <tr>
                <td style={checkCell}>☐</td>
                <td style={checkTextCell}>Think about your budget range</td>
              </tr>
              <tr>
                <td style={checkCell}>☐</td>
                <td style={checkTextCell}>Consider your ideal timeline</td>
              </tr>
              <tr>
                <td style={checkCell}>☐</td>
                <td style={checkTextCell}>List any specific questions</td>
              </tr>
            </table>
          </Section>
        </Section>

        {/* Reschedule Section */}
        <Section style={rescheduleSection}>
          <Text style={rescheduleTitle}>Need to Reschedule?</Text>
          <Text style={rescheduleText}>No worries! Please contact us at least <strong>24 hours in advance</strong></Text>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td style={buttonCell}>
                <Link href="mailto:webondev786@gmail.com" style={primaryButton}>📧 Email Us</Link>
              </td>
              <td style={buttonSpacerCell}></td>
              <td style={buttonCell}>
                <Link href="https://wa.me/923106803687" style={secondaryButton}>💬 WhatsApp</Link>
              </td>
            </tr>
          </table>
        </Section>

        {/* Stats Section */}
        <Section style={statsSection}>
          <Text style={statsTitle}>WHY 500+ BUSINESSES TRUST US</Text>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={statsTable}>
            <tr>
              <td style={statCell}>
                <Text style={statNumber}>500+</Text>
                <Text style={statLabel}>Projects</Text>
              </td>
              <td style={statCell}>
                <Text style={statNumber}>98%</Text>
                <Text style={statLabel}>Satisfaction</Text>
              </td>
              <td style={statCell}>
                <Text style={statNumber}>50+</Text>
                <Text style={statLabel}>Countries</Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Quick Contact */}
        <Section style={quickContactSection}>
          <Text style={quickContactTitle}>NEED IMMEDIATE ASSISTANCE?</Text>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%">
            <tr>
              <td align="center" style={contactItemCell}>
                <Text style={contactIcon}>📧</Text>
                <Link href="mailto:webondev786@gmail.com" style={contactLink}>webondev786@gmail.com</Link>
              </td>
              <td align="center" style={contactItemCell}>
                <Text style={contactIcon}>📱</Text>
                <Link href="tel:+923106803687" style={contactLink}>+92-310-6803687</Link>
              </td>
              <td align="center" style={contactItemCell}>
                <Text style={contactIcon}>💬</Text>
                <Link href="https://wa.me/923106803687" style={contactLink}>WhatsApp</Link>
              </td>
            </tr>
          </table>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerLogo}>WEB ON DEV</Text>
          <Text style={footerTagline}>Transforming Digital Visions Into Reality</Text>
          <Text style={footerLinks}>
            <Link href="https://www.linkedin.com/company/webondev/" style={footerLink}>LinkedIn</Link>
            <span style={footerDot}> • </span>
            <Link href="https://www.instagram.com/webondev/" style={footerLink}>Instagram</Link>
            <span style={footerDot}> • </span>
            <Link href="https://x.com/webon_dev" style={footerLink}>Twitter</Link>
            <span style={footerDot}> • </span>
            <Link href="https://www.youtube.com/@webondev" style={footerLink}>YouTube</Link>
          </Text>
          <Text style={footerAddress}>G8JX+CMF, Main Gulberg, Lahore, Pakistan</Text>
          <div style={footerDivider}></div>
          <Text style={copyright}>© {new Date().getFullYear()} Web On Dev. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// ============ STYLES ============

const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '40px 20px',
};

const container = {
  margin: '0 auto',
  maxWidth: '560px',
  width: '100%',
};

const header = {
  backgroundColor: '#10b981',
  padding: '32px 24px',
  borderRadius: '16px 16px 0 0',
  textAlign: 'center' as const,
};

const logoText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '800',
  letterSpacing: '3px',
  margin: '0',
};

const logoTagline = {
  color: 'rgba(255,255,255,0.85)',
  fontSize: '10px',
  fontWeight: '600',
  letterSpacing: '3px',
  margin: '8px 0 0',
};

const badgeSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px 24px',
  textAlign: 'center' as const,
};

const badgeCircle = {
  width: '80px',
  height: '80px',
  backgroundColor: '#0f0f0f',
  border: '4px solid #10b981',
  borderRadius: '50%',
  fontSize: '36px',
  lineHeight: '72px',
  textAlign: 'center' as const,
  display: 'inline-block',
};

const confirmedBadge = {
  backgroundColor: '#10b981',
  color: '#ffffff',
  fontSize: '11px',
  fontWeight: '800',
  letterSpacing: '2px',
  padding: '8px 24px',
  borderRadius: '20px',
  marginTop: '-12px',
  display: 'inline-block',
};

const headingSection = {
  backgroundColor: '#18181b',
  padding: '0 24px 32px',
  textAlign: 'center' as const,
};

const mainHeading = {
  color: '#ffffff',
  fontSize: '26px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const subHeading = {
  color: '#71717a',
  fontSize: '15px',
  margin: '0',
};

const bookingCard = {
  backgroundColor: '#18181b',
  borderTop: '1px solid #27272a',
};

const bookingIdBar = {
  backgroundColor: '#10b981',
  padding: '16px 24px',
  textAlign: 'center' as const,
};

const bookingIdLabel = {
  color: 'rgba(255,255,255,0.8)',
  fontSize: '10px',
  fontWeight: '600',
  letterSpacing: '2px',
  margin: '0 0 4px',
};

const bookingIdValue = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '800',
  letterSpacing: '3px',
  margin: '0',
};

const dateTimeSection = {
  backgroundColor: '#0f0f0f',
  padding: '24px',
  borderBottom: '1px solid #27272a',
};

const dateCell = {
  width: '48%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
  padding: '8px',
};

const dividerCell = {
  width: '4%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
};

const verticalDivider = {
  width: '1px',
  height: '60px',
  backgroundColor: '#3f3f46',
  margin: '0 auto',
};

const timeCell = {
  width: '48%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
  padding: '8px',
};

const dtLabel = {
  color: '#10b981',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
};

const dateValue = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  lineHeight: '1.4',
};

const timeValue = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0',
};

const timezoneText = {
  color: '#71717a',
  fontSize: '12px',
  margin: '4px 0 0',
};

const detailsSection = {
  padding: '24px',
};

const iconCell = {
  width: '40px',
  fontSize: '20px',
  padding: '12px 0',
  verticalAlign: 'middle' as const,
};

const labelCell = {
  width: '80px',
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  padding: '12px 8px',
  verticalAlign: 'middle' as const,
};

const valueCell = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '500',
  padding: '12px 0',
  verticalAlign: 'middle' as const,
};

const dividerRowCell = {
  padding: '0',
};

const rowDivider = {
  borderTop: '1px solid #27272a',
  margin: '0',
};

const notesCell = {
  padding: '16px 0 8px',
};

const notesLabel = {
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 8px',
};

const notesValue = {
  color: '#d4d4d8',
  fontSize: '14px',
  fontStyle: 'italic',
  lineHeight: '22px',
  margin: '0',
  paddingLeft: '12px',
  borderLeft: '3px solid #10b981',
};

const noticeSection = {
  backgroundColor: '#172554',
  margin: '0',
  padding: '24px',
  borderTop: '1px solid #1e3a8a',
};

const noticeIcon = {
  fontSize: '32px',
  margin: '0 0 12px',
};

const noticeTitle = {
  color: '#60a5fa',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const noticeText = {
  color: '#93c5fd',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0',
};

const highlightGreen = {
  color: '#10b981',
};

const checklistSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  borderTop: '1px solid #27272a',
};

const sectionTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 20px',
};

const checklistCard = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  padding: '20px 24px',
};

const checkCell = {
  width: '32px',
  color: '#10b981',
  fontSize: '18px',
  padding: '10px 0',
  verticalAlign: 'middle' as const,
};

const checkTextCell = {
  color: '#d4d4d8',
  fontSize: '14px',
  padding: '10px 0',
  verticalAlign: 'middle' as const,
};

const rescheduleSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const rescheduleTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const rescheduleText = {
  color: '#71717a',
  fontSize: '14px',
  margin: '0 0 20px',
};

const buttonCell = {
  padding: '0',
};

const buttonSpacerCell = {
  width: '12px',
};

const primaryButton = {
  backgroundColor: '#10b981',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
};

const secondaryButton = {
  backgroundColor: '#27272a',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
};

const statsSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const statsTitle = {
  color: '#71717a',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 20px',
};

const statsTable = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
};

const statCell = {
  width: '33.33%',
  textAlign: 'center' as const,
  padding: '20px 12px',
  verticalAlign: 'top' as const,
};

const statNumber = {
  color: '#10b981',
  fontSize: '28px',
  fontWeight: '800',
  margin: '0 0 4px',
};

const statLabel = {
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '500',
  margin: '0',
};

const quickContactSection = {
  backgroundColor: '#18181b',
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const quickContactTitle = {
  color: '#71717a',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 20px',
};

const contactItemCell = {
  padding: '0 8px',
  width: '33.33%',
};

const contactIcon = {
  fontSize: '20px',
  margin: '0 0 8px',
};

const contactLink = {
  color: '#10b981',
  fontSize: '12px',
  fontWeight: '500',
  textDecoration: 'none',
  display: 'block',
};

const footer = {
  backgroundColor: '#0f0f0f',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderRadius: '0 0 16px 16px',
};

const footerLogo = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '800',
  letterSpacing: '2px',
  margin: '0',
};

const footerTagline = {
  color: '#52525b',
  fontSize: '11px',
  margin: '6px 0 16px',
};

const footerLinks = {
  margin: '0 0 12px',
  fontSize: '12px',
};

const footerLink = {
  color: '#71717a',
  textDecoration: 'none',
};

const footerDot = {
  color: '#3f3f46',
};

const footerAddress = {
  color: '#52525b',
  fontSize: '11px',
  margin: '0 0 16px',
};

const footerDivider = {
  borderTop: '1px solid #27272a',
  margin: '0 0 16px',
};

const copyright = {
  color: '#3f3f46',
  fontSize: '10px',
  margin: '0',
};

export default BookingConfirmationEmail;
