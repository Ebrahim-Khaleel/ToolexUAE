'use client';

import { useState } from "react";
import { ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { toast } from 'sonner';
import type { Product } from "@/types";
import Image from 'next/image';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="space-y-4">
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.imageUrl || "/placeholder.jpg"}
            alt={product.name}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div className="space-y-4">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Product Description */}
          {/* <p className="text-lg text-gray-600">{product.description}</p> */}
          
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-red-500 hover:bg-red-600 py-3 text-lg font-semibold"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Quote
          </Button>
        </div>



        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <Truck className="h-4 w-4 text-blue-600" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="h-4 w-4 text-blue-600" />
            <span>Warranty</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <RotateCcw className="h-4 w-4 text-blue-600" />
            <span>Easy Returns</span>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="description">Description</TabsTrigger>
            {/* <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger> */}
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <Card>
              <CardContent className="p-6">
                {product.description ? (
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {product.description.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                      <li key={index} className="leading-relaxed">
                        {line.trim()}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No description available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <Card>
              <CardContent className="p-4">
                {product.specifications ? (
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium">{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No specifications available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-500">No features listed.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Product Datasheet */}
        {product.dataSheet?.asset?.url && (
          <div className="mt-6">
            <p className="text-red-500">
              Want more details?
            </p>
            <a
              href={product.dataSheet.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded mt-4 px-3 py-2 bg-blue-950 text-white"
            >
              Download Datasheet
            </a>
          </div>
        )}
      </div>
      
      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            const message = `Hi, I'm interested in ${product.name}. Could you please provide more details?`;
            window.open(
              `https://wa.me/971586900124?text=${encodeURIComponent(message)}`,
              '_blank'
            );
          }}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Get instant quote</span>
          <span className="inline sm:hidden">Get instant quote</span>
          <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  );
}
