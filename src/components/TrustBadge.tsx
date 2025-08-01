import React from 'react';
import { Shield, Truck, Clock, Star } from 'lucide-react';

interface TrustBadgeProps {
  variant?: 'default' | 'compact' | 'featured';
  showRating?: boolean;
  showDelivery?: boolean;
  showWarranty?: boolean;
  showSupport?: boolean;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({
  variant = 'default',
  showRating = true,
  showDelivery = true,
  showWarranty = true,
  showSupport = true,
}) => {
  const badgeItems = [];
  
  if (showRating) {
    badgeItems.push({
      icon: Star,
      text: '4.8★ Rating',
      subtext: 'Trusted by 1000+',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    });
  }
  
  if (showDelivery) {
    badgeItems.push({
      icon: Truck,
      text: 'Same Day Delivery',
      subtext: 'Orders over AED 2000',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    });
  }
  
  if (showWarranty) {
    badgeItems.push({
      icon: Shield,
      text: 'Extended Warranty',
      subtext: 'Up to 3 years',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    });
  }
  
  if (showSupport) {
    badgeItems.push({
      icon: Clock,
      text: '24/7 Support',
      subtext: 'Technical assistance',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    });
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2">
        {badgeItems.map((badge, index) => (
          <div key={index} className="flex items-center space-x-1 text-xs">
            <badge.icon className={`h-3 w-3 ${badge.color}`} />
            <span className="font-medium text-gray-700">{badge.text}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center justify-center space-x-6">
          {badgeItems.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`p-2 rounded-full ${badge.bgColor}`}>
                <badge.icon className={`h-5 w-5 ${badge.color}`} />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">{badge.text}</div>
                <div className="text-xs text-gray-600">{badge.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badgeItems.map((badge, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors">
          <div className={`p-2 rounded-full ${badge.bgColor}`}>
            <badge.icon className={`h-5 w-5 ${badge.color}`} />
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-900">{badge.text}</div>
            <div className="text-xs text-gray-600">{badge.subtext}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadge; 