import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Deli",
  description:
    "Welcome to Your Deli App, your trusted local delivery app that simplifies your daily life. Whether it's groceries, essentials, or special treats, Your Deli connects you with nearby stores and businesses, making errands a breeze.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
