'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, User, Building, MessageSquare } from 'lucide-react';
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

  // Enhanced Schedule Meeting State - Updated with more fields from CTA
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

  // Enhanced services list from CTA component
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

  // Enhanced time slots from CTA component
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Enhanced timezones from CTA component
  const timezones = [
    'PST (UTC-8)', 'EST (UTC-5)', 'GMT (UTC+0)', 'CET (UTC+1)',
    'IST (UTC+5:30)', 'JST (UTC+9)', 'AEST (UTC+10)'
  ];

  // Meeting types from CTA component
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
      // Try primary API first, then fallback to Formspree
      let response;
      try {
        response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...chatData,
            formType: 'live_chat'
          }),
        });
      } catch (error) {
        // Fallback to Formspree
        response = await fetch('https://formspree.io/f/xpwzgkqr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...chatData,
            _replyto: chatData.email,
            _subject: `Live Chat Request from ${chatData.name}`,
            type: 'Live Chat Request'
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Chat Request Sent!",
          description: "We'll connect with you shortly via email or phone.",
        });
        setIsLiveChatOpen(false);
        setChatData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced schedule submit with dual API support and comprehensive validation
  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try primary API first, then fallback to Formspree
      let response;
      try {
        response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...meetingData,
            formType: 'booking'
          }),
        });
      } catch (error) {
        // Fallback to Formspree
        response = await fetch('https://formspree.io/f/xpwzgkqr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...meetingData,
            _replyto: meetingData.email,
            _subject: `Enhanced Meeting Request from ${meetingData.name}`,
            type: 'Enhanced Meeting Schedule Request'
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Meeting Booked Successfully!",
          description: "We'll send you a calendar invite within 2 hours.",
        });
        setIsScheduleOpen(false);
        setMeetingData({
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
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try primary API first, then fallback to Formspree
      let response;
      try {
        response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...callbackData,
            formType: 'callback'
          }),
        });
      } catch (error) {
        // Fallback to Formspree
        response = await fetch('https://formspree.io/f/xpwzgkqr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...callbackData,
            _replyto: callbackData.email,
            _subject: `Callback Request from ${callbackData.name}`,
            type: 'Callback Request'
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Callback Requested!",
          description: "We'll call you back within 2 hours during business hours.",
        });
        setIsCallbackOpen(false);
        setCallbackData({
          name: '',
          phone: '',
          email: '',
          preferredTime: '',
          timezone: '',
          reason: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function for handling input changes
  const handleMeetingInputChange = (field: string, value: string) => {
    setMeetingData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+923106803687', '+923274811220'],
      description: 'Call us for immediate assistance',
      color: 'from-green-500 to-blue-500',
      action: () => window.open('tel:+923106803687')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['muhammadrehmanyousaf786 \n      @gmail.com'],
      description: 'Send us your detailed requirements',
      color: 'from-blue-500 to-purple-500',
      action: () => window.open('mailto:muhammadrehmanyousaf786@gmail.com')
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Lahore Tech Hub, Suite 100', 'Lahore, Pakistan'],
      description: 'Visit our headquarters',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM PST', 'Sat - Sun: Emergency Support Only'],
      description: 'We\'re here when you need us',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers',
      action: 'Start Chat',
      color: 'from-blue-500 to-indigo-500',
      onClick: () => setIsLiveChatOpen(true)
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      action: 'Book Now',
      color: 'from-purple-500 to-violet-500',
      onClick: () => setIsScheduleOpen(true)
    },
    {
      icon: Phone,
      title: 'Request Callback',
      description: 'We\'ll call you back',
      action: 'Request Call',
      color: 'from-green-500 to-teal-500',
      onClick: () => setIsCallbackOpen(true)
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Multiple Ways to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reach Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the most convenient way to get in touch with our team. We're here to help you succeed.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group cursor-pointer"
              onClick={info.action}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {info.title}
              </h3>
              
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Need Immediate Assistance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-left w-full`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3">
                  {action.description}
                </p>
                
                <div className="text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  {action.action} →
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Our Response Time Guarantee
            </h3>
            <p className="text-gray-600">
              We value your time and guarantee quick responses to all inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">2 Hours</div>
              <div className="text-sm text-gray-700">Initial Response</div>
              <div className="text-xs text-gray-500 mt-1">During business hours</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">24 Hours</div>
              <div className="text-sm text-gray-700">Detailed Proposal</div>
              <div className="text-xs text-gray-500 mt-1">Complete project outline</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">1 Week</div>
              <div className="text-sm text-gray-700">Project Kickoff</div>
              <div className="text-xs text-gray-500 mt-1">After agreement</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Direct Email:</p>
            <a 
              href="mailto:muhammadrehmanyousaf786@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              muhammadrehmanyousaf786@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Live Chat Modal */}
      <Dialog open={isLiveChatOpen} onOpenChange={setIsLiveChatOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              Start Live Chat
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleLiveChatSubmit} className="space-y-4 mt-6">
            <div>
              <Label htmlFor="chat-name" className="text-sm font-semibold text-gray-700">
                Your Name *
              </Label>
              <Input
                id="chat-name"
                type="text"
                value={chatData.name}
                onChange={(e) => setChatData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="chat-email" className="text-sm font-semibold text-gray-700">
                Email Address *
              </Label>
              <Input
                id="chat-email"
                type="email"
                value={chatData.email}
                onChange={(e) => setChatData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@company.com"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="chat-message" className="text-sm font-semibold text-gray-700">
                How can we help you? *
              </Label>
              <Textarea
                id="chat-message"
                value={chatData.message}
                onChange={(e) => setChatData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us what you need help with..."
                required
                className="mt-1 min-h-[100px]"
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-800">
                💬 We'll connect with you via email or phone within 15 minutes during business hours.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsLiveChatOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !chatData.name || !chatData.email || !chatData.message}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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

      {/* Enhanced Schedule Meeting Modal - Updated with CTA functionality */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-600" />
              Schedule Your Free Consultation
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleScheduleSubmit} className="space-y-6 mt-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="meeting-name" className="text-sm font-semibold text-gray-700">
                  Full Name *
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="meeting-name"
                    type="text"
                    value={meetingData.name}
                    onChange={(e) => handleMeetingInputChange('name', e.target.value)}
                    className="pl-10"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="meeting-email" className="text-sm font-semibold text-gray-700">
                  Email Address *
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="meeting-email"
                    type="email"
                    value={meetingData.email}
                    onChange={(e) => handleMeetingInputChange('email', e.target.value)}
                    className="pl-10"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="meeting-company" className="text-sm font-semibold text-gray-700">
                  Company Name
                </Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="meeting-company"
                    type="text"
                    value={meetingData.company}
                    onChange={(e) => handleMeetingInputChange('company', e.target.value)}
                    className="pl-10"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="meeting-phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="meeting-phone"
                    type="tel"
                    value={meetingData.phone}
                    onChange={(e) => handleMeetingInputChange('phone', e.target.value)}
                    className="pl-10"
                    placeholder="+92 310 6803687"
                  />
                </div>
              </div>
            </div>

            {/* Service and Meeting Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Service Interested In *
                </Label>
                <Select value={meetingData.service} onValueChange={(value) => handleMeetingInputChange('service', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Meeting Type *
                </Label>
                <Select value={meetingData.meetingType} onValueChange={(value) => handleMeetingInputChange('meetingType', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent>
                    {meetingTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="meeting-date" className="text-sm font-semibold text-gray-700">
                  Preferred Date *
                </Label>
                <Input
                  id="meeting-date"
                  type="date"
                  value={meetingData.preferredDate}
                  onChange={(e) => handleMeetingInputChange('preferredDate', e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Preferred Time *
                </Label>
                <Select value={meetingData.preferredTime} onValueChange={(value) => handleMeetingInputChange('preferredTime', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Timezone *
                </Label>
                <Select value={meetingData.timezone} onValueChange={(value) => handleMeetingInputChange('timezone', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="meeting-message" className="text-sm font-semibold text-gray-700">
                Additional Information
              </Label>
              <div className="relative mt-1">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Textarea
                  id="meeting-message"
                  value={meetingData.message}
                  onChange={(e) => handleMeetingInputChange('message', e.target.value)}
                  className="pl-10 min-h-[100px]"
                  placeholder="Tell us about your project requirements, goals, or any specific questions you have..."
                />
              </div>
            </div>

            {/* Meeting Info */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Meeting Details
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Duration: 30-60 minutes</li>
                <li>• Free consultation with no obligations</li>
                <li>• We'll send a calendar invite to your email</li>
                <li>• Discuss your project requirements and get expert advice</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsScheduleOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !meetingData.name || !meetingData.email || !meetingData.service || !meetingData.preferredDate || !meetingData.preferredTime || !meetingData.timezone || !meetingData.meetingType}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-600" />
              Request Callback
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleCallbackSubmit} className="space-y-4 mt-6">
            <div>
              <Label htmlFor="callback-name" className="text-sm font-semibold text-gray-700">
                Your Name *
              </Label>
              <Input
                id="callback-name"
                type="text"
                value={callbackData.name}
                onChange={(e) => setCallbackData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="John Doe"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="callback-phone" className="text-sm font-semibold text-gray-700">
                Phone Number *
              </Label>
              <Input
                id="callback-phone"
                type="tel"
                value={callbackData.phone}
                onChange={(e) => setCallbackData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+92 310 6803687"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="callback-email" className="text-sm font-semibold text-gray-700">
                Email Address
              </Label>
              <Input
                id="callback-email"
                type="email"
                value={callbackData.email}
                onChange={(e) => setCallbackData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@company.com"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Preferred Time
                </Label>
                <Select value={callbackData.preferredTime} onValueChange={(value) => setCallbackData(prev => ({ ...prev, preferredTime: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ASAP">ASAP</SelectItem>
                    <SelectItem value="Morning (9-12 PM)">Morning (9-12 PM)</SelectItem>
                    <SelectItem value="Afternoon (12-5 PM)">Afternoon (12-5 PM)</SelectItem>
                    <SelectItem value="Evening (5-8 PM)">Evening (5-8 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Timezone
                </Label>
                <Select value={callbackData.timezone} onValueChange={(value) => setCallbackData(prev => ({ ...prev, timezone: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="callback-reason" className="text-sm font-semibold text-gray-700">
                Reason for Call
              </Label>
              <Textarea
                id="callback-reason"
                value={callbackData.reason}
                onChange={(e) => setCallbackData(prev => ({ ...prev, reason: e.target.value }))}
                placeholder="What would you like to discuss?"
                className="mt-1 min-h-[80px]"
              />
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Callback Promise:</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• We'll call you within 2 hours during business hours</li>
                <li>• Free consultation with no obligations</li>
                <li>• Direct line to our experts</li>
                <li>• Average call duration: 15-30 minutes</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCallbackOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !callbackData.name || !callbackData.phone}
                className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
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