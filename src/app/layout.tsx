import { Providers } from "../components/providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "./globals.css";
import { Suspense } from "react";
import { getPageSeo } from "@/lib/getPageSeo";

export async function generateMetadata() {
  const metadata = await getPageSeo("/");
  return {
    ...metadata,
    metadataBase: new URL('https://www.toolexuae.com'),
    openGraph: {
      ...metadata.openGraph,
      siteName: 'ToolexUAE',
      locale: 'en_US',
    },
    twitter: {
      ...metadata.twitter,
      site: '@ToolexUAE',
      creator: '@ToolexUAE',
    },
    verification: {
      // Add Google Search Console verification here when available
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a', // blue-950
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Header />
          <Suspense fallback={<div></div>}>
            <main className="min-h-screen">
              {children}
            </main>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
