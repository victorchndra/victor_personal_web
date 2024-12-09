import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Victor Chandra",
  description: "Built with Next.js, Tailwind, and Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full h-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
        <div className="min-h-screen font-inter block px-2 md:px-0">
          <Header />
          <main className="flex-grow">
            <div className="mx-auto max-w-[1140px] px-4 space-y-16">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
