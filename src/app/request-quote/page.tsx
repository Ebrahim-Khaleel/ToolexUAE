import { Metadata } from 'next';
import QuoteRequestContent from './QuoteRequestContent';

export const metadata: Metadata = {
  title: 'Request Quote | ToolexUAE',
  description: 'Request a detailed quote for your selected products from ToolexUAE.'
};

export default function RequestQuotePage() {
  return <QuoteRequestContent />;
}
