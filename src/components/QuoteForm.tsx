'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useCart } from '../hooks/use-cart';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import config from '../lib/config';
import { validateAndSanitizeForm } from '../lib/validation';

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const QuoteForm = () => {
  const { items, getTotalItems } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Validate and sanitize form data
      const validatedData = validateAndSanitizeForm(data);
      
      // Prepare cart items for email
      const cartItems = items.map(item => 
        `- ${item.name} (Category: ${item.category}) - Quantity: ${item.quantity}`
      ).join('\n');

      // Prepare form data for Web3Forms
      const formData = {
        access_key: config.web3forms.accessKey,
        subject: `Quote Request - ${getTotalItems()} Items`,
        name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || 'Not provided',
        company: validatedData.company || 'Not provided',
        message: validatedData.message || 'No additional message',
        cartItems: cartItems,
        totalItems: getTotalItems().toString(),
        customMessage: `
          Quote Request Details:

          Customer Information:
          - Name: ${validatedData.fullName}
          - Email: ${validatedData.email}
          - Phone: ${validatedData.phone || 'Not provided'}
          - Company: ${validatedData.company || 'Not provided'}

          Requested Items (${getTotalItems()} total items):
          ${cartItems}

          Additional Message:
          ${validatedData.message || 'No additional message'}

          This quote request was submitted from the website cart.
        `
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Quote request sent successfully!', {
          description: 'We will get back to you within 24 hours with your detailed quote.',
        });
        reset();
        // Redirect after a delay
        setTimeout(() => {
          router.push('/cart');
        }, 2000);
      } else {
        throw new Error(result.message || 'Failed to send quote request');
      }
      
    } catch (error) {
      console.error('Error sending quote request:', error);
      
      if (error instanceof Error && error.message.includes('access_key')) {
        toast.error('Configuration Error', {
          description: 'Web3Forms access key is not configured. Please contact the administrator.',
        });
      } else {
        toast.error('Failed to send quote request', {
          description: 'Please try again or contact us directly via phone or WhatsApp.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-950">
          <Mail className="h-5 w-5" />
          Quote Request Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="fullName" className="text-xs sm:text-base text-blue-950">Full Name *</Label>
              <Input
                id="fullName"
                {...register('fullName', { required: 'Full name is required' })}
                className="mt-1 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-xs sm:text-base text-blue-950">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="mt-1 text-sm sm:text-base"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="phone" className="text-xs sm:text-base text-blue-950">Phone Number</Label>
              <Input
                id="phone"
                {...register('phone')}
                className="mt-1 text-sm sm:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-xs sm:text-base text-blue-950">Company Name</Label>
              <Input
                id="company"
                {...register('company')}
                className="mt-1 text-sm sm:text-base"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-xs sm:text-base text-blue-950">Additional Message</Label>
            <Textarea
              id="message"
              {...register('message')}
              className="mt-1 text-sm sm:text-base"
              rows={4}
              placeholder="Any specific requirements or questions about the quote..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Quote Request
                </>
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/cart')}
              className="flex-1"
            >
              Back to Cart
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
