import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon 3 Labs",
  description: "Rastreamento, tokenização e certificação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gradient-to-r from-green-600 to-indigo-600 text-white py-6 shadow-lg">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
