import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import Logo from "../public/assets/logo.png";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Chris M. Full-Stack Developer",
  description: "Portfolio",
  icons: [{ rel: "icon", url: Logo.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <div className=""></div>
      </body>
    </html>
  );
}
