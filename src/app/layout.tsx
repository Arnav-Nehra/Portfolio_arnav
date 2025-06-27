import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600","700"],
  style: ["normal", "italic"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arnav Nehra",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        suppressHydrationWarning={true}
        className={cn(raleway.variable, "font-raleway")}
      >
        <div className="">
        
           <ThemeProvider attribute="class" enableSystem defaultTheme="system">{children} </ThemeProvider>
        </div>
      </body>
    </html>

  );
}
