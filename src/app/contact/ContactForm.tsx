'use client';

import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Show success message
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-10 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Contact <span className="text-red-500">Us</span>
            </h1>
            <p className="text-base sm:text-xl text-blue-100 leading-relaxed">
              Get in touch with our team for expert advice, quotes, and support. 
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible. 
                For urgent inquiries, please call us directly.
              </p>
              {isSubmitted && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Message Sent!</AlertTitle>
                  <AlertDescription>
                    Thank you for contacting us. We&apos;ll get back to you soon!
                  </AlertDescription>
                </Alert>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    required 
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    className="w-full"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full"
                    placeholder="Equipment inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <Textarea 
                    required 
                    rows={6}
                    className="w-full"
                    placeholder="Please describe your equipment needs or inquiry..."
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            <div className="bg-gray-50 p-4 sm:p-8 rounded-lg mt-6 lg:mt-0">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Contact Us?
              </h3>
              <div className="space-y-3 sm:space-y-6">
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="bg-blue-950 p-1.5 sm:p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Expert Consultation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Get professional advice on the right equipment for your needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="bg-red-500 p-1.5 sm:p-2 rounded-full">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Custom Quotes</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Receive competitive pricing tailored to your requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="bg-blue-950 p-1.5 sm:p-2 rounded-full">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Quick Response</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">We respond to all inquiries within 2 hours during business days.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <Mail className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-600">info@toolex.ae</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <Phone className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Call Us</h4>
                      <p className="text-sm text-gray-600">+971 58 690 0124</p>
                      <p className="text-xs text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <MapPin className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Visit Us</h4>
                      <p className="text-sm text-gray-600">
                        Industrial Area 4,<br />
                        Sharjah, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1.5 rounded-full">
                      <Clock className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Working Hours</h4>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
