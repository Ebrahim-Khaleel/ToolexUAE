import Link from 'next/link';
import { ReactNode } from 'react';

interface SafeLinkProps {
  href: string | undefined | null;
  children: ReactNode;
  className?: string;
  fallbackHref?: string;
  [key: string]: unknown;
}

export function SafeLink({ 
  href, 
  children, 
  className, 
  fallbackHref = '/products',
  ...props 
}: SafeLinkProps) {
  // Ensure we always have a valid href
  const safeHref = href && href !== 'undefined' && href.trim() !== '' 
    ? href 
    : fallbackHref;

  return (
    <Link href={safeHref} className={className} {...props}>
      {children}
    </Link>
  );
}
