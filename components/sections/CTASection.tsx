'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, MessageCircle, Calendar, Phone, Clock, User, Mail, Building,
  MessageSquare, Sparkles, Zap, CheckCircle2, Check, X, Globe, Video, PhoneCall,
  Users, Briefcase, Rocket, Star, Crown, Shield, Award, Code, Smartphone, Palette,
  TrendingUp, Cloud, Settings, ChevronRight, Play, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// =============================================================================
// WORLD CLASS CTA SECTION - Premium Booking Experience
// =============================================================================

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-400 to-teal-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Confetti Component for Success
const Confetti = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    color: ['#10B981', '#14B8A6', '#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 6)],
    x: Math.random() * 100,
    rotation: Math.random() * 360,
    size: Math.random() * 10 + 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: '-20px',
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            borderRadius: '2px',
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 0.5,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

// Magnetic Button Component
const MagneticButton = ({ children, onClick, disabled, className = '', type = 'button' }: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  }, [x, y, disabled]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
};

// Animated Input Component
const AnimatedInput = ({
  icon: Icon,
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  isValid = false,
}: {
  icon: React.ElementType;
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  isValid?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <Label htmlFor={id} className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
        {label}
        {required && <span className="text-brand-400">*</span>}
        <AnimatePresence>
          {isValid && value && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center"
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </Label>
      <div className="relative mt-1">
        <motion.div
          className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 opacity-0 blur transition-opacity duration-300 ${isFocused ? 'opacity-50' : ''}`}
        />
        <div className="relative">
          <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-brand-400' : 'text-slate-500'}`} />
          <Input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="pl-12 h-14 bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-brand-500 rounded-xl transition-all duration-300 text-base"
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
  gradient
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  gradient: string;
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`relative h-20 p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
      isSelected
        ? 'border-brand-500 bg-brand-500/10'
        : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {isSelected && (
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-2xl opacity-20 blur" />
    )}
    <div className="relative flex items-center gap-3 h-full">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-400 truncate">{description}</p>
      </div>
      {isSelected && (
        <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  </motion.button>
);

// Time Slot Component
const TimeSlot = ({ time, isSelected, onClick, isAvailable = true }: {
  time: string;
  isSelected: boolean;
  onClick: () => void;
  isAvailable?: boolean;
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    disabled={!isAvailable}
    className={`relative px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
      isSelected
        ? 'border-brand-500 bg-brand-500 text-white'
        : isAvailable
          ? 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600'
          : 'border-slate-800 bg-slate-900/50 text-slate-600 cursor-not-allowed'
    }`}
    whileHover={isAvailable ? { scale: 1.05 } : {}}
    whileTap={isAvailable ? { scale: 0.95 } : {}}
  >
    <span className="flex items-center gap-2">
      <Clock className="w-4 h-4" />
      {time}
    </span>
    {isSelected && (
      <motion.div
        layoutId="timeHighlight"
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500 to-teal-500 -z-10"
      />
    )}
  </motion.button>
);

// Meeting Type Card Component
const MeetingTypeCard = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`relative p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
      isSelected
        ? 'border-brand-500 bg-brand-500/10'
        : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
        isSelected ? 'bg-brand-500' : 'bg-slate-700'
      } transition-colors duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
      )}
    </div>
  </motion.button>
);

