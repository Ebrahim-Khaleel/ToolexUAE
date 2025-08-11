import { Providers } from "../components/providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { Suspense } from "react";
import { getPageSeo } from "@/lib/getPageSeo";

export async function generateMetadata() {
  return await getPageSeo("/");
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        </Providers>
      </body>
    </html>
  );
}
