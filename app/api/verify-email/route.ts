import { NextResponse } from 'next/server';

// Abstract Email Reputation API response type
interface AbstractApiResponse {
  email_address: string;
  email_deliverability: {
    status: 'deliverable' | 'undeliverable' | 'unknown' | 'risky';
    status_detail: string;
    is_format_valid: boolean;
    is_smtp_valid: boolean;
    is_mx_valid: boolean;
    mx_records: string[];
  };
  email_quality: {
    score: number;
    is_free_email: boolean;
    is_username_suspicious: boolean;
    is_disposable: boolean;
    is_catchall: boolean;
    is_subaddress: boolean;
    is_role: boolean;
    is_dmarc_enforced: boolean;
    is_spf_strict: boolean;
  };
  email_risk: {
    address_risk_status: 'low' | 'medium' | 'high';
    domain_risk_status: 'low' | 'medium' | 'high';
  };
}

interface VerificationResult {
  isValid: boolean;
  message: string;
  suggestion?: string;
  details: {
    formatValid: boolean;
    domainExists: boolean;
    mxRecordsExist: boolean;
    isDisposable: boolean;
    hasSuggestion: boolean;
    smtpValid?: boolean;
    deliverability?: string;
    qualityScore?: number;
  };
}

// Email format validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validate email format
function validateFormat(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

// Abstract API verification
async function verifyWithAbstractApi(email: string): Promise<AbstractApiResponse | null> {
  const apiKey = process.env.ABSTRACT_API_KEY;

  if (!apiKey) {
    console.error('ABSTRACT_API_KEY not configured');
    return null;
  }

  try {
    const response = await fetch(
      `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }
    );

    if (!response.ok) {
      console.error('Abstract API error:', response.status, response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Abstract API fetch error:', error);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        {
          isValid: false,
          message: 'Email is required',
          details: {
            formatValid: false,
            domainExists: false,
            mxRecordsExist: false,
            isDisposable: false,
            hasSuggestion: false,
          }
        } as VerificationResult,
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    console.log('[EMAIL VERIFY] Checking:', trimmedEmail);

    // Step 1: Quick client-side format validation (free, no API call)
    if (!validateFormat(trimmedEmail)) {
      return NextResponse.json({
        isValid: false,
        message: 'Please enter a valid email address format',
        details: {
          formatValid: false,
          domainExists: false,
          mxRecordsExist: false,
          isDisposable: false,
          hasSuggestion: false,
        }
      } as VerificationResult);
    }

    // Step 2: Verify with Abstract API (real mailbox verification)
    const apiResult = await verifyWithAbstractApi(trimmedEmail);

    // If API fails, allow through (fail open) to not lose leads
    if (!apiResult) {
      console.log('[EMAIL VERIFY] API call failed - falling through (fail open)');
      return NextResponse.json({
        isValid: true,
        message: 'Verification skipped - please verify your email',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: true,
          isDisposable: false,
          hasSuggestion: false,
        }
      } as VerificationResult);
    }

    const { email_deliverability, email_quality, email_risk } = apiResult;
    console.log('[EMAIL VERIFY] API Result:', JSON.stringify({
      status: email_deliverability.status,
      smtp_valid: email_deliverability.is_smtp_valid,
      mx_valid: email_deliverability.is_mx_valid,
      disposable: email_quality.is_disposable,
      risk: email_risk.address_risk_status,
      score: email_quality.score,
    }));

    // Check for invalid format
    if (!email_deliverability.is_format_valid) {
      return NextResponse.json({
        isValid: false,
        message: 'Please enter a valid email address format',
        details: {
          formatValid: false,
          domainExists: false,
          mxRecordsExist: false,
          isDisposable: false,
          hasSuggestion: false,
        }
      } as VerificationResult);
    }

    // Check for disposable email
    if (email_quality.is_disposable) {
      return NextResponse.json({
        isValid: false,
        message: 'Please use a permanent email address, not a temporary one',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: email_deliverability.is_mx_valid,
          isDisposable: true,
          hasSuggestion: false,
          deliverability: email_deliverability.status,
        }
      } as VerificationResult);
    }

    // Check MX records
    if (!email_deliverability.is_mx_valid) {
      return NextResponse.json({
        isValid: false,
        message: 'This email domain does not appear to accept emails',
        details: {
          formatValid: true,
          domainExists: false,
          mxRecordsExist: false,
          isDisposable: false,
          hasSuggestion: false,
          deliverability: email_deliverability.status,
        }
      } as VerificationResult);
    }

    // Check SMTP validity (actual mailbox exists) - THIS IS THE KEY CHECK!
    if (!email_deliverability.is_smtp_valid) {
      return NextResponse.json({
        isValid: false,
        message: 'This email address does not exist. Please check for typos.',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: true,
          isDisposable: false,
          hasSuggestion: false,
          smtpValid: false,
          deliverability: email_deliverability.status,
          qualityScore: email_quality.score,
        }
      } as VerificationResult);
    }

    // Check deliverability status
    if (email_deliverability.status === 'undeliverable') {
      return NextResponse.json({
        isValid: false,
        message: 'This email address cannot receive emails. Please use a different one.',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: true,
          isDisposable: false,
          hasSuggestion: false,
          smtpValid: email_deliverability.is_smtp_valid,
          deliverability: 'undeliverable',
          qualityScore: email_quality.score,
        }
      } as VerificationResult);
    }

    // Check for high risk emails
    if (email_risk.address_risk_status === 'high') {
      return NextResponse.json({
        isValid: false,
        message: 'This email address appears to be invalid or risky. Please use a different one.',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: true,
          isDisposable: false,
          hasSuggestion: false,
          smtpValid: email_deliverability.is_smtp_valid,
          deliverability: email_deliverability.status,
          qualityScore: email_quality.score,
        }
      } as VerificationResult);
    }

    // All checks passed - email is valid and exists!
    return NextResponse.json({
      isValid: true,
      message: 'Email verified successfully',
      details: {
        formatValid: true,
        domainExists: true,
        mxRecordsExist: true,
        isDisposable: false,
        hasSuggestion: false,
        smtpValid: true,
        deliverability: email_deliverability.status,
        qualityScore: email_quality.score,
      }
    } as VerificationResult);

  } catch (error) {
    console.error('Email verification error:', error);
    // On error, allow the email through (fail open) to not lose leads
    return NextResponse.json({
      isValid: true,
      message: 'Verification skipped',
      details: {
        formatValid: true,
        domainExists: true,
        mxRecordsExist: true,
        isDisposable: false,
        hasSuggestion: false,
      }
    } as VerificationResult);
  }
}
