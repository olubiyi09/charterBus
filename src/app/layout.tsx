import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import LayoutProvider from "@/components/LayoutProvider";


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
    <ReduxProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </ReduxProvider>
  );
}
