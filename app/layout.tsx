import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Shan Jiang's Website",
  description: "It's the website for me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Image
          src="/bg.jpg"
          alt="background of clouds"
          fill={true}
          loading="eager"
          fetchPriority="high"
          preload={true}
          quality={75}
          placeholder="blur"
          blurDataURL="/bg_placeholder.jpg"
          className="fixed! object-cover -z-10 bg-[#8d9194]"
        />
      </body>
    </html>
  );
}
