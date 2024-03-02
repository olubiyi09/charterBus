import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Chater Bus",
  description: "We Are Best Bus Charter Service In The World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors position="top-right" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
