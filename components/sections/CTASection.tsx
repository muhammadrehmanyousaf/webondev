'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar, Phone, X, Clock, User, Mail, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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
    window.open('tel:+15551234567');
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
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
            ...bookingData,
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
            ...bookingData,
            _replyto: bookingData.email,
            _subject: `Meeting Request from ${bookingData.name}`,
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Meeting Booked Successfully!",
          description: "We'll send you a calendar invite within 2 hours.",
        });
        setIsBookingModalOpen(false);
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

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

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

  return (
    <section id="book-meeting" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden animate-on-scroll">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Your Business?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how our comprehensive software solutions can help you achieve your business goals. 
            Get started with a free consultation today.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={handleEmailClick}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center text-lg px-10 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-300 gap-3 font-medium"
            >
              <Calendar className="w-6 h-6" />
              View Our Work
            </Link>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact */}
          <button
            onClick={handlePhoneClick}
            className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Call Us Now</h3>
            <p className="text-gray-300 mb-4">Speak directly with our experts</p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
              +92 310 6803687
            </span>
          </button>

          {/* Email Contact */}
          <button
            onClick={handleEmailClick}
            className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
            <p className="text-gray-300 mb-4">Get detailed project information</p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-lg break-all overflow-hidden text-ellipsis max-w-full block px-2">
              muhammadrehmanyousaf786@gmail.com
            </span>
          </button>

          {/* Schedule Meeting - Updated with Modal */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Book Meeting</h3>
            <p className="text-gray-300 mb-4">Schedule a free consultation</p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
              Book Now
            </span>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="text-center border-t border-white/20 pt-12">
          <p className="text-gray-300 text-lg mb-8">
            Join 150+ satisfied clients who trust us with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              Schedule Your Free Consultation
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleBookingSubmit} className="space-y-6 mt-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Full Name *
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    value={bookingData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-10"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address *
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                  Company Name
                </Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="company"
                    type="text"
                    value={bookingData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="pl-10"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
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
                <Select value={bookingData.service} onValueChange={(value) => handleInputChange('service', value)}>
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
                <Select value={bookingData.meetingType} onValueChange={(value) => handleInputChange('meetingType', value)}>
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
                <Label htmlFor="preferredDate" className="text-sm font-semibold text-gray-700">
                  Preferred Date *
                </Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={bookingData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700">
                  Preferred Time *
                </Label>
                <Select value={bookingData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
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
                <Select value={bookingData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
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
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                Additional Information
              </Label>
              <div className="relative mt-1">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Textarea
                  id="message"
                  value={bookingData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
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
                onClick={() => setIsBookingModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !bookingData.name || !bookingData.email || !bookingData.service || !bookingData.preferredDate || !bookingData.preferredTime || !bookingData.timezone || !bookingData.meetingType}
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
    </section>
  );
};

export default CTASection;