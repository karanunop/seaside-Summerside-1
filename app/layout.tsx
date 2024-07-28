import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Seaside Landscaping",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content="Providing residential and commercial landscaping services to the greater Summerside area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="mt-auto bg-gray-300">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
