import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Максим Якушенков, основатель студии yakushenkov.design",
  description: "Максим Якушенков, основатель студии yakushenkov.design",
};

const unbounded = Unbounded({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={unbounded.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
