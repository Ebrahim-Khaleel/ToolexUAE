import { ArrowLeft } from "lucide-react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/types";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const product: Product | null = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name, description, "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!product) {
    return {
      title: "Product Not Found | ToolexUAE",
      description: "This product could not be found.",
    };
  }

  return {
    title: `${product.name} | ToolexUAE`,
    description: product.description || `${product.name} - Available at ToolexUAE`,
    openGraph: {
      title: `${product.name} | ToolexUAE`,
      description: product.description || `${product.name} - Available at ToolexUAE`,
      images: product.imageUrl ? [product.imageUrl] : [],
      type: "website",
      url: `https://www.toolexuae.com/products/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ToolexUAE`,
      description: product.description || `${product.name} - Available at ToolexUAE`,
      images: product.imageUrl ? [product.imageUrl] : [],
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `https://www.toolexuae.com/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const product: Product | null = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "imageUrl": image.asset->url,
      description,
      category,
      inStock,
      specifications,
      slug,
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