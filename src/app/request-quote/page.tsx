import QuoteRequestContent from './QuoteRequestContent';
import { getPageSeo } from '@/lib/getPageSeo';

export async function generateMetadata() {
  return await getPageSeo("/request-quote");
}

export default function RequestQuotePage() {
  return <QuoteRequestContent />;
}