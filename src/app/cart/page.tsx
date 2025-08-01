'use client';

import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cart - ToolexUAE",
  description: "Your shopping cart for professional equipment and tools",
};

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalItems } = useCart();

  const handleUpdateQuantity = (id: string, newQuantity: number, productName: string) => {
    updateQuantity(id, newQuantity);
    if (newQuantity === 0) {
      toast.success(`${productName} removed from cart`);
    } else {
      toast.success(`Updated quantity for ${productName}`);
    }
  };

  const handleRemoveFromCart = (id: string, productName: string) => {
    removeFromCart(id);
    toast.success(`${productName} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared successfully');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Cart</li>
          </ul>
        </nav>
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Quote Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 mx-auto text-gray-400 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some products to get started with your quote</p>
            <Link href="/products">
              <Button size="lg" className="bg-blue-950 hover:bg-blue-900">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Cart Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b gap-2 sm:gap-0">
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Clear All
                </Button>
              </div>
              {/* Cart Items */}
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <Card key={item._id} className="overflow-hidden">
                    <CardContent className="p-3 sm:p-6">
                      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
                        <div className="flex-shrink-0 mx-auto xs:mx-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0 text-center xs:text-left">
                          <Link href={`/products/${item.slug || item._id}`}>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-950 transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.category}</p>
                          <div className="flex flex-col sm:flex-row items-center justify-between mt-2 sm:mt-4 gap-2 sm:gap-0">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUpdateQuantity(item._id, item.quantity - 1, item.name)}
                                className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-base sm:text-lg font-medium w-8 sm:w-12 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUpdateQuantity(item._id, item.quantity + 1, item.name)}
                                className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleRemoveFromCart(item._id, item.name)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Right Side - Actions */}
            <div className="lg:col-span-1 mt-6 lg:mt-0">
              <div className="sticky top-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-3 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Cart Summary</h2>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center text-base sm:text-lg font-semibold pb-3 sm:pb-4 border-b">
                        <span>Total Items:</span>
                        <span className="text-blue-950">{getTotalItems()}</span>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-xs sm:text-sm text-gray-600">
                          Ready to get a quote for these items? Request a detailed quote or contact us via WhatsApp.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                          <Button 
                            asChild
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            <a
                              href={`https://wa.me/971586900124?text=Hi, I'm interested in a quote for my cart with ${getTotalItems()} items.`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp for Quote
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
