import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface LeadNotificationEmailProps {
  leadType: 'contact' | 'booking' | 'quote' | 'newsletter';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source?: string;
  date?: string;
  time?: string;
  country?: string;
}

const getLeadConfig = (type: string) => {
  const configs: Record<string, { emoji: string; label: string; color: string; bgColor: string; priority: string; priorityColor: string }> = {
    contact: { emoji: '📧', label: 'Contact Form', color: '#3b82f6', bgColor: '#1e3a8a', priority: 'NORMAL', priorityColor: '#3b82f6' },
    booking: { emoji: '📅', label: 'Consultation Booking', color: '#10b981', bgColor: '#064e3b', priority: 'HIGH', priorityColor: '#f59e0b' },
    quote: { emoji: '💰', label: 'Quote Request', color: '#f59e0b', bgColor: '#78350f', priority: 'HIGH', priorityColor: '#f59e0b' },
    newsletter: { emoji: '📰', label: 'Newsletter Signup', color: '#8b5cf6', bgColor: '#4c1d95', priority: 'LOW', priorityColor: '#6b7280' },
  };
  return configs[type] || configs.contact;
};

export const LeadNotificationEmail = ({
  leadType = 'contact',
  name = 'Sarah Johnson',
  email = 'sarah@techstartup.com',
  phone = '+1-555-987-6543',
  company = 'TechStartup Inc.',
  service = 'Web Development',
  budget = '$25,000 - $50,000',
  timeline = '2-3 months',
  message = 'We need a complete redesign of our SaaS platform with modern UI/UX and improved performance. Looking for a long-term development partner.',
  source = 'Contact Page',
  date = 'December 28, 2024',
  time = '3:45 PM',
  country = 'United States',
}: LeadNotificationEmailProps) => {
  const config = getLeadConfig(leadType);

  return (
    <Html>
      <Head />
      <Preview>🔔 NEW LEAD: {name} - {service || 'General Inquiry'} | {config.priority} Priority</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Alert Header */}
          <Section style={{ ...alertHeader, backgroundColor: config.bgColor, borderBottom: `3px solid ${config.color}` }}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={alertIconCell}>🔔</td>
                <td style={alertContentCell}>
                  <Text style={alertLabel}>NEW LEAD ALERT</Text>
                  <Text style={alertType}>{config.emoji} {config.label}</Text>
                </td>
                <td style={priorityCell}>
                  <span style={{ ...priorityBadge, backgroundColor: config.priorityColor }}>{config.priority}</span>
                </td>
              </tr>
            </table>
          </Section>

          {/* Lead Score Card */}
          <Section style={scoreSection}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={scoreCell}>
                  <Text style={scoreLabel}>LEAD TYPE</Text>
                  <Text style={{ ...scoreValue, color: config.color }}>{leadType.toUpperCase()}</Text>
                </td>
                <td style={scoreDividerCell}><div style={scoreDividerLine}></div></td>
                <td style={scoreCell}>
                  <Text style={scoreLabel}>SOURCE</Text>
                  <Text style={scoreValue}>{source}</Text>
                </td>
                <td style={scoreDividerCell}><div style={scoreDividerLine}></div></td>
                <td style={scoreCell}>
                  <Text style={scoreLabel}>SUBMITTED</Text>
                  <Text style={scoreValue}>{time}</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Lead Card */}
          <Section style={leadCard}>
            {/* Lead Header with Avatar */}
            <Section style={leadHeader}>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={avatarCell}>
                    <div style={avatar}>{name.charAt(0).toUpperCase()}</div>
                  </td>
                  <td style={leadInfoCell}>
                    <Text style={leadName}>{name}</Text>
                    {company && <Text style={leadCompany}>{company}</Text>}
                    {country && <Text style={leadLocation}>📍 {country}</Text>}
                  </td>
                </tr>
              </table>
            </Section>

            {/* Contact Info */}
            <Section style={contactSection}>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={contactBoxCell}>
                    <div style={contactBox}>
                      <Text style={contactIcon}>📧</Text>
                      <Text style={contactLabel}>EMAIL</Text>
                      <Link href={`mailto:${email}`} style={contactValue}>{email}</Link>
                    </div>
                  </td>
                  {phone && (
                    <td style={contactBoxCell}>
                      <div style={contactBox}>
                        <Text style={contactIcon}>📱</Text>
                        <Text style={contactLabel}>PHONE</Text>
                        <Link href={`tel:${phone}`} style={contactValue}>{phone}</Link>
                      </div>
                    </td>
                  )}
                </tr>
              </table>
            </Section>

            {/* Project Details */}
            {(service || budget || timeline) && (
              <Section style={projectSection}>
                <Text style={sectionHeader}>💼 PROJECT DETAILS</Text>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                  {service && (
                    <tr>
                      <td style={projectLabelCell}>Service Interest</td>
                      <td style={projectValueCell}>
                        <span style={projectTag}>{service}</span>
                      </td>
                    </tr>
                  )}
                  {budget && (
                    <tr>
                      <td style={projectLabelCell}>Budget Range</td>
                      <td style={projectValueCell}>
                        <span style={budgetTag}>{budget}</span>
                      </td>
                    </tr>
                  )}
                  {timeline && (
                    <tr>
                      <td style={projectLabelCell}>Timeline</td>
                      <td style={projectValueCell}>
                        <Text style={timelineValue}>{timeline}</Text>
                      </td>
                    </tr>
                  )}
                </table>
              </Section>
            )}

            {/* Message */}
            {message && (
              <Section style={messageSection}>
                <Text style={sectionHeader}>💬 MESSAGE</Text>
                <div style={messageBox}>
                  <Text style={messageText}>"{message}"</Text>
                </div>
              </Section>
            )}
          </Section>

          {/* Quick Actions */}
          <Section style={actionsSection}>
            <Text style={actionsTitle}>⚡ QUICK ACTIONS</Text>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={actionCell}>
                  <Link href={`mailto:${email}?subject=Re: Your inquiry to Web On Dev`} style={actionPrimary}>📧 Reply via Email</Link>
                </td>
                <td style={actionSpacerCell}></td>
                <td style={actionCell}>
                  <Link href={`https://wa.me/${phone?.replace(/\D/g, '')}`} style={actionSecondary}>💬 WhatsApp</Link>
                </td>
                <td style={actionSpacerCell}></td>
                <td style={actionCell}>
                  <Link href={`tel:${phone}`} style={actionSecondary}>📞 Call Now</Link>
                </td>
              </tr>
            </table>
          </Section>

          {/* Response Reminder */}
          <Section style={reminderSection}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={reminderIconCell}>⏰</td>
                <td style={reminderContentCell}>
                  <Text style={reminderTitle}>Response Time Matters!</Text>
                  <Text style={reminderText}>Leads contacted within <strong style={highlight}>5 minutes</strong> are <strong style={highlight}>21x more likely</strong> to convert. Act fast!</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Metadata */}
          <Section style={metadataSection}>
            <Text style={metadataTitle}>📊 SUBMISSION METADATA</Text>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={metadataCell}>
                  <Text style={metadataLabel}>Date</Text>
                  <Text style={metadataValue}>{date}</Text>
                </td>
                <td style={metadataCell}>
                  <Text style={metadataLabel}>Time</Text>
                  <Text style={metadataValue}>{time}</Text>
                </td>
                <td style={metadataCell}>
                  <Text style={metadataLabel}>Source</Text>
                  <Text style={metadataValue}>{source}</Text>
                </td>
                <td style={metadataCell}>
                  <Text style={metadataLabel}>Priority</Text>
                  <Text style={{ ...metadataValue, color: config.priorityColor }}>{config.priority}</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerLogo}>WEB ON DEV</Text>
            <Text style={footerText}>Internal Lead Notification System</Text>
            <div style={footerDivider}></div>
            <Text style={footerCopyright}>This is an automated notification. Please do not reply to this email.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

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

