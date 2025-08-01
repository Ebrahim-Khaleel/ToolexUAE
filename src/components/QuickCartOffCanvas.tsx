import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useCart } from '../hooks/use-cart';
import Link from 'next/link';
import { toast } from 'sonner';
import Image from 'next/image';

const QuickCartOffCanvas = () => {
  const { items, updateQuantity, removeFromCart, getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative text-blue-950 hover:text-red-600 hover:bg-red-50">
          <ShoppingCart className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-blue-950">
            <ShoppingCart className="h-5 w-5" />
            Quick Cart ({getTotalItems()} items)
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-blue-900 mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm mb-4">Add some equipment to get started</p>
              <Link href="/products">
                <Button className="bg-blue-950 hover:bg-blue-900 text-white" onClick={() => setIsOpen(false)}>
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item._id} className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 p-2 sm:p-3 border-2 border-gray-100 hover:border-red-200 rounded-lg transition-colors">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded mx-auto xs:mx-0"
                    />
                    <div className="flex-1 min-w-0 text-center xs:text-left">
                      <h4 className="text-xs sm:text-sm font-medium text-blue-950 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-blue-600">{item.category}</p>
                      <div className="flex justify-center xs:justify-start items-center space-x-1 sm:space-x-2 mt-1 sm:mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateQuantity(item._id, item.quantity - 1, item.name)}
                          className="h-7 w-7 p-0 border-blue-950 text-blue-950 hover:bg-blue-50"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-xs sm:text-sm font-medium w-7 sm:w-8 text-center text-blue-950">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateQuantity(item._id, item.quantity + 1, item.name)}
                          className="h-7 w-7 p-0 border-blue-950 text-blue-950 hover:bg-blue-50"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveFromCart(item._id, item.name)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 mx-auto xs:mx-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-950">Total Items:</span>
                  <span className="font-bold text-red-600">{getTotalItems()}</span>
                </div>
                <div className="space-y-2">
                  <Link href="/cart" className="w-full">
                    <Button className="w-full bg-blue-950 hover:bg-blue-900 text-white" onClick={() => setIsOpen(false)}>
                      View Full Cart
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default QuickCartOffCanvas;
