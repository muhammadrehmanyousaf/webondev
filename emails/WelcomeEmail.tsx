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

interface WelcomeEmailProps {
  name: string;
  email: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com';

export const WelcomeEmail = ({
  name = 'there',
  email = 'user@example.com',
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Web On Dev, {name}! You're now part of our exclusive community.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td align="center">
                <div style={welcomeBadge}>WELCOME</div>
              </td>
            </tr>
          </table>
          <Text style={logoText}>WEB ON DEV</Text>
          <Text style={logoTagline}>DIGITAL EXCELLENCE</Text>
        </Section>

        {/* Celebration Section */}
        <Section style={celebrationSection}>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td align="center">
                <Text style={partyEmoji}>🎉</Text>
              </td>
            </tr>
          </table>
          <Heading style={mainHeading}>Hey {name}!</Heading>
          <Text style={subHeading}>You're officially part of our community</Text>
        </Section>

        {/* Welcome Message */}
        <Section style={messageSection}>
          <Text style={messageParagraph}>
            Welcome to <strong style={brandHighlight}>Web On Dev</strong> – where digital dreams become reality!
            You've just joined a community of <strong style={highlight}>500+ entrepreneurs, startups, and forward-thinking businesses</strong> who are transforming their digital presence.
          </Text>
        </Section>

        {/* What You'll Get */}
        <Section style={benefitsSection}>
          <Text style={sectionTitle}>What You'll Get</Text>

          <table cellPadding="0" cellSpacing="0" border={0} width="100%">
            <tr>
              <td style={benefitRow}>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={benefitCard}>
                  <tr>
                    <td style={benefitIconCell}>📚</td>
                    <td style={benefitContentCell}>
                      <Text style={benefitTitle}>Expert Insights</Text>
                      <Text style={benefitDesc}>Weekly tips on web dev, mobile apps & digital marketing</Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={benefitRow}>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={benefitCard}>
                  <tr>
                    <td style={benefitIconCell}>🎁</td>
                    <td style={benefitContentCell}>
                      <Text style={benefitTitle}>Exclusive Offers</Text>
                      <Text style={benefitDesc}>Early access to new services & special discounts</Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={benefitRow}>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={benefitCard}>
                  <tr>
                    <td style={benefitIconCell}>💡</td>
                    <td style={benefitContentCell}>
                      <Text style={benefitTitle}>Free Resources</Text>
                      <Text style={benefitDesc}>Templates, guides & tools to grow your business</Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style={benefitRow}>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={benefitCard}>
                  <tr>
                    <td style={benefitIconCell}>🚀</td>
                    <td style={benefitContentCell}>
                      <Text style={benefitTitle}>Success Stories</Text>
                      <Text style={benefitDesc}>Case studies & inspiration from our clients</Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </Section>

        {/* Stats Section */}
        <Section style={statsSection}>
          <Text style={statsSectionTitle}>WHY BUSINESSES TRUST US</Text>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={statsCard}>
            <tr>
              <td style={statCell}>
                <Text style={statNumber}>500+</Text>
                <Text style={statLabel}>Projects</Text>
              </td>
              <td style={statDividerCell}><div style={statDivider}></div></td>
              <td style={statCell}>
                <Text style={statNumber}>98%</Text>
                <Text style={statLabel}>Satisfaction</Text>
              </td>
              <td style={statDividerCell}><div style={statDivider}></div></td>
              <td style={statCell}>
                <Text style={statNumber}>50+</Text>
                <Text style={statLabel}>Countries</Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Services Preview */}
        <Section style={servicesSection}>
          <Text style={sectionTitle}>🛠 What We Do Best</Text>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%">
            <tr>
              <td style={serviceCell}>
                <div style={serviceBox}>
                  <Text style={serviceIcon}>🌐</Text>
                  <Text style={serviceTitle}>Web Development</Text>
                  <Text style={serviceDesc}>Next.js, React & Custom</Text>
                </div>
              </td>
              <td style={serviceSpacer}></td>
              <td style={serviceCell}>
                <div style={serviceBox}>
                  <Text style={serviceIcon}>📱</Text>
                  <Text style={serviceTitle}>Mobile Apps</Text>
                  <Text style={serviceDesc}>iOS, Android & Cross</Text>
                </div>
              </td>
            </tr>
            <tr><td colSpan={3} style={{ height: '12px' }}></td></tr>
            <tr>
              <td style={serviceCell}>
                <div style={serviceBox}>
                  <Text style={serviceIcon}>🎨</Text>
                  <Text style={serviceTitle}>UI/UX Design</Text>
                  <Text style={serviceDesc}>User-Centric Design</Text>
                </div>
              </td>
              <td style={serviceSpacer}></td>
              <td style={serviceCell}>
                <div style={serviceBox}>
                  <Text style={serviceIcon}>📈</Text>
                  <Text style={serviceTitle}>Marketing</Text>
                  <Text style={serviceDesc}>SEO, PPC & Social</Text>
                </div>
              </td>
            </tr>
          </table>
        </Section>

        {/* CTA Section */}
        <Section style={ctaSection}>
          <Text style={ctaEmoji}>💬</Text>
          <Text style={ctaTitle}>Ready to Start Your Project?</Text>
          <Text style={ctaSubtitle}>Schedule a free consultation and let's discuss how we can bring your vision to life</Text>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td>
                <Link href={`${baseUrl}/contact/`} style={ctaButton}>Book Free Consultation →</Link>
              </td>
            </tr>
          </table>
          <Text style={ctaNote}>No commitment • 30-60 min call • Expert advice</Text>
        </Section>

        {/* Quick Links */}
        <Section style={quickLinksSection}>
          <Text style={quickLinksTitle}>EXPLORE MORE</Text>
          <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={quickLinksCard}>
            <tr>
              <td style={quickLinkCell}>
                <Link href={`${baseUrl}/services/`} style={quickLink}>Our Services</Link>
              </td>
              <td style={quickLinkCell}>
                <Link href={`${baseUrl}/portfolio/`} style={quickLink}>Portfolio</Link>
              </td>
              <td style={quickLinkCell}>
                <Link href={`${baseUrl}/blog/`} style={quickLink}>Blog</Link>
              </td>
              <td style={quickLinkCell}>
                <Link href={`${baseUrl}/about/`} style={quickLink}>About Us</Link>
              </td>
            </tr>
          </table>
        </Section>

        {/* Social Section */}
        <Section style={socialSection}>
          <Text style={socialTitle}>Let's Connect</Text>
          <Text style={socialSubtitle}>Follow us for daily tips, behind-the-scenes & more</Text>
          <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: '0 auto' }}>
            <tr>
              <td style={socialCell}>
                <Link href="https://www.linkedin.com/company/webondev/" style={socialBox}>in</Link>
              </td>
              <td style={socialCell}>
                <Link href="https://www.instagram.com/webondev/" style={socialBox}>📷</Link>
              </td>
              <td style={socialCell}>
                <Link href="https://x.com/webon_dev" style={socialBox}>𝕏</Link>
              </td>
              <td style={socialCell}>
                <Link href="https://www.youtube.com/@webondev" style={socialBox}>▶</Link>
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
          <Text style={footerAddress}>G8JX+CMF, Main Gulberg, Lahore, Pakistan</Text>
          <div style={footerDivider}></div>
          <Text style={copyright}>© {new Date().getFullYear()} Web On Dev. All rights reserved.</Text>
          <Text style={unsubscribe}>
            You received this email because you signed up at webondev.com
          </Text>
          <Link href={`${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`} style={unsubscribeLink}>Unsubscribe</Link>
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

