'use client';

import { useState, useCallback, useRef } from 'react';

interface VerificationDetails {
  formatValid: boolean;
  domainExists: boolean;
  mxRecordsExist: boolean;
  isDisposable: boolean;
  hasSuggestion: boolean;
  smtpValid?: boolean;
  deliverability?: string;
  qualityScore?: number;
}

interface VerificationResult {
  isValid: boolean;
  message: string;
  suggestion?: string;
  details: VerificationDetails;
}

interface UseEmailVerificationReturn {
  isVerifying: boolean;
  verificationResult: VerificationResult | null;
  verifyEmail: (email: string) => Promise<VerificationResult>;
  clearVerification: () => void;
  applySuggestion: () => string | null;
}

// Simple client-side email format validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function useEmailVerification(): UseEmailVerificationReturn {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const lastVerifiedEmail = useRef<string>('');

  const verifyEmail = useCallback(async (email: string): Promise<VerificationResult> => {
    const trimmedEmail = email.trim().toLowerCase();

    // Quick client-side format check first
    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      const result: VerificationResult = {
        isValid: false,
        message: 'Please enter a valid email address',
        details: {
          formatValid: false,
          domainExists: false,
          mxRecordsExist: false,
          isDisposable: false,
          hasSuggestion: false,
        }
      };
      setVerificationResult(result);
      return result;
    }

    // Skip if same email was just verified
    if (trimmedEmail === lastVerifiedEmail.current && verificationResult) {
      return verificationResult;
    }

    // Cancel any pending verification
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setIsVerifying(true);

    try {
      const response = await fetch('/api/verify-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
        signal: abortControllerRef.current.signal,
      });

      const result: VerificationResult = await response.json();
      lastVerifiedEmail.current = trimmedEmail;
      setVerificationResult(result);
      return result;
    } catch (error) {
      // If aborted, don't update state
      if (error instanceof Error && error.name === 'AbortError') {
        return verificationResult || {
          isValid: false,
          message: 'Verification cancelled',
          details: {
            formatValid: true,
            domainExists: false,
            mxRecordsExist: false,
            isDisposable: false,
            hasSuggestion: false,
          }
        };
      }

      // On network error, allow through (fail open)
      const fallbackResult: VerificationResult = {
        isValid: true,
        message: 'Verification skipped due to network error',
        details: {
          formatValid: true,
          domainExists: true,
          mxRecordsExist: true,
          isDisposable: false,
          hasSuggestion: false,
        }
      };
      setVerificationResult(fallbackResult);
      return fallbackResult;
    } finally {
      setIsVerifying(false);
    }
  }, [verificationResult]);

  const clearVerification = useCallback(() => {
    setVerificationResult(null);
    lastVerifiedEmail.current = '';
  }, []);

  const applySuggestion = useCallback((): string | null => {
    if (verificationResult?.suggestion) {
      clearVerification();
      return verificationResult.suggestion;
    }
    return null;
  }, [verificationResult, clearVerification]);

  return {
    isVerifying,
    verificationResult,
    verifyEmail,
    clearVerification,
    applySuggestion,
  };
}

export default useEmailVerification;
