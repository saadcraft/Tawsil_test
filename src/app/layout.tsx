import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Tawsil Star",
  description: "Delivery and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-gradient-to-r from-[#e2f5fc] to-[#e1e3f1]`}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
