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
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  service?: string;
  message?: string;
  company?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com';

export const ContactConfirmationEmail = ({
  name = 'John',
  email = 'john@example.com',
  service = 'Web Development',
  message = 'I would like to discuss a project for my business...',
  company = 'Tech Startup Inc.',
}: ContactConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for reaching out, {name}! We've received your message and will respond within 24 hours.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Text style={logoText}>WEB ON DEV</Text>
          <Text style={logoTagline}>DIGITAL EXCELLENCE</Text>
        </Section>

        {/* Success Badge */}
        <Section style={successSection}>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td align="center">
                <div style={successCircle}>✓</div>
              </td>
            </tr>
          </table>
          <Text style={successText}>Message Received!</Text>
        </Section>

        {/* Main Content */}
        <Section style={contentSection}>
          <Heading style={mainHeading}>Hey {name}! 👋</Heading>
          <Text style={paragraph}>
            Thank you for reaching out to <strong style={brandGreen}>Web On Dev</strong>.
            We're excited to learn about your project and explore how we can help bring your vision to life.
          </Text>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td style={responseTimeBadge}>
                ⏱ Expected response: <strong style={brandGreen}>Within 24 hours</strong>
              </td>
            </tr>
          </table>
        </Section>

        {/* Details Card */}
        <Section style={card}>
          <Section style={cardHeader}>
            <Text style={cardHeaderText}>📋 YOUR INQUIRY DETAILS</Text>
          </Section>
          <Section style={cardBody}>
            <table cellPadding="0" cellSpacing="0" border={0} width="100%">
              <tr>
                <td style={labelCell}>Full Name</td>
                <td style={valueCell}>{name}</td>
              </tr>
              <tr>
                <td colSpan={2} style={dividerCell}><div style={divider}></div></td>
              </tr>
              <tr>
                <td style={labelCell}>Email</td>
                <td style={valueCell}>{email}</td>
              </tr>
              {company && (
                <>
                  <tr>
                    <td colSpan={2} style={dividerCell}><div style={divider}></div></td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Company</td>
                    <td style={valueCell}>{company}</td>
                  </tr>
                </>
              )}
              {service && (
                <>
                  <tr>
                    <td colSpan={2} style={dividerCell}><div style={divider}></div></td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Service</td>
                    <td style={valueCell}>
                      <span style={serviceTag}>{service}</span>
                    </td>
                  </tr>
                </>
              )}
              {message && (
                <>
                  <tr>
                    <td colSpan={2} style={dividerCell}><div style={divider}></div></td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={messageCell}>
                      <Text style={messageLabelText}>Your Message</Text>
                      <Text style={messageQuote}>"{message}"</Text>
                    </td>
                  </tr>
                </>
              )}
            </table>
          </Section>
        </Section>

        {/* What's Next */}
        <Section style={stepsSection}>
          <Text style={sectionTitle}>✨ What Happens Next?</Text>

          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={stepTable}>
            <tr>
              <td style={stepNumberCell}><div style={stepNumber}>1</div></td>
              <td style={stepContentCell}>
                <Text style={stepTitle}>Expert Review</Text>
                <Text style={stepDesc}>Our team analyzes your requirements</Text>
              </td>
            </tr>
          </table>

          <div style={stepConnector}></div>

          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={stepTable}>
            <tr>
              <td style={stepNumberCell}><div style={stepNumber}>2</div></td>
              <td style={stepContentCell}>
                <Text style={stepTitle}>Personalized Response</Text>
                <Text style={stepDesc}>We craft a tailored solution proposal</Text>
              </td>
            </tr>
          </table>

          <div style={stepConnector}></div>

          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={stepTable}>
            <tr>
              <td style={stepNumberCell}><div style={stepNumber}>3</div></td>
              <td style={stepContentCell}>
                <Text style={stepTitle}>Discovery Call</Text>
                <Text style={stepDesc}>Free consultation to discuss your vision</Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* CTA */}
        <Section style={ctaSection}>
          <Text style={ctaTitle}>While You Wait...</Text>
          <Text style={ctaSubtitle}>Explore our award-winning portfolio</Text>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td>
                <Link href={`${baseUrl}/portfolio/`} style={ctaButton}>View Our Work →</Link>
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

const successSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
};

const successCircle = {
  width: '64px',
  height: '64px',
  backgroundColor: '#10b981',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '64px',
  textAlign: 'center' as const,
  display: 'inline-block',
};

const successText = {
  color: '#10b981',
  fontSize: '20px',
  fontWeight: '700',
  margin: '16px 0 0',
};

const contentSection = {
  backgroundColor: '#18181b',
  padding: '0 24px 32px',
  textAlign: 'center' as const,
};

const mainHeading = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const paragraph = {
  color: '#a1a1aa',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0 0 24px',
};

const brandGreen = {
  color: '#10b981',
};

const responseTimeBadge = {
  backgroundColor: 'rgba(16, 185, 129, 0.1)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  borderRadius: '8px',
  padding: '12px 20px',
  color: '#e4e4e7',
  fontSize: '14px',
};

const card = {
  backgroundColor: '#18181b',
  margin: '0',
  borderTop: '1px solid #27272a',
};

const cardHeader = {
  backgroundColor: '#10b981',
  padding: '14px 24px',
};

const cardHeaderText = {
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0',
};

const cardBody = {
  padding: '24px',
};

const labelCell = {
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  padding: '12px 0',
  width: '35%',
  verticalAlign: 'top' as const,
};

const valueCell = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '500',
  padding: '12px 0',
  verticalAlign: 'top' as const,
};

const dividerCell = {
  padding: '0',
};

const divider = {
  borderTop: '1px solid #27272a',
  margin: '0',
};

const serviceTag = {
  backgroundColor: 'rgba(16, 185, 129, 0.15)',
  color: '#10b981',
  fontSize: '12px',
  fontWeight: '600',
  padding: '6px 12px',
  borderRadius: '16px',
};

const messageCell = {
  padding: '12px 0',
};

const messageLabelText = {
  color: '#71717a',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 8px',
};

const messageQuote = {
  color: '#d4d4d8',
  fontSize: '14px',
  fontStyle: 'italic',
  lineHeight: '22px',
  margin: '0',
  paddingLeft: '12px',
  borderLeft: '3px solid #10b981',
};

const stepsSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  borderTop: '1px solid #27272a',
};

const sectionTitle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 24px',
};

const stepTable = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  width: '100%',
};

const stepNumberCell = {
  width: '56px',
  padding: '16px',
  verticalAlign: 'middle' as const,
};

const stepNumber = {
  width: '32px',
  height: '32px',
  backgroundColor: '#10b981',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '32px',
  textAlign: 'center' as const,
};

const stepContentCell = {
  padding: '16px 16px 16px 0',
  verticalAlign: 'middle' as const,
};

const stepTitle = {
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0 0 2px',
};

const stepDesc = {
  color: '#71717a',
  fontSize: '13px',
  margin: '0',
};

const stepConnector = {
  width: '2px',
  height: '16px',
  backgroundColor: '#27272a',
  margin: '0 auto',
};

const ctaSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const ctaTitle = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const ctaSubtitle = {
  color: '#71717a',
  fontSize: '14px',
  margin: '0 0 20px',
};

const ctaButton = {
  backgroundColor: '#10b981',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '14px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
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

export default ContactConfirmationEmail;