const welcomeBadge = {
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: '#ffffff',
  fontSize: '10px',
  fontWeight: '800',
  letterSpacing: '2px',
  padding: '6px 16px',
  borderRadius: '16px',
  display: 'inline-block',
  marginBottom: '12px',
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

const celebrationSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
};

const partyEmoji = {
  fontSize: '48px',
  margin: '0 0 16px',
};

const mainHeading = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const subHeading = {
  color: '#71717a',
  fontSize: '15px',
  margin: '0',
};

const messageSection = {
  backgroundColor: '#18181b',
  padding: '0 24px 32px',
  textAlign: 'center' as const,
};

const messageParagraph = {
  color: '#a1a1aa',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '0',
};

const brandHighlight = {
  color: '#10b981',
};

const highlight = {
  color: '#ffffff',
};

const benefitsSection = {
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

const benefitRow = {
  paddingBottom: '12px',
};

const benefitCard = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
};

const benefitIconCell = {
  width: '56px',
  fontSize: '24px',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
  padding: '16px',
};

const benefitContentCell = {
  verticalAlign: 'middle' as const,
  padding: '16px 16px 16px 0',
};

const benefitTitle = {
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const benefitDesc = {
  color: '#71717a',
  fontSize: '13px',
  margin: '0',
};

const statsSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const statsSectionTitle = {
  color: '#71717a',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.5px',
  margin: '0 0 20px',
};

const statsCard = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
};

