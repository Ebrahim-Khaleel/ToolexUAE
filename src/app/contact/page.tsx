import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | ToolexUAE",
  description: "Get in touch with our team for expert advice, quotes, and support.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.toolexuae.com/contact",
  },
  openGraph: {
    title: "Contact Us | ToolexUAE",
    description: "Get in touch with our team for expert advice, quotes, and support.",
    url: "https://www.toolexuae.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ToolexUAE",
    description: "Get in touch with our team for expert advice, quotes, and support.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
