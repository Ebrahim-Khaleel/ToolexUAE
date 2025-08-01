import { Metadata } from 'next';
import CartContent from './CartContent';

export const metadata: Metadata = {
  title: "Cart - ToolexUAE",
  description: "Your shopping cart for professional equipment and tools",
};

export default function CartPage() {
  return <CartContent />;
}
