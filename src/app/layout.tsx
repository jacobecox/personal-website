import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Cox | Full Stack Software Engineer",
  description:
    "Personal portfolio of Jacob Cox — full stack software engineer and cloud architect. Building modern web applications that solve real problems.",
  metadataBase: new URL("https://jacobcox.dev"),
  openGraph: {
    title: "Jacob Cox | Full Stack Software Engineer",
    description:
      "Building modern web applications and cloud infrastructure that solve real problems.",
    url: "https://jacobcox.dev",
    siteName: "Jacob Cox",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Cox | Full Stack Software Engineer",
    description:
      "Building modern web applications and cloud infrastructure that solve real problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
