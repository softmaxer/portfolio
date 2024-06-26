import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sriram Vadlamani",
  description: "A portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row justify-evenly">
          <Sidebar />
          <main className="flex min-h-screen flex-col items-center justify-between p-44">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
