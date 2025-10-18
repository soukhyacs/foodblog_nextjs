import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soukhya's Food Blog",
  description: "Explore the best food spots!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}