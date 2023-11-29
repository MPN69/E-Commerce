import React from "react";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Products from "@/components/products/page";
import Home from "./page";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Home />
          <Products />
        </main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