const statCell = {
  width: '30%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
  padding: '20px 8px',
};

const statDividerCell = {
  width: '5%',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
};

const statDivider = {
  width: '1px',
  height: '40px',
  backgroundColor: '#27272a',
  margin: '0 auto',
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

const servicesSection = {
  backgroundColor: '#18181b',
  padding: '32px 24px',
  borderTop: '1px solid #27272a',
};

const serviceCell = {
  width: '48%',
  verticalAlign: 'top' as const,
};

const serviceSpacer = {
  width: '4%',
};

const serviceBox = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  padding: '20px 12px',
  textAlign: 'center' as const,
};

const serviceIcon = {
  fontSize: '28px',
  margin: '0 0 12px',
};

const serviceTitle = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const serviceDesc = {
  color: '#71717a',
  fontSize: '11px',
  margin: '0',
};

const ctaSection = {
  backgroundColor: '#064e3b',
  padding: '32px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #10b981',
};

const ctaEmoji = {
  fontSize: '36px',
  margin: '0 0 16px',
};

const ctaTitle = {
  color: '#ffffff',
  fontSize: '22px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const ctaSubtitle = {
  color: '#a7f3d0',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 24px',
};

const ctaButton = {
  backgroundColor: '#ffffff',
  color: '#065f46',
  fontSize: '14px',
  fontWeight: '700',
  padding: '14px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
};

const ctaNote = {
  color: '#6ee7b7',
  fontSize: '11px',
  margin: '16px 0 0',
};

const quickLinksSection = {
  backgroundColor: '#18181b',
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const quickLinksTitle = {
  color: '#52525b',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '2px',
  margin: '0 0 16px',
};

const quickLinksCard = {
  backgroundColor: '#0f0f0f',
  borderRadius: '12px',
  padding: '16px',
};

const quickLinkCell = {
  width: '25%',
  textAlign: 'center' as const,
};

const quickLink = {
  color: '#10b981',
  fontSize: '12px',
  fontWeight: '600',
  textDecoration: 'none',
};

const socialSection = {
  backgroundColor: '#18181b',
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #27272a',
};

const socialTitle = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const socialSubtitle = {
  color: '#71717a',
  fontSize: '12px',
  margin: '0 0 16px',
};

const socialCell = {
  padding: '0 8px',
};

const socialBox = {
  backgroundColor: '#0f0f0f',
  color: '#10b981',
  fontSize: '16px',
  fontWeight: '700',
  padding: '12px 16px',
  borderRadius: '10px',
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
  margin: '6px 0 12px',
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
  margin: '0 0 8px',
};

const unsubscribe = {
  color: '#3f3f46',
  fontSize: '10px',
  margin: '0 0 8px',
};

const unsubscribeLink = {
  color: '#52525b',
  fontSize: '10px',
  textDecoration: 'underline',
};

export default WelcomeEmail;
