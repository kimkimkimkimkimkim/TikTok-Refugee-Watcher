import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TikTok Refugee Crisis: Live Updates & Impact Analysis | Breaking News 2024",
  description: "Stay informed about the TikTok Refugee situation with real-time updates, expert analysis, and community impact reports. Comprehensive coverage of policy changes, business implications, and global responses to the TikTok ban crisis.",
  keywords: "tiktok refugee, tiktok ban, tiktok crisis 2024, social media exodus, tiktok alternatives, digital migration, content creator crisis, social media policy, tiktok business impact, digital platform transition, social media regulation, content creator adaptation"
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
        {children}
      </body>
    </html>
  );
}
