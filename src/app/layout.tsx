import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

// const interRegular = localFont({
//   src: "./fonts/Inter-Regular.ttf",
//   variable: "--font-inter-regular",
//   weight: "100 900",
// });

// const interBold = localFont({
//   src: "./fonts/Inter-Bold.ttf",
//   variable: "--font-inter-bold",
//   weight: "100 900",
// });

// const interMedium = localFont({
//   src: "./fonts/Inter-Medium.ttf",
//   variable: "--font-inter-medium",
//   weight: "100 900",
// });

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
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
