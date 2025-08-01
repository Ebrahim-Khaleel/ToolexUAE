'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

interface ProductsContentProps {
  products: Product[];
  searchTerm?: string;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  productsPerPage: number;
}

export default function ProductsContent({
  products,
  searchTerm = '',
  currentPage,
  totalPages,
  totalProducts,
  productsPerPage
}: ProductsContentProps) {  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function to create URL search params safely
  const createSearchParams = (params: Record<string, string>) => {
    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });
    return urlParams.toString();
  };

  if (!isClient) {
    return null; // Or a loading state
  }

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfFirstProduct + productsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Products</li>
          </ul>
        </nav>
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {currentProducts.length} of {totalProducts} products
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {currentProducts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              currentProducts.map((product) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  variant="default"
                  showDescription={false}
                />
              ))
            )}
          </div>
          
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href={currentPage > 1 ? `?${createSearchParams({ q: searchTerm, page: (currentPage - 1).toString() })}` : '#'}
                      className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href={`?${createSearchParams({ q: searchTerm, page: (i + 1).toString() })}`}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href={currentPage < totalPages ? `?${createSearchParams({ q: searchTerm, page: (currentPage + 1).toString() })}` : '#'}
                      className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
      
      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
