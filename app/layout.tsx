import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banks Nussman",
  description: "Software Engineer @ Linode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
