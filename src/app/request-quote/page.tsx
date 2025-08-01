'use client';

import { ArrowLeft } from 'lucide-react';

import QuoteForm from '@/components/QuoteForm';
import QuoteSummary from '@/components/QuoteSummary';
import Link from 'next/link';

export default function RequestQuote() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2 text-blue-200">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
            <li>/</li>
            <li className="text-white">Request Quote</li>
          </ul>
        </nav>
        {/* Back Button */}
        <Link href="/cart" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Request Detailed Quote</h1>
          <p className="text-blue-200">
            Fill out the form below to receive a detailed quote for your selected items
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
          {/* Right Side - Cart Summary */}
          <div className="lg:col-span-1 mt-6 lg:mt-0">
            <QuoteSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
