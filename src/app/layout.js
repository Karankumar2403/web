import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/navbar/Sidebar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      

      <body className={`${inter.className} bg-[#0D1116] text-white`}>
        <Navbar />
        <Sidebar />

        {children}
        <Analytics />

        <Footer />
      </body>

      


      

    </html>
  );
}
