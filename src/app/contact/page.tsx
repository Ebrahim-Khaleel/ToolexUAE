import ContactForm from './ContactForm';
import { getPageSeo } from '@/lib/getPageSeo';

export async function generateMetadata() {
  return await getPageSeo("/contact");
}

export default function ContactPage() {
  return <ContactForm />;
}
