import { Metadata } from 'next';
import CartContent from './CartContent';

export const metadata: Metadata = {
  title: "Cart | ToolexUAE",
  description: "Your shopping cart for professional equipment and tools",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.toolexuae.com/cart",
  },
  openGraph: {
    title: "Cart | ToolexUAE",
    description: "Your shopping cart for professional equipment and tools",
    url: "https://www.toolexuae.com/cart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cart | ToolexUAE",
    description: "Your shopping cart for professional equipment and tools",
  },
};

export default function CartPage() {
  return <CartContent />;
}
