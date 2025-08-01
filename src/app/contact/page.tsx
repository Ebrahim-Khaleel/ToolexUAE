import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact Us - ToolexUAE",
  description: "Get in touch with our team for expert advice, quotes, and support.",
};

export default function ContactPage() {
  return <ContactForm />;
}
