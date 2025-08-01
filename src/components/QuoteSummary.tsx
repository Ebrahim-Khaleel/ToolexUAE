import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useCart } from '../hooks/use-cart';
import Image from 'next/image';

const QuoteSummary = () => {
  const { items, getTotalItems } = useCart();

  return (
    <div className="sticky top-8">
      <Card className="bg-white border-2 border-blue-100 shadow-lg">
        <CardHeader className="bg-blue-950 text-white rounded-t-lg p-3 sm:p-4">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
            <ShoppingCart className="h-5 w-5" />
            Quote Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center pb-2 border-b-2 border-gray-100">
              <span className="font-medium text-blue-950 text-xs sm:text-base">Total Items:</span>
              <span className="font-bold text-red-600 text-base sm:text-lg">{getTotalItems()}</span>
            </div>
            
            <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
              <h4 className="font-semibold text-blue-950 text-xs sm:text-sm">Items for Quote:</h4>
              {items.map((item) => (
                <div key={item._id} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-blue-950 truncate">
                      {item.name}
                    </p>
                    <div className="flex justify-between text-[10px] sm:text-xs text-blue-600">
                      <span>{item.category}</span>
                      <span className="font-semibold">Qty: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-3 sm:pt-4 border-t-2 border-gray-100">
              <p className="text-[10px] sm:text-xs text-blue-900 bg-blue-50 p-2 sm:p-3 rounded-lg">
                💡 Complete the form to receive a detailed quote for all these items with competitive pricing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteSummary;
