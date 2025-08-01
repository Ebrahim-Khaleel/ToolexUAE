import { ArrowLeft } from "lucide-react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/types";
import { ProductDetailClient } from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product: Product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name, description, "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!product) {
    return { title: "Product Not Found" };
  }
  
  return {
    title: `${product.name} | ToolexUAE`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ToolexUAE`,
      description: product.description,
      images: product.imageUrl ? [product.imageUrl] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product: Product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "imageUrl": image.asset->url,
      description,
      category,
      inStock,
      specifications,
      "slug": slug.current,
      dataSheet {
        asset-> {
          url
        }
      }
    }`,
    { slug }
  );
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
        
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