const alertHeader = {
  padding: '20px 24px',
  borderRadius: '16px 16px 0 0',
};

const alertIconCell = {
  width: '48px',
  fontSize: '28px',
  verticalAlign: 'middle' as const,
};

const alertContentCell = {
  verticalAlign: 'middle' as const,
  paddingLeft: '12px',
};

const alertLabel = {
  color: 'rgba(255,255,255,0.6)',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '2px',
  margin: '0 0 4px',
};

const alertType = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0',
};

const priorityCell = {
  width: '80px',
  textAlign: 'right' as const,
  verticalAlign: 'middle' as const,
};

const priorityBadge = {
  color: '#000000',
  fontSize: '10px',
  fontWeight: '800',
  letterSpacing: '1px',
  padding: '6px 12px',
  borderRadius: '20px',
};

const scoreSection = {
  backgroundColor: '#0f0f0f',
  padding: '20px 24px',
  borderBottom: '1px solid #27272a',
};

const scoreCell = {
  width: '30%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
};

const scoreDividerCell = {
  width: '5%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
};

const scoreDividerLine = {
  width: '1px',
  height: '32px',
  backgroundColor: '#27272a',
  margin: '0 auto',
};

const scoreLabel = {
  color: '#52525b',
  fontSize: '9px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 4px',
};

const scoreValue = {
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: '700',
  margin: '0',
};

const leadCard = {
  backgroundColor: '#18181b',
};

const leadHeader = {
  padding: '24px',
  borderBottom: '1px solid #27272a',
};

