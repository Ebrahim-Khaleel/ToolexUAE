'use client';

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - ToolexUAE",
  description: "Get in touch with our team for expert advice, quotes, and support.",
};

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
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
              We&apos;re here to help you find the right equipment for your needs.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-blue-950 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                <p className="text-gray-600 text-sm sm:text-base">+971 58 690 0124</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Available 24/7</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-red-500 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base">enquiry@toolexuae.com</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Quick response</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-blue-950 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Location</h3>
                <p className="text-gray-600">We&apos;re here to help with all your equipment needs.</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Serving all Emirates</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="bg-red-500 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm sm:text-base">Sun - Thu: 8AM - 6PM</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Sat: 9AM - 2PM</p>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a <span className="text-red-500">Message</span>
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and we&apos;ll get back to you as soon as possible. 
                For urgent inquiries, please call us directly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold"
                >
                  Send Message
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
                    <p className="text-gray-600 mb-6">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                    <p className="text-gray-600 text-xs sm:text-sm">We respond to all inquiries within 2 hours during business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="bg-red-500 p-1.5 sm:p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Local Support</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">UAE-based team with deep understanding of local market needs.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-8 p-3 sm:p-4 bg-white rounded-lg border-l-4 border-red-500">
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong>Quick Tip:</strong> For faster service, include your specific equipment requirements 
                  and project timeline in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
