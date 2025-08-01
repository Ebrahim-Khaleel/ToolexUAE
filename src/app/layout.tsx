import { Providers } from "../components/providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ToolexUAE - Professional Equipment & Tools Platform",
  description: "Quality industrial equipment and professional tools. Same-day delivery across UAE with full warranty support.",
  metadataBase: new URL("https://www.toolexuae.com"),
  alternates: {
    canonical: "https://www.toolexuae.com",
  },
  verification: {
    google: "cA3AzunsU5kFU7PQwlttuDzOMMkqsKclyhSHpaENa2c",
  },
};

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
