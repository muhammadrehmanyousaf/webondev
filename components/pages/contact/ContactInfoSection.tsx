'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, User, Building, MessageSquare, X, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactInfoSection = () => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'Cloud Services',
    'Consulting',
    'Other'
  ];

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
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({ title: "Request Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({ title: "Booking Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({ title: "Request Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMeetingInputChange = (field: string, value: string) => {
    setMeetingData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+923106803687', '+923274811220'],
      description: 'Call us for immediate assistance',
      gradient: 'from-brand-400 to-teal-400',
      action: () => window.open('tel:+923106803687')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['muhammadrehmanyousaf786@gmail.com'],
      description: 'Send us your detailed requirements',
      gradient: 'from-teal-400 to-cyan-400',
      action: () => window.open('mailto:muhammadrehmanyousaf786@gmail.com')
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Lahore Tech Hub, Suite 100', 'Lahore, Pakistan'],
      description: 'Visit our headquarters',
      gradient: 'from-cyan-400 to-brand-400',
      action: undefined
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM PST', 'Sat - Sun: Emergency Support Only'],
      description: "We're here when you need us",
      gradient: 'from-brand-400 to-emerald-400',
      action: undefined
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers',
      action: 'Start Chat',
      gradient: 'from-brand-400 to-teal-400',
      onClick: () => setIsLiveChatOpen(true)
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      action: 'Book Now',
      gradient: 'from-teal-400 to-cyan-400',
      onClick: () => setIsScheduleOpen(true)
    },
    {
      icon: Phone,
      title: 'Request Callback',
      description: "We'll call you back",
      action: 'Request Call',
      gradient: 'from-cyan-400 to-brand-400',
      onClick: () => setIsCallbackOpen(true)
    }
  ];

  const inputClasses = "w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300";

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multiple Ways to
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Reach Us</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch with our team. We're here to help you succeed.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={info.action}
              className={`group relative ${info.action ? 'cursor-pointer' : ''}`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {info.title}
                </h3>

                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm font-medium">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-gray-500 text-sm">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Need Immediate Assistance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={action.onClick}
                className="group relative text-left w-full"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${action.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                    {action.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">
                    {action.description}
                  </p>

                  <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm group-hover:text-brand-300 transition-colors">
                    {action.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Response Time Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Our Response Time Guarantee
              </h3>
              <p className="text-gray-400">
                We value your time and guarantee quick responses to all inquiries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { time: '2 Hours', label: 'Initial Response', sublabel: 'During business hours', color: 'from-brand-400 to-teal-400' },
                { time: '24 Hours', label: 'Detailed Proposal', sublabel: 'Complete project outline', color: 'from-teal-400 to-cyan-400' },
                { time: '1 Week', label: 'Project Kickoff', sublabel: 'After agreement', color: 'from-cyan-400 to-brand-400' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-slate-900/50 rounded-2xl border border-white/5"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.time}
                  </div>
                  <div className="text-white font-medium">{item.label}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.sublabel}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-2">Direct Email:</p>
              <a
                href="mailto:muhammadrehmanyousaf786@gmail.com"
                className="text-brand-400 hover:text-brand-300 font-semibold text-lg transition-colors"
              >
                muhammadrehmanyousaf786@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Chat Modal */}
      <Dialog open={isLiveChatOpen} onOpenChange={setIsLiveChatOpen}>
        <DialogContent className="max-w-md bg-slate-900 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              Start Live Chat
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleLiveChatSubmit} className="space-y-4 mt-6">
            <div>
              <Label htmlFor="chat-name" className="text-sm font-semibold text-gray-300">Your Name *</Label>
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
              <Label htmlFor="chat-email" className="text-sm font-semibold text-gray-300">Email Address *</Label>
              <Input
                id="chat-email"
                type="email"
                value={chatData.email}
                onChange={(e) => setChatData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@company.com"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <Label htmlFor="chat-message" className="text-sm font-semibold text-gray-300">How can we help you? *</Label>
              <Textarea
                id="chat-message"
                value={chatData.message}
                onChange={(e) => setChatData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us what you need help with..."
                required
                className={`${inputClasses} min-h-[100px]`}
              />
            </div>

            <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4">
              <p className="text-sm text-brand-400">We'll connect with you via email or phone within 15 minutes during business hours.</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsLiveChatOpen(false)} className="flex-1 border-white/10 text-gray-300 hover:bg-white/5">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !chatData.name || !chatData.email || !chatData.message}
                className="flex-1 bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white"
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              Schedule Your Free Consultation
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleScheduleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-300">Full Name *</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
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
                <Label className="text-sm font-semibold text-gray-300">Email Address *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <Input
                    type="email"
                    value={meetingData.email}
                    onChange={(e) => handleMeetingInputChange('email', e.target.value)}
                    className={`${inputClasses} pl-10`}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-300">Company Name</Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
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
                <Label className="text-sm font-semibold text-gray-300">Phone Number</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
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
                <Label className="text-sm font-semibold text-gray-300">Service Interested In *</Label>
                <Select value={meetingData.service} onValueChange={(value) => handleMeetingInputChange('service', value)}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-white/10">{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-300">Meeting Type *</Label>
                <Select value={meetingData.meetingType} onValueChange={(value) => handleMeetingInputChange('meetingType', value)}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {meetingTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-white hover:bg-white/10">{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-300">Preferred Date *</Label>
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
                <Label className="text-sm font-semibold text-gray-300">Preferred Time *</Label>
                <Select value={meetingData.preferredTime} onValueChange={(value) => handleMeetingInputChange('preferredTime', value)}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="text-white hover:bg-white/10">{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-300">Timezone *</Label>
                <Select value={meetingData.timezone} onValueChange={(value) => handleMeetingInputChange('timezone', value)}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz} className="text-white hover:bg-white/10">{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-300">Additional Information</Label>
              <div className="relative mt-1">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <Textarea
                  value={meetingData.message}
                  onChange={(e) => handleMeetingInputChange('message', e.target.value)}
                  className={`${inputClasses} pl-10 min-h-[100px]`}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
            </div>

            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
              <h4 className="font-semibold text-teal-400 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Meeting Details
              </h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Duration: 30-60 minutes</li>
                <li>• Free consultation with no obligations</li>
                <li>• We'll send a calendar invite to your email</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsScheduleOpen(false)} className="flex-1 border-white/10 text-gray-300 hover:bg-white/5">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !meetingData.name || !meetingData.email || !meetingData.service || !meetingData.preferredDate || !meetingData.preferredTime || !meetingData.timezone || !meetingData.meetingType}
                className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
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
        <DialogContent className="max-w-lg bg-slate-900 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-brand-500 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              Request Callback
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCallbackSubmit} className="space-y-4 mt-6">
            <div>
              <Label className="text-sm font-semibold text-gray-300">Your Name *</Label>
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
              <Label className="text-sm font-semibold text-gray-300">Phone Number *</Label>
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
              <Label className="text-sm font-semibold text-gray-300">Email Address</Label>
              <Input
                type="email"
                value={callbackData.email}
                onChange={(e) => setCallbackData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@company.com"
                className={inputClasses}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-300">Preferred Time</Label>
                <Select value={callbackData.preferredTime} onValueChange={(value) => setCallbackData(prev => ({ ...prev, preferredTime: value }))}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    <SelectItem value="ASAP" className="text-white hover:bg-white/10">ASAP</SelectItem>
                    <SelectItem value="Morning (9-12 PM)" className="text-white hover:bg-white/10">Morning (9-12 PM)</SelectItem>
                    <SelectItem value="Afternoon (12-5 PM)" className="text-white hover:bg-white/10">Afternoon (12-5 PM)</SelectItem>
                    <SelectItem value="Evening (5-8 PM)" className="text-white hover:bg-white/10">Evening (5-8 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-300">Timezone</Label>
                <Select value={callbackData.timezone} onValueChange={(value) => setCallbackData(prev => ({ ...prev, timezone: value }))}>
                  <SelectTrigger className="mt-1 bg-slate-800 border-white/10 text-white">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/10">
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz} className="text-white hover:bg-white/10">{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-300">Reason for Call</Label>
              <Textarea
                value={callbackData.reason}
                onChange={(e) => setCallbackData(prev => ({ ...prev, reason: e.target.value }))}
                placeholder="What would you like to discuss?"
                className={`${inputClasses} min-h-[80px]`}
              />
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">Callback Promise:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• We'll call you within 2 hours during business hours</li>
                <li>• Free consultation with no obligations</li>
                <li>• Direct line to our experts</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsCallbackOpen(false)} className="flex-1 border-white/10 text-gray-300 hover:bg-white/5">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !callbackData.name || !callbackData.phone}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-brand-500 hover:from-cyan-600 hover:to-brand-600 text-white"
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
