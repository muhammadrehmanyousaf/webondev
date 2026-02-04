'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, User, Building, MessageSquare, ArrowRight, CheckCircle, AlertCircle, Loader2, Lightbulb } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useEmailVerification } from '@/hooks/use-email-verification';
import { SOFTWARE_SERVICES } from '@/lib/constants';

const ContactInfoSection = () => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Email verification for each form
  const chatEmailVerification = useEmailVerification();
  const meetingEmailVerification = useEmailVerification();
  const callbackEmailVerification = useEmailVerification();

  const [chatEmailTouched, setChatEmailTouched] = useState(false);
  const [meetingEmailTouched, setMeetingEmailTouched] = useState(false);
  const [callbackEmailTouched, setCallbackEmailTouched] = useState(false);

  // Live Chat State
  const [chatData, setChatData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Schedule Meeting State
  const [meetingData, setMeetingData] = useState({
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

  // Callback Request State
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    timezone: '',
    reason: ''
  });

  const services = SOFTWARE_SERVICES;

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const timezones = [
    'PST (UTC-8)', 'EST (UTC-5)', 'GMT (UTC+0)', 'CET (UTC+1)',
    'IST (UTC+5:30)', 'JST (UTC+9)', 'AEST (UTC+10)'
  ];

  const meetingTypes = [
    'Video Call (Zoom/Teams)',
    'Phone Call',
    'In-Person Meeting',
    'Consultation Call'
  ];

  const handleLiveChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify email before submission
    if (!chatEmailVerification.verificationResult?.isValid) {
      const result = await chatEmailVerification.verifyEmail(chatData.email);
      if (!result.isValid) {
        setChatEmailTouched(true);
        toast({ title: "Invalid Email", description: result.message, variant: "destructive" });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...chatData, formType: 'live_chat' }),
      });

      if (response.ok) {
        toast({ title: "Chat Request Sent!", description: "We'll connect with you shortly via email or phone." });
        setIsLiveChatOpen(false);
        setChatData({ name: '', email: '', message: '' });
        setChatEmailTouched(false);
        chatEmailVerification.clearVerification();
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({ title: "Request Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify email before submission
    if (!meetingEmailVerification.verificationResult?.isValid) {
      const result = await meetingEmailVerification.verifyEmail(meetingData.email);
      if (!result.isValid) {
        setMeetingEmailTouched(true);
        toast({ title: "Invalid Email", description: result.message, variant: "destructive" });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...meetingData, formType: 'booking' }),
      });

      if (response.ok) {
        toast({ title: "Meeting Booked Successfully!", description: "We'll send you a calendar invite within 2 hours." });
        setIsScheduleOpen(false);
        setMeetingData({ name: '', email: '', company: '', phone: '', service: '', preferredDate: '', preferredTime: '', timezone: '', meetingType: '', message: '' });
        setMeetingEmailTouched(false);
        meetingEmailVerification.clearVerification();
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({ title: "Booking Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify email before submission if provided
    if (callbackData.email && !callbackEmailVerification.verificationResult?.isValid) {
      const result = await callbackEmailVerification.verifyEmail(callbackData.email);
      if (!result.isValid) {
        setCallbackEmailTouched(true);
        toast({ title: "Invalid Email", description: result.message, variant: "destructive" });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...callbackData, formType: 'callback' }),
      });

      if (response.ok) {
        toast({ title: "Callback Requested!", description: "We'll call you back within 2 hours during business hours." });
        setIsCallbackOpen(false);
        setCallbackData({ name: '', phone: '', email: '', preferredTime: '', timezone: '', reason: '' });
        setCallbackEmailTouched(false);
        callbackEmailVerification.clearVerification();
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({ title: "Request Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMeetingInputChange = (field: string, value: string) => {
    setMeetingData(prev => ({ ...prev, [field]: value }));
    if (field === 'email' && meetingEmailVerification.verificationResult) {
      meetingEmailVerification.clearVerification();
    }
  };

  // Email handlers for Live Chat
  const handleChatEmailChange = useCallback((value: string) => {
    setChatData(prev => ({ ...prev, email: value }));
    if (chatEmailVerification.verificationResult) {
      chatEmailVerification.clearVerification();
    }
  }, [chatEmailVerification]);

  const handleChatEmailBlur = useCallback(() => {
    setChatEmailTouched(true);
    if (chatData.email && chatData.email.length >= 5) {
      chatEmailVerification.verifyEmail(chatData.email);
    }
  }, [chatData.email, chatEmailVerification]);

  const handleChatEmailSuggestion = useCallback(() => {
    const suggestion = chatEmailVerification.applySuggestion();
    if (suggestion) {
      setChatData(prev => ({ ...prev, email: suggestion }));
      setTimeout(() => chatEmailVerification.verifyEmail(suggestion), 100);
    }
  }, [chatEmailVerification]);

  // Email handlers for Meeting
  const handleMeetingEmailBlur = useCallback(() => {
    setMeetingEmailTouched(true);
    if (meetingData.email && meetingData.email.length >= 5) {
      meetingEmailVerification.verifyEmail(meetingData.email);
    }
  }, [meetingData.email, meetingEmailVerification]);

  const handleMeetingEmailSuggestion = useCallback(() => {
    const suggestion = meetingEmailVerification.applySuggestion();
    if (suggestion) {
      setMeetingData(prev => ({ ...prev, email: suggestion }));
      setTimeout(() => meetingEmailVerification.verifyEmail(suggestion), 100);
    }
  }, [meetingEmailVerification]);

  // Email handlers for Callback
  const handleCallbackEmailChange = useCallback((value: string) => {
    setCallbackData(prev => ({ ...prev, email: value }));
    if (callbackEmailVerification.verificationResult) {
      callbackEmailVerification.clearVerification();
    }
  }, [callbackEmailVerification]);

  const handleCallbackEmailBlur = useCallback(() => {
    setCallbackEmailTouched(true);
    if (callbackData.email && callbackData.email.length >= 5) {
      callbackEmailVerification.verifyEmail(callbackData.email);
    }
  }, [callbackData.email, callbackEmailVerification]);

  const handleCallbackEmailSuggestion = useCallback(() => {
    const suggestion = callbackEmailVerification.applySuggestion();
    if (suggestion) {
      setCallbackData(prev => ({ ...prev, email: suggestion }));
      setTimeout(() => callbackEmailVerification.verifyEmail(suggestion), 100);
    }
  }, [callbackEmailVerification]);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+923106803687', '+923274811220'],
      description: 'Call us for immediate assistance',
      action: () => window.open('tel:+923106803687')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['muhammadrehmanyousaf786@gmail.com'],
      description: 'Send us your detailed requirements',
      action: () => window.open('mailto:muhammadrehmanyousaf786@gmail.com')
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Lahore Tech Hub, Suite 100', 'Lahore, Pakistan'],
      description: 'Visit our headquarters',
      action: undefined
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM PST', 'Sat - Sun: Emergency Support Only'],
      description: "We're here when you need us",
      action: undefined
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers',
      action: 'Start Chat',
      onClick: () => setIsLiveChatOpen(true)
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      action: 'Book Now',
      onClick: () => setIsScheduleOpen(true)
    },
    {
      icon: Phone,
      title: 'Request Callback',
      description: "We'll call you back",
      action: 'Request Call',
      onClick: () => setIsCallbackOpen(true)
    }
  ];

  const inputClasses = "w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500/50 transition-all duration-300";

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 70% 50%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Contact Options
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Multiple Ways to <span className="gradient-text">Reach Us</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch with our team. We&apos;re here to help you succeed.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={info.action}
              className={`group ${info.action ? 'cursor-pointer' : ''}`}
            >
              <div className="h-full bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <info.icon className="w-5 h-5 text-brand-400" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {info.title}
                </h3>

                <div className="space-y-0.5 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-300 text-xs sm:text-sm font-medium">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-slate-500 text-xs sm:text-sm">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-6 sm:mb-8">
            Need Immediate Assistance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                onClick={action.onClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group text-left w-full bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <action.icon className="w-5 h-5 text-brand-400" />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                  {action.title}
                </h4>

                <p className="text-slate-500 text-xs sm:text-sm mb-3">
                  {action.description}
                </p>

                <div className="flex items-center gap-1.5 text-brand-400 font-semibold text-xs sm:text-sm">
                  {action.action}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Response Time Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Our Response Time Guarantee
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                We value your time and guarantee quick responses to all inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {[
                { time: '2 Hours', label: 'Initial Response', sublabel: 'During business hours' },
                { time: '24 Hours', label: 'Detailed Proposal', sublabel: 'Complete project outline' },
                { time: '1 Week', label: 'Project Kickoff', sublabel: 'After agreement' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="text-center p-4 sm:p-5 bg-white/[0.02] rounded-xl border border-white/[0.06]"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-brand-400 mb-1">
                    {item.time}
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">{item.label}</div>
                  <div className="text-slate-500 text-xs sm:text-sm mt-1">{item.sublabel}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-slate-500 mb-1">Direct Email:</p>
              <a
                href="mailto:muhammadrehmanyousaf786@gmail.com"
                className="text-brand-400 hover:text-brand-300 font-semibold text-sm sm:text-base transition-colors"
              >
                muhammadrehmanyousaf786@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Chat Modal */}
      <Dialog open={isLiveChatOpen} onOpenChange={setIsLiveChatOpen}>
        <DialogContent className="max-w-md bg-[#0a0f1a] border-white/[0.08]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))' }}
              >
                <MessageCircle className="w-5 h-5 text-brand-400" />
              </div>
              Start Live Chat
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleLiveChatSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="chat-name" className="text-sm font-semibold text-slate-300">Your Name *</Label>
              <Input
                id="chat-name"
                type="text"
                value={chatData.name}
                onChange={(e) => setChatData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <Label htmlFor="chat-email" className="text-sm font-semibold text-slate-300">Email Address *</Label>
              <div className="relative">
                <Input
                  id="chat-email"
                  type="email"
                  value={chatData.email}
                  onChange={(e) => handleChatEmailChange(e.target.value)}
                  onBlur={handleChatEmailBlur}
                  placeholder="john@company.com"
                  required
                  className={`${inputClasses} pr-10 ${
                    chatEmailTouched && chatEmailVerification.verificationResult?.isValid
                      ? 'border-green-500/50'
                      : chatEmailTouched && chatEmailVerification.verificationResult && !chatEmailVerification.verificationResult.isValid
                        ? 'border-red-500/50'
                        : ''
                  }`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <AnimatePresence mode="wait">
                    {chatEmailVerification.isVerifying && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                      </motion.div>
                    )}
                    {!chatEmailVerification.isVerifying && chatEmailTouched && chatEmailVerification.verificationResult?.isValid && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </motion.div>
                    )}
                    {!chatEmailVerification.isVerifying && chatEmailTouched && chatEmailVerification.verificationResult && !chatEmailVerification.verificationResult.isValid && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <AnimatePresence>
                {chatEmailTouched && chatEmailVerification.verificationResult && !chatEmailVerification.verificationResult.isValid && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="mt-2">
                    {chatEmailVerification.verificationResult.suggestion ? (
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-amber-200">{chatEmailVerification.verificationResult.message}</p>
                          <button type="button" onClick={handleChatEmailSuggestion} className="mt-1 text-xs font-medium text-amber-400 hover:text-amber-300 underline">
                            Use {chatEmailVerification.verificationResult.suggestion}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {chatEmailVerification.verificationResult.message}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <Label htmlFor="chat-message" className="text-sm font-semibold text-slate-300">How can we help you? *</Label>
              <Textarea
                id="chat-message"
                value={chatData.message}
                onChange={(e) => setChatData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us what you need help with..."
                required
                className={`${inputClasses} min-h-[100px]`}
              />
            </div>

            <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3">
              <p className="text-xs sm:text-sm text-brand-400">We&apos;ll connect with you via email or phone within 15 minutes during business hours.</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsLiveChatOpen(false)} className="flex-1 border-white/[0.1] text-slate-300 hover:bg-white/[0.05]">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || chatEmailVerification.isVerifying || !chatData.name || !chatData.email || !chatData.message}
                className="flex-1"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Connecting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Start Chat
                  </div>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Schedule Meeting Modal */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1a] border-white/[0.08]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))' }}
              >
                <Calendar className="w-5 h-5 text-brand-400" />
              </div>
              Schedule Your Free Consultation
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleScheduleSubmit} className="space-y-5 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-300">Full Name *</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <Input
                    type="text"
                    value={meetingData.name}
                    onChange={(e) => handleMeetingInputChange('name', e.target.value)}
                    className={`${inputClasses} pl-10`}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Email Address *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500 z-10" />
                  <Input
                    type="email"
                    value={meetingData.email}
                    onChange={(e) => handleMeetingInputChange('email', e.target.value)}
                    onBlur={handleMeetingEmailBlur}
                    className={`${inputClasses} pl-10 pr-10 ${
                      meetingEmailTouched && meetingEmailVerification.verificationResult?.isValid
                        ? 'border-green-500/50'
                        : meetingEmailTouched && meetingEmailVerification.verificationResult && !meetingEmailVerification.verificationResult.isValid
                          ? 'border-red-500/50'
                          : ''
                    }`}
                    placeholder="john@company.com"
                    required
                  />
                  <div className="absolute right-3 top-3">
                    <AnimatePresence mode="wait">
                      {meetingEmailVerification.isVerifying && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                        </motion.div>
                      )}
                      {!meetingEmailVerification.isVerifying && meetingEmailTouched && meetingEmailVerification.verificationResult?.isValid && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </motion.div>
                      )}
                      {!meetingEmailVerification.isVerifying && meetingEmailTouched && meetingEmailVerification.verificationResult && !meetingEmailVerification.verificationResult.isValid && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <AlertCircle className="w-4 h-4 text-red-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <AnimatePresence>
                  {meetingEmailTouched && meetingEmailVerification.verificationResult && !meetingEmailVerification.verificationResult.isValid && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="mt-2">
                      {meetingEmailVerification.verificationResult.suggestion ? (
                        <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs text-amber-200">{meetingEmailVerification.verificationResult.message}</p>
                            <button type="button" onClick={handleMeetingEmailSuggestion} className="mt-1 text-xs font-medium text-amber-400 hover:text-amber-300 underline">
                              Use {meetingEmailVerification.verificationResult.suggestion}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-red-400 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {meetingEmailVerification.verificationResult.message}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-300">Company Name</Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <Input
                    type="text"
                    value={meetingData.company}
                    onChange={(e) => handleMeetingInputChange('company', e.target.value)}
                    className={`${inputClasses} pl-10`}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Phone Number</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <Input
                    type="tel"
                    value={meetingData.phone}
                    onChange={(e) => handleMeetingInputChange('phone', e.target.value)}
                    className={`${inputClasses} pl-10`}
                    placeholder="+92 310 6803687"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-300">Service Interested In *</Label>
                <Select value={meetingData.service} onValueChange={(value) => handleMeetingInputChange('service', value)}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-white/[0.05]">{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Meeting Type *</Label>
                <Select value={meetingData.meetingType} onValueChange={(value) => handleMeetingInputChange('meetingType', value)}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    {meetingTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-white hover:bg-white/[0.05]">{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-300">Preferred Date *</Label>
                <Input
                  type="date"
                  value={meetingData.preferredDate}
                  onChange={(e) => handleMeetingInputChange('preferredDate', e.target.value)}
                  className={`${inputClasses} mt-1`}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Preferred Time *</Label>
                <Select value={meetingData.preferredTime} onValueChange={(value) => handleMeetingInputChange('preferredTime', value)}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="text-white hover:bg-white/[0.05]">{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Timezone *</Label>
                <Select value={meetingData.timezone} onValueChange={(value) => handleMeetingInputChange('timezone', value)}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz} className="text-white hover:bg-white/[0.05]">{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold text-slate-300">Additional Information</Label>
              <div className="relative mt-1">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <Textarea
                  value={meetingData.message}
                  onChange={(e) => handleMeetingInputChange('message', e.target.value)}
                  className={`${inputClasses} pl-10 min-h-[80px]`}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
            </div>

            <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3">
              <h4 className="font-semibold text-brand-400 mb-1.5 flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                Meeting Details
              </h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-0.5">
                <li>• Duration: 30-60 minutes</li>
                <li>• Free consultation with no obligations</li>
                <li>• We&apos;ll send a calendar invite to your email</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsScheduleOpen(false)} className="flex-1 border-white/[0.1] text-slate-300 hover:bg-white/[0.05]">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || meetingEmailVerification.isVerifying || !meetingData.name || !meetingData.email || !meetingData.service || !meetingData.preferredDate || !meetingData.preferredTime || !meetingData.timezone || !meetingData.meetingType}
                className="flex-1"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Booking...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Meeting
                  </div>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Request Callback Modal */}
      <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
        <DialogContent className="max-w-lg bg-[#0a0f1a] border-white/[0.08]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))' }}
              >
                <Phone className="w-5 h-5 text-brand-400" />
              </div>
              Request Callback
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCallbackSubmit} className="space-y-4 mt-4">
            <div>
              <Label className="text-sm font-semibold text-slate-300">Your Name *</Label>
              <Input
                type="text"
                value={callbackData.name}
                onChange={(e) => setCallbackData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-slate-300">Phone Number *</Label>
              <Input
                type="tel"
                value={callbackData.phone}
                onChange={(e) => setCallbackData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+92 310 6803687"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-slate-300">Email Address</Label>
              <div className="relative">
                <Input
                  type="email"
                  value={callbackData.email}
                  onChange={(e) => handleCallbackEmailChange(e.target.value)}
                  onBlur={handleCallbackEmailBlur}
                  placeholder="john@company.com"
                  className={`${inputClasses} pr-10 ${
                    callbackEmailTouched && callbackData.email && callbackEmailVerification.verificationResult?.isValid
                      ? 'border-green-500/50'
                      : callbackEmailTouched && callbackData.email && callbackEmailVerification.verificationResult && !callbackEmailVerification.verificationResult.isValid
                        ? 'border-red-500/50'
                        : ''
                  }`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <AnimatePresence mode="wait">
                    {callbackEmailVerification.isVerifying && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
                      </motion.div>
                    )}
                    {!callbackEmailVerification.isVerifying && callbackEmailTouched && callbackData.email && callbackEmailVerification.verificationResult?.isValid && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </motion.div>
                    )}
                    {!callbackEmailVerification.isVerifying && callbackEmailTouched && callbackData.email && callbackEmailVerification.verificationResult && !callbackEmailVerification.verificationResult.isValid && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <AnimatePresence>
                {callbackEmailTouched && callbackData.email && callbackEmailVerification.verificationResult && !callbackEmailVerification.verificationResult.isValid && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="mt-2">
                    {callbackEmailVerification.verificationResult.suggestion ? (
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs text-amber-200">{callbackEmailVerification.verificationResult.message}</p>
                          <button type="button" onClick={handleCallbackEmailSuggestion} className="mt-1 text-xs font-medium text-amber-400 hover:text-amber-300 underline">
                            Use {callbackEmailVerification.verificationResult.suggestion}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {callbackEmailVerification.verificationResult.message}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-slate-300">Preferred Time</Label>
                <Select value={callbackData.preferredTime} onValueChange={(value) => setCallbackData(prev => ({ ...prev, preferredTime: value }))}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    <SelectItem value="ASAP" className="text-white hover:bg-white/[0.05]">ASAP</SelectItem>
                    <SelectItem value="Morning (9-12 PM)" className="text-white hover:bg-white/[0.05]">Morning (9-12 PM)</SelectItem>
                    <SelectItem value="Afternoon (12-5 PM)" className="text-white hover:bg-white/[0.05]">Afternoon (12-5 PM)</SelectItem>
                    <SelectItem value="Evening (5-8 PM)" className="text-white hover:bg-white/[0.05]">Evening (5-8 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-300">Timezone</Label>
                <Select value={callbackData.timezone} onValueChange={(value) => setCallbackData(prev => ({ ...prev, timezone: value }))}>
                  <SelectTrigger className="mt-1 bg-white/[0.02] border-white/[0.08] text-white">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0f1a] border-white/[0.08]">
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz} className="text-white hover:bg-white/[0.05]">{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold text-slate-300">Reason for Call</Label>
              <Textarea
                value={callbackData.reason}
                onChange={(e) => setCallbackData(prev => ({ ...prev, reason: e.target.value }))}
                placeholder="What would you like to discuss?"
                className={`${inputClasses} min-h-[80px]`}
              />
            </div>

            <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-3">
              <h4 className="font-semibold text-brand-400 mb-1.5 text-sm">Callback Promise:</h4>
              <ul className="text-xs sm:text-sm text-slate-400 space-y-0.5">
                <li>• We&apos;ll call you within 2 hours during business hours</li>
                <li>• Free consultation with no obligations</li>
                <li>• Direct line to our experts</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsCallbackOpen(false)} className="flex-1 border-white/[0.1] text-slate-300 hover:bg-white/[0.05]">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || (callbackData.email && callbackEmailVerification.isVerifying) || !callbackData.name || !callbackData.phone}
                className="flex-1"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Requesting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Request Callback
                  </div>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactInfoSection;