const avatarCell = {
  width: '64px',
  verticalAlign: 'middle' as const,
};

const avatar = {
  width: '56px',
  height: '56px',
  backgroundColor: '#10b981',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '56px',
  textAlign: 'center' as const,
};

const leadInfoCell = {
  verticalAlign: 'middle' as const,
  paddingLeft: '16px',
};

const leadName = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const leadCompany = {
  color: '#a1a1aa',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0 0 4px',
};

const leadLocation = {
  color: '#71717a',
  fontSize: '13px',
  margin: '0',
};

const contactSection = {
  padding: '24px',
  borderBottom: '1px solid #27272a',
};

const contactBoxCell = {
  width: '50%',
  padding: '0 6px',
  verticalAlign: 'top' as const,
};

const contactBox = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  padding: '16px',
  textAlign: 'center' as const,
};

const contactIcon = {
  fontSize: '24px',
  margin: '0 0 8px',
};

const contactLabel = {
  color: '#52525b',
  fontSize: '9px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 6px',
};

const contactValue = {
  color: '#10b981',
  fontSize: '13px',
  fontWeight: '600',
  textDecoration: 'none',
  wordBreak: 'break-all' as const,
};

const projectSection = {
  padding: '24px',
  borderBottom: '1px solid #27272a',
};

const sectionHeader = {
  color: '#71717a',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 16px',
};

const projectLabelCell = {
  width: '40%',
  color: '#52525b',
  fontSize: '12px',
  fontWeight: '500',
  padding: '10px 0',
  verticalAlign: 'middle' as const,
};

const projectValueCell = {
  width: '60%',
  padding: '10px 0',
  verticalAlign: 'middle' as const,
};

const projectTag = {
  backgroundColor: '#1e3a8a',
  color: '#60a5fa',
  fontSize: '13px',
  fontWeight: '600',
  padding: '8px 14px',
  borderRadius: '8px',
};

const budgetTag = {
  backgroundColor: '#064e3b',
  color: '#34d399',
  fontSize: '16px',
  fontWeight: '700',
  padding: '8px 14px',
  borderRadius: '8px',
};

const timelineValue = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const messageSection = {
  padding: '24px',
  borderBottom: '1px solid #27272a',
};

const messageBox = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  padding: '20px',
  borderLeft: '4px solid #10b981',
};

const messageText = {
  color: '#d4d4d8',
  fontSize: '14px',
  fontStyle: 'italic',
  lineHeight: '24px',
  margin: '0',
};

const actionsSection = {
  backgroundColor: '#0f0f0f',
  padding: '24px',
  textAlign: 'center' as const,
};

const actionsTitle = {
  color: '#71717a',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 16px',
};

const actionCell = {
  width: '32%',
};

const actionSpacerCell = {
  width: '2%',
};

const actionPrimary = {
  backgroundColor: '#10b981',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '700',
  padding: '12px 8px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center' as const,
};

const actionSecondary = {
  backgroundColor: '#27272a',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '600',
  padding: '12px 8px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center' as const,
};

const reminderSection = {
  backgroundColor: '#422006',
  padding: '20px 24px',
  borderLeft: '4px solid #f59e0b',
};

const reminderIconCell = {
  width: '48px',
  fontSize: '28px',
  verticalAlign: 'middle' as const,
};

const reminderContentCell = {
  verticalAlign: 'middle' as const,
  paddingLeft: '12px',
};

const reminderTitle = {
  color: '#fbbf24',
  fontSize: '15px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const reminderText = {
  color: '#fcd34d',
  fontSize: '13px',
  lineHeight: '20px',
  margin: '0',
};

const highlight = {
  color: '#ffffff',
};

const metadataSection = {
  backgroundColor: '#0f0f0f',
  padding: '20px 24px',
  borderTop: '1px solid #27272a',
};

const metadataTitle = {
  color: '#52525b',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 16px',
};

const metadataCell = {
  width: '25%',
  verticalAlign: 'top' as const,
};

const metadataLabel = {
  color: '#3f3f46',
  fontSize: '10px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  margin: '0 0 4px',
};

const metadataValue = {
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '500',
  margin: '0',
};

const footer = {
  backgroundColor: '#0a0a0a',
  padding: '28px 24px',
  textAlign: 'center' as const,
  borderRadius: '0 0 16px 16px',
  borderTop: '1px solid #27272a',
};

const footerLogo = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '800',
  letterSpacing: '2px',
  margin: '0 0 4px',
};

const footerText = {
  color: '#52525b',
  fontSize: '11px',
  margin: '0 0 16px',
};

const footerDivider = {
  borderTop: '1px solid #27272a',
  margin: '0 0 16px',
};

const footerCopyright = {
  color: '#3f3f46',
  fontSize: '10px',
  margin: '0',
};

export default LeadNotificationEmail;
