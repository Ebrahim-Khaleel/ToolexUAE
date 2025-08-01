'use client';

import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function CartContent() {
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
    toast.success('Cart cleared');
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Quote Cart ({getTotalItems()})</h1>
      </div>
      
      {items.length === 0 ? (
        <div className="text-center py-12 sm:py-16 bg-white rounded-lg shadow-sm p-6">
          <ShoppingCart className="h-20 w-20 sm:h-24 sm:w-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">Browse our products and add items to get a quote</p>
          <Link href="/products">
            <Button size="lg" className="bg-blue-950 hover:bg-blue-900 px-8">
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {items.map((item) => (
                <div key={item._id} className="flex items-start border-b pb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              item._id,
                              Math.max(1, (item.quantity || 0) - 1),
                              item.name
                            )
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1 w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(
                              item._id,
                              (item.quantity || 0) + 1,
                              item.name
                            )
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item._id, item.name)}
                        className="text-red-500 hover:text-red-600 ml-auto"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-6 border-t mt-6">
                <p className="text-sm text-gray-500">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart</p>
                <Button
                  variant="outline"
                  onClick={handleClearCart}
                  className="text-red-500 border-red-300 hover:bg-red-50"
                >
                  Clear All
                </Button>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Cart Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Items ({getTotalItems()}):</span>
                    <span className="font-medium">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <p className="text-sm text-gray-600">
                      Ready to proceed with your quote request? We&apos;ll get back to you with the best offer.
                    </p>
                    
                    <div className="space-y-3">
                      <Link href="/request-quote" className="block">
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white h-12 font-bold">
                          Request Detailed Quote
                        </Button>
                      </Link>
                      
                      <a 
                        href={`https://wa.me/971501234567?text=Quote%20Request%20for%20${getTotalItems()}%20items%20-%20${encodeURIComponent(items.map(item => `${item.name} (Qty: ${item.quantity})`).join(', '))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className="w-full bg-green-500 hover:bg-green-600 text-white h-12 font-bold"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 mr-2" />
                          Quick Quote on WhatsApp
                        </Button>
                      </a>
                    </div>
                    
                    <div className="pt-2 text-center">
                      <p className="text-xs text-gray-500">
                        Or continue <Link href="/products" className="text-blue-600 hover:underline">shopping</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
