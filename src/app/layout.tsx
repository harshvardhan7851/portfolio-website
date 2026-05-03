import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshvardhansinh Vaghela | AI/ML & Full-Stack Developer",
  description: "Portfolio of Harshvardhansinh Vaghela, specializing in Data Science, Machine Learning, and Scalable Backend Systems. Building the future with AI.",
  keywords: ["AI Developer", "ML Engineer", "Data Science", "Next.js Portfolio", "Python Developer", "FastAPI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
