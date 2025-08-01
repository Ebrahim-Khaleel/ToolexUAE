import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;

  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
  fill?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,

  sizes = '100vw',
  priority = false,
  fallbackSrc = '/placeholder-image.jpg',
  fill = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const imageSrc = imageError ? fallbackSrc : src;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          'object-cover transition-opacity duration-300',
          fill ? 'w-full h-full' : '',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage; 