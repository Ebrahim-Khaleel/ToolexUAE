import CartContent from './CartContent';
import { getPageSeo } from '@/lib/getPageSeo';

export async function generateMetadata() {
  return await getPageSeo("/cart");
}


export default function CartPage() {
  return <CartContent />;
}
