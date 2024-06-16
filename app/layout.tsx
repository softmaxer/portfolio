import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";

//const inter = Inter({ subsets: ["latin"] });

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
      <body className="flex flex-row justify-around divide-x divide-white divide-opacity-15">
        <Sidebar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
