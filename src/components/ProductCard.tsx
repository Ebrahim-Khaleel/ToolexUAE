'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../hooks/use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { toast } from 'sonner';

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  inStock: boolean;
  slug: {
    current: string;
  };
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
  showDescription?: boolean;
}

const ProductCard = ({ product, variant = 'default', showDescription = false }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: 'Item has been added to your quote request.',
    });
  };

  // Ensure we have a valid slug with proper fallback handling
  const slug = product.slug?.current || product.slug || product._id || 'unknown';
  
  // Additional validation to ensure slug is a valid string
  const validSlug = typeof slug === 'string' && slug.trim() !== '' ? slug : product._id || 'unknown';

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200 overflow-hidden h-full flex flex-col ${
      variant === 'featured' ? '' : 'min-h-[400px]'
    }`}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <Link href={`/products/${validSlug}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-3 sm:p-6 flex flex-col flex-1">
        <Link href={`/products/${validSlug}`}>
          <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-4 group-hover:text-red-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {showDescription && product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {product.description}
          </p>
        )}
        
        <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white shadow-md"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Quote' : 'Out of Stock'}
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                `https://wa.me/971586900124?text=${encodeURIComponent(
                  `Hi, I'm interested in a quote for: ${product.name}`
                )}`,
                '_blank'
              );
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 mr-2" />
            Quick Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 