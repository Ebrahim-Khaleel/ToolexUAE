import { client } from "@/lib/sanity";
import type { Metadata } from "next";

export async function getPageSeo(path: string): Promise<Metadata> {
  // Always ensure trailing slash consistency
  const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

  const query = `
    *[_type == "siteSettings"][0].pages[path == $path][0]{
      seo {
        metaTitle,
        metaDescription,
        canonicalUrl,
        robots,
        openGraphImage { asset->{ url } },
        openGraphTitle,
        openGraphDescription
      }
    }
  `;

  const result = await client.fetch(query, { path: normalizedPath });
  const seo = result?.seo || null;

  if (!seo) {
    return {
      title: "Page Not Found",
      description: "This page could not be found.",
      robots: "noindex, nofollow"
    };
  }

  const title = seo.metaTitle || "Default Title";
  const description = seo.metaDescription || "Default description";
  const imageUrl = seo.openGraphImage?.asset?.url || "";
  const robotsConfig = seo.robots || "index, follow";

  return {
    title,
    description,
    openGraph: {
      title: seo.openGraphTitle || title,
      description: seo.openGraphDescription || description,
      images: imageUrl ? [imageUrl] : [],
      type: "website",
      url: seo.canonicalUrl || undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : []
    },
    robots: robotsConfig,
    alternates: {
      canonical: seo.canonicalUrl || undefined
    }
  };
}
