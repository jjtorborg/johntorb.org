import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "./fonts";

export const metadata: Metadata = {
  title: "John Torborg | Full Stack Developer",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
