'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Mail, Lightbulb, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { useEmailVerification } from '@/hooks/use-email-verification';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  onVerificationChange?: (isValid: boolean, isVerified: boolean) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  label?: string;
  id?: string;
  name?: string;
  showIcon?: boolean;
  debounceMs?: number;
}

export function EmailInput({
  value,
  onChange,
  onVerificationChange,
  placeholder = 'your@email.com',
  required = false,
  disabled = false,
  className = '',
  labelClassName = '',
  label = 'Email',
  id = 'email',
  name = 'email',
  showIcon = true,
  debounceMs = 500,
}: EmailInputProps) {
  const {
    isVerifying,
    verificationResult,
    verifyEmail,
    clearVerification,
    applySuggestion,
  } = useEmailVerification();

  const [isFocused, setIsFocused] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);
  const [showShake, setShowShake] = useState(false);

  // Debounced verification
  useEffect(() => {
    if (!value || value.length < 5 || !hasBlurred) {
      return;
    }

    const timer = setTimeout(() => {
      verifyEmail(value);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [value, verifyEmail, debounceMs, hasBlurred]);

  // Notify parent of verification changes
  useEffect(() => {
    if (onVerificationChange && verificationResult) {
      onVerificationChange(verificationResult.isValid, verificationResult.details?.smtpValid === true);
    }
  }, [verificationResult, onVerificationChange]);

  // Shake animation on error
  useEffect(() => {
    if (verificationResult && !verificationResult.isValid && hasBlurred) {
      setShowShake(true);
      const timer = setTimeout(() => setShowShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [verificationResult, hasBlurred]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    if (verificationResult) {
      clearVerification();
    }
  }, [onChange, verificationResult, clearVerification]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setHasBlurred(true);
    if (value && value.length >= 5) {
      verifyEmail(value);
    }
  }, [value, verifyEmail]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSuggestionClick = useCallback(() => {
    const suggestion = applySuggestion();
    if (suggestion) {
      onChange(suggestion);
      // Verify the suggested email
      setTimeout(() => verifyEmail(suggestion), 100);
    }
  }, [applySuggestion, onChange, verifyEmail]);

  // Determine status based on verification result
  const getVerificationStatus = () => {
    if (isVerifying) return 'verifying';
    if (!verificationResult) return 'idle';
    if (verificationResult.isValid) {
      if (verificationResult.details?.smtpValid) return 'verified';
      return 'valid';
    }
    if (verificationResult.details?.isDisposable) return 'disposable';
    if (!verificationResult.details?.smtpValid && verificationResult.details?.mxRecordsExist) return 'not-exists';
    return 'invalid';
  };

  const status = getVerificationStatus();

  // Determine icon and colors based on state
  const getStatusIcon = () => {
    switch (status) {
      case 'verifying':
        return <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />;
      case 'verified':
        return <ShieldCheck className="w-4 h-4 text-green-400" />;
      case 'valid':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'disposable':
        return <ShieldAlert className="w-4 h-4 text-amber-400" />;
      case 'not-exists':
        return <ShieldX className="w-4 h-4 text-red-400" />;
      case 'invalid':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return null;
    }
  };

  const getBorderColor = () => {
    if (isFocused) return 'ring-2 ring-brand-500 border-transparent';
    switch (status) {
      case 'verified':
      case 'valid':
        return 'border-green-500/50 shadow-[0_0_12px_rgba(34,197,94,0.15)]';
      case 'disposable':
        return 'border-amber-500/50';
      case 'not-exists':
      case 'invalid':
        return 'border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.15)]';
      default:
        return 'border-white/[0.06]';
    }
  };

  const baseInputClasses = `
    w-full px-3 sm:px-4 py-2.5 sm:py-3
    bg-white/[0.02] border rounded-xl
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
    text-white placeholder:text-slate-400
    transition-all duration-300 text-sm sm:text-base
    ${showIcon ? 'pl-10 sm:pl-11' : ''}
    pr-10 sm:pr-11
  `;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={labelClassName || 'block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2'}
        >
          {label} {required && '*'}
        </label>
      )}

      <motion.div
        className="relative"
        animate={showShake ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {/* Email Icon */}
        {showIcon && (
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <Mail className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
              isFocused ? 'text-brand-400' :
              status === 'verified' ? 'text-green-400' :
              (status === 'invalid' || status === 'not-exists') ? 'text-red-400' :
              'text-slate-400'
            }`} />
          </div>
        )}

        <input
          type="email"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="email"
          className={`${baseInputClasses} ${getBorderColor()} ${className}`}
        />

        {/* Status Icon */}
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            {(status !== 'idle') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {getStatusIcon()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Verification Messages */}
      <AnimatePresence>
        {verificationResult && !verificationResult.isValid && hasBlurred && (
          <motion.div
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            {/* Suggestion Box */}
            {verificationResult.suggestion ? (
              <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-amber-200">
                    {verificationResult.message}
                  </p>
                  <button
                    type="button"
                    onClick={handleSuggestionClick}
                    className="mt-1.5 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                  >
                    Use {verificationResult.suggestion}
                  </button>
                </div>
              </div>
            ) : status === 'not-exists' ? (
              /* Email doesn't exist message - more prominent */
              <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <ShieldX className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-red-300">
                    Email doesn&apos;t exist
                  </p>
                  <p className="text-xs text-red-400/80 mt-0.5">
                    {verificationResult.message}
                  </p>
                </div>
              </div>
            ) : status === 'disposable' ? (
              /* Disposable email message */
              <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-amber-300">
                    Temporary email detected
                  </p>
                  <p className="text-xs text-amber-400/80 mt-0.5">
                    Please use a permanent email address
                  </p>
                </div>
              </div>
            ) : (
              /* Generic Error Message */
              <div className="flex items-center gap-2 text-red-400">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm">{verificationResult.message}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Success indicator - Verified email */}
        {status === 'verified' && hasBlurred && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2"
          >
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs font-medium text-green-400">Verified email address</span>
            </div>
          </motion.div>
        )}

        {/* Valid but not SMTP verified */}
        {status === 'valid' && hasBlurred && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 flex items-center gap-1.5 text-green-400"
          >
            <CheckCircle className="w-3 h-3" />
            <span className="text-xs">Valid email format</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EmailInput;
