import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Punky",
  description:
    "The stray shiba lnu in the cyber world who is looking for its owner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="dark text-white w-screen h-screen bg-gradient-to-b from-black from-80% to-purple-950">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
