import { ArrowLeft } from "lucide-react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/types";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import type { Metadata } from "next";

/* ---------------------------
   Utility: normalize/validate params
   --------------------------- */
type ParamsShape = { slug: string };

// Disable caching for this page
export const revalidate = 0;
export const dynamic = "force-dynamic";

async function resolveParams(maybe: unknown): Promise<ParamsShape> {
  const candidate = (maybe as { params?: unknown })?.params ?? maybe;
  const resolved = await Promise.resolve(candidate) as unknown;

  if (
    typeof resolved === "object" &&
    resolved !== null &&
    "slug" in (resolved as Record<string, unknown>) &&
    typeof (resolved as Record<string, unknown>).slug === "string"
  ) {
    return { slug: (resolved as Record<string, unknown>).slug as string };
  }

  throw new Error("Missing or invalid route params (expected { slug: string })");
}

/* ---------------------------
   Static params for SSG
   --------------------------- */
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "product" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((p) => ({ slug: p.slug }));
}

/* ---------------------------
   Metadata: typed, no parent param
   --------------------------- */
export async function generateMetadata(props: unknown): Promise<Metadata> {
  const { slug } = await resolveParams(props);

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      description,
      "imageUrl": image.asset->url,
      seo {
        metaTitle,
        metaDescription,
        canonicalUrl,
        robots,
        openGraphImage { asset->{ url } },
        openGraphTitle,
        openGraphDescription
      }
    }`,
    { slug }
  );

  console.log("Product:", product);

  if (!product) {
    return {
      title: "Product Not Found | ToolexUAE",
      description: "This product could not be found.",
      robots: "noindex, nofollow",
    };
  }

  const title = product.seo?.metaTitle || `${product.name} | ToolexUAE`;
  const description = product.seo?.metaDescription || product.description || `${product.name} | ToolexUAE`;
  const imageUrl = product.seo?.openGraphImage?.asset?.url || product.imageUrl || "";
  const robotsConfig = product.seo?.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return {
    title,
    description,
    openGraph: {
      title: product.seo?.openGraphTitle || title,
      description: product.seo?.openGraphDescription || description,
      images: imageUrl ? [imageUrl] : [],
      type: "website",
      url: `https://www.toolexuae.com/products/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    robots: robotsConfig,
    alternates: {
      canonical: product.seo?.canonicalUrl || `https://www.toolexuae.com/products/${slug}`,
    },
  };
}

/* ---------------------------
   Page component: flexible props, normalized params
   --------------------------- */
export default async function ProductDetailPage(props: unknown) {
  const { slug } = await resolveParams(props);

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
      dataSheet { asset->{ url } }
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
