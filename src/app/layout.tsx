import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const supreme = localFont({
  src: [
    {
      path: "../../public/fonts/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram - Portfolio",
  description: "Full Stack Developer & Entrepreneur building innovative online businesses with cutting-edge technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${supreme.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