// Progress Indicator Component
const ProgressIndicator = ({ currentStep, totalSteps, steps }: {
  currentStep: number;
  totalSteps: number;
  steps: { title: string; icon: React.ElementType }[];
}) => (
  <div className="relative">
    {/* Progress Bar Background */}
    <div className="absolute top-6 left-0 right-0 h-1 bg-slate-700/50 rounded-full" />

    {/* Active Progress */}
    <motion.div
      className="absolute top-6 left-0 h-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-full"
      initial={{ width: '0%' }}
      animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />

    {/* Step Indicators */}
    <div className="relative flex justify-between">
      {steps.map((step, index) => {
        const isCompleted = index + 1 < currentStep;
        const isCurrent = index + 1 === currentStep;
        const Icon = step.icon;

        return (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                isCompleted
                  ? 'bg-brand-500 border-brand-500'
                  : isCurrent
                    ? 'bg-slate-800 border-brand-500'
                    : 'bg-slate-800 border-slate-600'
              }`}
              animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: isCurrent ? Infinity : 0, repeatDelay: 1 }}
            >
              {isCompleted ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <Icon className={`w-5 h-5 ${isCurrent ? 'text-brand-400' : 'text-slate-500'}`} />
              )}
            </motion.div>
            <span className={`mt-2 text-xs font-medium ${
              isCompleted || isCurrent ? 'text-brand-400' : 'text-slate-500'
            }`}>
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

// Success Screen Component
const SuccessScreen = ({ bookingData, onClose }: {
  bookingData: { name: string; email: string; preferredDate: string; preferredTime: string; service: string };
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="text-center py-8"
  >
    {/* Success Icon */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      className="relative w-32 h-32 mx-auto mb-8"
    >
      {/* Rotating Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-dashed border-brand-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Pulsing Glow */}
      <motion.div
        className="absolute inset-2 rounded-full bg-brand-500/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Main Circle */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-brand-500/50">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        >
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </motion.div>
      </div>
      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-400 rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 60],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * 60],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
        />
      ))}
    </motion.div>

    {/* Success Message */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-3xl font-bold text-white mb-3">
        Booking Confirmed!
      </h3>
      <p className="text-lg text-slate-300 mb-8">
        We&apos;ve sent a confirmation to your email
      </p>
    </motion.div>

    {/* Booking Summary Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8"
    >
      <div className="grid grid-cols-2 gap-4 text-left">
        <div>
          <p className="text-sm text-slate-500 mb-1">Name</p>
          <p className="text-white font-medium">{bookingData.name}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Email</p>
          <p className="text-white font-medium truncate">{bookingData.email}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Date</p>
          <p className="text-white font-medium">{bookingData.preferredDate}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Time</p>
          <p className="text-white font-medium">{bookingData.preferredTime}</p>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-slate-500 mb-1">Service</p>
          <p className="text-white font-medium">{bookingData.service}</p>
        </div>
      </div>
    </motion.div>

    {/* What's Next */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="bg-brand-500/10 rounded-2xl p-6 border border-brand-500/20 mb-8"
    >
      <h4 className="font-semibold text-brand-400 mb-4 flex items-center justify-center gap-2">
        <Rocket className="w-5 h-5" />
        What&apos;s Next?
      </h4>
      <ul className="space-y-3 text-left">
        {[
          'Check your email for the calendar invite',
          'Prepare any questions you have about your project',
          'We\'ll send a reminder 24 hours before the meeting',
        ].map((item, index) => (
          <li key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="flex items-center gap-3 text-slate-300"
            >
              <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-brand-400" />
              </div>
              {item}
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Close Button */}
    <MagneticButton
      onClick={onClose}
      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 text-white font-semibold text-lg shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-shadow"
    >
      <span className="flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5" />
        Done
      </span>
    </MagneticButton>
  </motion.div>
);

// Main CTA Section Component
const CTASection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const modalRef = useRef<HTMLDivElement>(null);

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    meetingType: '',
    message: ''
  });

  const handleEmailClick = () => {
    window.open('mailto:muhammadrehmanyousaf786@gmail.com?subject=Project Inquiry');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923106803687');
  };

  const handleBookingSubmit = async () => {
    setIsSubmitting(true);

    try {
      let response;
      try {
        response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...bookingData,
            formType: 'booking'
          }),
        });
      } catch {
        response = await fetch('https://formspree.io/f/xpwzgkqr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...bookingData,
            _replyto: bookingData.email,
            _subject: `Meeting Request from ${bookingData.name}`,
          }),
        });
      }

      if (response.ok) {
        setShowConfetti(true);
        setIsSuccess(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setCurrentStep(1);
    setIsSuccess(false);
    setBookingData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      timezone: '',
      meetingType: '',
      message: ''
    });
  };

  const services = [
    { id: 'web', title: 'Web Development', description: 'Custom websites & web apps', icon: Code, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'mobile', title: 'Mobile Apps', description: 'iOS & Android development', icon: Smartphone, gradient: 'from-purple-500 to-pink-500' },
    { id: 'software', title: 'Software Development', description: 'Enterprise solutions', icon: Settings, gradient: 'from-orange-500 to-red-500' },
    { id: 'uiux', title: 'UI/UX Design', description: 'Beautiful interfaces', icon: Palette, gradient: 'from-pink-500 to-rose-500' },
    { id: 'marketing', title: 'Digital Marketing', description: 'SEO & growth strategies', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
    { id: 'cloud', title: 'Cloud Services', description: 'AWS, Azure & GCP', icon: Cloud, gradient: 'from-cyan-500 to-blue-500' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const timezones = [
    { value: 'PST', label: 'PST (UTC-8)' },
    { value: 'EST', label: 'EST (UTC-5)' },
    { value: 'GMT', label: 'GMT (UTC+0)' },
    { value: 'CET', label: 'CET (UTC+1)' },
    { value: 'IST', label: 'IST (UTC+5:30)' },
    { value: 'PKT', label: 'PKT (UTC+5)' },
    { value: 'JST', label: 'JST (UTC+9)' },
  ];

  const meetingTypes = [
    { id: 'video', title: 'Video Call', description: 'Zoom or Google Meet', icon: Video },
    { id: 'phone', title: 'Phone Call', description: 'Direct phone conversation', icon: PhoneCall },
    { id: 'inperson', title: 'In-Person', description: 'Meet at our office', icon: Users },
    { id: 'consultation', title: 'Quick Consultation', description: '15-minute chat', icon: MessageCircle },
  ];

  const steps = [
    { title: 'Info', icon: User },
    { title: 'Service', icon: Briefcase },
    { title: 'Schedule', icon: Calendar },
    { title: 'Review', icon: CheckCircle2 },
  ];

  const benefits = [
    { icon: Zap, text: 'Free Consultation', gradient: 'from-brand-500 to-teal-500' },
    { icon: Clock, text: '24/7 Support', gradient: 'from-teal-500 to-cyan-500' },
    { icon: CheckCircle2, text: '100% Satisfaction', gradient: 'from-cyan-500 to-brand-500' },
  ];

  // Step Validation
  const isStep1Valid = bookingData.name && bookingData.email;
  const isStep2Valid = bookingData.service && bookingData.meetingType;
  const isStep3Valid = bookingData.preferredDate && bookingData.preferredTime && bookingData.timezone;

  const canProceed = () => {
    switch (currentStep) {
      case 1: return isStep1Valid;
      case 2: return isStep2Valid;
      case 3: return isStep3Valid;
      default: return true;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isBookingModalOpen]);

  return (
    <section id="book-meeting" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-teal-500/5" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Let&apos;s discuss how our comprehensive software solutions can help you achieve your business goals.
            Get started with a free consultation today.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleEmailClick}
                variant="glow"
                size="xl"
                className="rounded-full px-10 group"
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="xl"
                className="rounded-full px-10 border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Quick Contact */}
          <motion.button
            onClick={handlePhoneClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-teal-500 rounded-2xl mb-6 shadow-lg shadow-brand-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">Call Us Now</h3>
              <p className="text-slate-400 mb-4">Speak directly with our experts</p>
              <span className="text-brand-400 font-semibold text-lg group-hover:text-brand-300 transition-colors flex items-center gap-2">
                +92 310 6803687
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </span>
            </motion.div>
          </motion.button>

          {/* Email Contact */}
          <motion.button
            onClick={handleEmailClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl mb-6 shadow-lg shadow-teal-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Email Us</h3>
              <p className="text-slate-400 mb-4">Get detailed project information</p>
              <span className="text-teal-400 font-semibold text-sm group-hover:text-teal-300 transition-colors break-all">
                muhammadrehmanyousaf786@gmail.com
              </span>
            </motion.div>
          </motion.button>

          {/* Schedule Meeting */}
          <motion.button
            onClick={() => setIsBookingModalOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative text-left"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-brand-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

            <motion.div
              className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-brand-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Book Meeting</h3>
              <p className="text-slate-400 mb-4">Schedule a free consultation</p>
              <span className="text-cyan-400 font-semibold text-lg group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                Book Now
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </span>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Bottom Stats/Benefits */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Glass Container */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <p className="text-lg text-slate-300">
                Join <span className="text-brand-400 font-bold">150+</span> satisfied clients who trust us with their digital transformation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10 }}
                  >
                    <benefit.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-white font-medium group-hover:text-brand-400 transition-colors">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* World Class Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Confetti */}
            <Confetti isActive={showConfetti} />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] h-[90vh] md:h-auto bg-slate-900 rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-black/50 flex flex-col"
              >
                  {/* Static Gradient Background */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-500/20 blur-[100px] pointer-events-none" />

                  {/* Floating Particles */}
                  <FloatingParticles />

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 opacity-30"
                      animate={{
                        background: [
                          'linear-gradient(0deg, #10B981, #14B8A6, #06B6D4)',
                          'linear-gradient(120deg, #10B981, #14B8A6, #06B6D4)',
                          'linear-gradient(240deg, #10B981, #14B8A6, #06B6D4)',
                          'linear-gradient(360deg, #10B981, #14B8A6, #06B6D4)',
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{ filter: 'blur(60px)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col overflow-hidden min-h-0">
                    {/* Header */}
                    <div className="flex-shrink-0 p-6 pb-4 border-b border-slate-700/50 bg-slate-900">
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">Book Your Meeting</h2>
                            <p className="text-sm text-slate-400">Free consultation • No commitment</p>
                          </div>
                        </motion.div>

                        <motion.button
                          onClick={handleCloseModal}
                          className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Progress Indicator */}
                      {!isSuccess && (
                        <ProgressIndicator currentStep={currentStep} totalSteps={4} steps={steps} />
                      )}
                    </div>

                    {/* Form Content */}
                    <div className="flex-1 overflow-y-auto p-6 min-h-0">
                      <AnimatePresence mode="wait">
                        {isSuccess ? (
                          <SuccessScreen bookingData={bookingData} onClose={handleCloseModal} />
                        ) : (
                          <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                              <div className="space-y-6">
                                <div className="text-center mb-8">
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center mx-auto mb-4"
                                  >
                                    <User className="w-8 h-8 text-brand-400" />
                                  </motion.div>
                                  <h3 className="text-2xl font-bold text-white mb-2">Tell Us About Yourself</h3>
                                  <p className="text-slate-400">We&apos;d love to know who we&apos;re talking to</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  <AnimatedInput
                                    icon={User}
                                    label="Full Name"
                                    id="name"
                                    value={bookingData.name}
                                    onChange={(value) => handleInputChange('name', value)}
                                    placeholder="John Doe"
                                    required
                                    isValid={bookingData.name.length >= 2}
                                  />
                                  <AnimatedInput
                                    icon={Mail}
                                    label="Email Address"
                                    id="email"
                                    type="email"
                                    value={bookingData.email}
                                    onChange={(value) => handleInputChange('email', value)}
                                    placeholder="john@company.com"
                                    required
                                    isValid={bookingData.email.includes('@')}
                                  />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  <AnimatedInput
                                    icon={Building}
                                    label="Company Name"
                                    id="company"
                                    value={bookingData.company}
                                    onChange={(value) => handleInputChange('company', value)}
                                    placeholder="Your Company"
                                    isValid={bookingData.company.length >= 2}
                                  />
                                  <AnimatedInput
                                    icon={Phone}
                                    label="Phone Number"
                                    id="phone"
                                    type="tel"
                                    value={bookingData.phone}
                                    onChange={(value) => handleInputChange('phone', value)}
                                    placeholder="+92 310 6803687"
                                    isValid={bookingData.phone.length >= 10}
                                  />
                                </div>

                                {/* Trust Badges */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 }}
                                  className="flex flex-wrap justify-center gap-4 pt-4"
                                >
                                  {[
                                    { icon: Shield, text: 'SSL Secured' },
                                    { icon: Award, text: 'Top Rated' },
                                    { icon: Crown, text: 'Premium Service' },
                                  ].map((badge, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                                      <badge.icon className="w-4 h-4 text-brand-400" />
                                      {badge.text}
                                    </div>
                                  ))}
                                </motion.div>
                              </div>
                            )}

                            {/* Step 2: Service Selection */}
                            {currentStep === 2 && (
                              <div className="space-y-8">
                                {/* Services Section */}
                                <div>
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center">
                                      <Briefcase className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-bold text-white">Select a Service</h3>
                                      <p className="text-sm text-slate-400">What can we help you with?</p>
                                    </div>
                                  </div>

                                  {/* Services Grid - 3 columns */}
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {services.map((service) => {
                                      const Icon = service.icon;
                                      const isSelected = bookingData.service === service.title;
                                      return (
                                        <button
                                          key={service.id}
                                          type="button"
                                          onClick={() => handleInputChange('service', service.title)}
                                          className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-center group ${
                                            isSelected
                                              ? 'border-brand-500 bg-brand-500/10'
                                              : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'
                                          }`}
                                        >
                                          {isSelected && (
                                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center">
                                              <Check className="w-3 h-3 text-white" />
                                            </div>
                                          )}
                                          <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3`}>
                                            <Icon className="w-6 h-6 text-white" />
                                          </div>
                                          <h4 className="font-medium text-white text-sm">{service.title}</h4>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-slate-700/50" />

                                {/* Meeting Type Section */}
                                <div>
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                      <Video className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-bold text-white">Meeting Type</h3>
                                      <p className="text-sm text-slate-400">How would you like to connect?</p>
                                    </div>
                                  </div>

                                  {/* Meeting Types - 2x2 grid */}
                                  <div className="grid grid-cols-2 gap-3">
                                    {meetingTypes.map((type) => {
                                      const Icon = type.icon;
                                      const isSelected = bookingData.meetingType === type.title;
                                      return (
                                        <button
                                          key={type.id}
                                          type="button"
                                          onClick={() => handleInputChange('meetingType', type.title)}
                                          className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                                            isSelected
                                              ? 'border-brand-500 bg-brand-500/10'
                                              : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'
                                          }`}
                                        >
                                          <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                              isSelected ? 'bg-brand-500' : 'bg-slate-700'
                                            }`}>
                                              <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <h4 className="font-medium text-white text-sm">{type.title}</h4>
                                              <p className="text-xs text-slate-400 truncate">{type.description}</p>
                                            </div>
                                            {isSelected && (
                                              <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                              </div>
                                            )}
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Step 3: Schedule */}
                            {currentStep === 3 && (
                              <div className="space-y-6">
                                <div className="text-center mb-8">
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4"
                                  >
                                    <Calendar className="w-8 h-8 text-cyan-400" />
                                  </motion.div>
                                  <h3 className="text-2xl font-bold text-white mb-2">Pick Your Time</h3>
                                  <p className="text-slate-400">Choose a date and time that works for you</p>
                                </div>

                                {/* Date Picker */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                >
                                  <Label className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-brand-400" />
                                    Preferred Date <span className="text-brand-400">*</span>
                                  </Label>
                                  <div className="relative">
                                    <Input
                                      type="date"
                                      value={bookingData.preferredDate}
                                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                                      className="h-14 pl-12 bg-slate-800/50 border-2 border-slate-700/50 text-white rounded-xl transition-all duration-300 focus:border-brand-500 cursor-pointer [color-scheme:dark]"
                                      min={new Date().toISOString().split('T')[0]}
                                    />
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                                  </div>
                                </motion.div>

                                {/* Time Slots */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  <Label className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-brand-400" />
                                    Available Time Slots <span className="text-brand-400">*</span>
                                  </Label>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {timeSlots.map((time, index) => (
                                      <motion.div
                                        key={time}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                      >
                                        <TimeSlot
                                          time={time}
                                          isSelected={bookingData.preferredTime === time}
                                          onClick={() => handleInputChange('preferredTime', time)}
                                        />
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>

                                {/* Timezone */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  <Label className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-brand-400" />
                                    Your Timezone <span className="text-brand-400">*</span>
                                  </Label>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {timezones.map((tz, index) => (
                                      <motion.button
                                        key={tz.value}
                                        type="button"
                                        onClick={() => handleInputChange('timezone', tz.label)}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        className={`px-4 py-3 rounded-xl border-2 font-medium transition-all duration-300 text-sm ${
                                          bookingData.timezone === tz.label
                                            ? 'border-brand-500 bg-brand-500 text-white'
                                            : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                      >
                                        {tz.value}
                                      </motion.button>
                                    ))}
                                  </div>
                                </motion.div>

                                {/* Additional Message */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <Label htmlFor="message" className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-brand-400" />
                                    Additional Notes
                                  </Label>
                                  <Textarea
                                    id="message"
                                    value={bookingData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    className="min-h-[100px] bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-brand-500 rounded-xl"
                                    placeholder="Tell us about your project goals, timeline, or any specific requirements..."
                                  />
                                </motion.div>
                              </div>
                            )}

                            {/* Step 4: Review */}
                            {currentStep === 4 && (
                              <div className="space-y-6">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-white">Review & Confirm</h3>
                                    <p className="text-sm text-slate-400">Please verify your booking details</p>
                                  </div>
                                </div>

                                {/* Summary Card */}
                                <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                                  {/* Contact Info Row */}
                                  <div className="p-4 border-b border-slate-700/50">
                                    <div className="flex items-center gap-3 mb-3">
                                      <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                                        <User className="w-4 h-4 text-brand-400" />
                                      </div>
                                      <span className="text-sm font-medium text-slate-400">Contact</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm pl-11">
                                      <div className="flex justify-between">
                                        <span className="text-slate-500">Name</span>
                                        <span className="text-white font-medium">{bookingData.name}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-slate-500">Email</span>
                                        <span className="text-white font-medium truncate max-w-[150px]">{bookingData.email}</span>
                                      </div>
                                      {bookingData.company && (
                                        <div className="flex justify-between">
                                          <span className="text-slate-500">Company</span>
                                          <span className="text-white font-medium">{bookingData.company}</span>
                                        </div>
                                      )}
                                      {bookingData.phone && (
                                        <div className="flex justify-between">
                                          <span className="text-slate-500">Phone</span>
                                          <span className="text-white font-medium">{bookingData.phone}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Service Row */}
                                  <div className="p-4 border-b border-slate-700/50">
                                    <div className="flex items-center gap-3 mb-3">
                                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                                        <Briefcase className="w-4 h-4 text-teal-400" />
                                      </div>
                                      <span className="text-sm font-medium text-slate-400">Service</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm pl-11">
                                      <div className="flex justify-between">
                                        <span className="text-slate-500">Type</span>
                                        <span className="text-white font-medium">{bookingData.service || 'Not selected'}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-slate-500">Meeting</span>
                                        <span className="text-white font-medium">{bookingData.meetingType || 'Not selected'}</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Schedule Row */}
                                  <div className="p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                        <Calendar className="w-4 h-4 text-cyan-400" />
                                      </div>
                                      <span className="text-sm font-medium text-slate-400">Schedule</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm pl-11">
                                      <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs">Date</span>
                                        <span className="text-white font-medium">{bookingData.preferredDate || '-'}</span>
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs">Time</span>
                                        <span className="text-white font-medium">{bookingData.preferredTime || '-'}</span>
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-slate-500 text-xs">Timezone</span>
                                        <span className="text-white font-medium text-xs">{bookingData.timezone || '-'}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Notes Card (if any) */}
                                {bookingData.message && (
                                  <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                                    <div className="flex items-start gap-3">
                                      <MessageSquare className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                      <p className="text-sm text-slate-400">{bookingData.message}</p>
                                    </div>
                                  </div>
                                )}

                                {/* Confirmation Banner */}
                                <div className="bg-gradient-to-r from-brand-500/10 to-teal-500/10 rounded-xl p-4 border border-brand-500/20">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                                      <Rocket className="w-5 h-5 text-brand-400" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">Ready to book!</p>
                                      <p className="text-xs text-slate-400">Click confirm and we&apos;ll send you a calendar invite</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer Navigation */}
                    {!isSuccess && (
                      <div className="flex-shrink-0 p-6 pt-4 border-t border-slate-700/50 bg-slate-900">
                        <div className="flex items-center justify-between gap-4">
                          {/* Back Button */}
                          <button
                            type="button"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                              currentStep === 1
                                ? 'text-slate-600 cursor-not-allowed'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                            }`}
                          >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                          </button>

                          {/* Step Indicator */}
                          <div className="text-sm text-slate-500">
                            Step {currentStep} of 4
                          </div>

                          {/* Next/Submit Button */}
                          {currentStep < 4 ? (
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!canProceed()}
                              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                                canProceed()
                                  ? 'bg-gradient-to-r from-brand-500 to-teal-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40'
                                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                              }`}
                            >
                              Continue
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={handleBookingSubmit}
                              disabled={isSubmitting}
                              className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-shadow disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-5 h-5 animate-spin" />
                                  Booking...
                                </>
                              ) : (
                                <>
                                  <Play className="w-5 h-5" />
                                  Confirm Booking
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
