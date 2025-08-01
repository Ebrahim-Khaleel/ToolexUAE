import { z } from 'zod';

// Email validation schema
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address')
  .max(255, 'Email is too long');

// Phone validation schema
export const phoneSchema = z
  .string()
  .optional()
  .refine((val) => !val || /^[+]?[1-9][\d]{0,15}$/.test(val), {
    message: 'Invalid phone number format'
  });

// Name validation schema
export const nameSchema = z
  .string()
  .min(1, 'Name is required')
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name is too long')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

// Company validation schema
export const companySchema = z
  .string()
  .max(100, 'Company name is too long')
  .optional()

// Message validation schema
export const messageSchema = z
  .string()
  .min(1, 'Message is required')
  .max(1000, 'Message is too long')
  .optional();

// Quote form validation schema
export const quoteFormSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: companySchema,
  message: messageSchema,
});

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};

// Validate and sanitize form data
export const validateAndSanitizeForm = (data: unknown) => {
  try {
    const validated = quoteFormSchema.parse(data);
    return {
      ...validated,
      fullName: sanitizeInput(validated.fullName),
      email: validated.email.toLowerCase().trim(),
      phone: validated.phone ? sanitizeInput(validated.phone) : '',
      company: validated.company ? sanitizeInput(validated.company) : '',
      message: validated.message ? sanitizeInput(validated.message) : '',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw error;
  }
};

// Quote form validation schema
export const contactFormSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: companySchema,
  message: messageSchema,
}); 