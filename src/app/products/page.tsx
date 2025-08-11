import { client } from "@/lib/sanity";
import type { Product } from "@/types";
import ProductsContent from "./ProductsContent";
import { getPageSeo } from "@/lib/getPageSeo";

export async function generateMetadata() {
  return await getPageSeo("/products");
}

export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams?: Promise<{ q?: string; page?: string }> 
}) {
  // Await searchParams to get the actual values
  const resolvedSearchParams = await searchParams;
  
  // Fetch products from Sanity
  const products: Product[] = await client.fetch(`[
    ...*[_type == "product" && category in ["Machinery"]],
    ...*[_type == "product" && !(category in ["Machinery"])]
  ]{
    _id,
    name,
    "imageUrl": image.asset->url,
    description,
    category,
    inStock,
    "slug": slug.current,
    price,
    brand
  }`);

  // Get search and pagination params
  const searchTerm = resolvedSearchParams?.q || "";
  const currentPage = parseInt(resolvedSearchParams?.page || '1', 10);
  const productsPerPage = 12;
  
  // Filter products based on search term
  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : products;

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const totalProducts = filteredProducts.length;

  return (
    <ProductsContent 
      products={filteredProducts}
      searchTerm={searchTerm}
      currentPage={currentPage}
      totalPages={totalPages}
      totalProducts={totalProducts}
      productsPerPage={productsPerPage}
    />
  );
}