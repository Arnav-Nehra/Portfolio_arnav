import type { Metadata } from "next";
import { Inter , Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { DockDemo } from "@/components/Navbar2";

const raleway = Raleway({ 
  subsets: ['latin'], 
  variable: "--display-font"
})

const inter = Inter({
  subsets:['latin'],
  variable:"--display-inter"
})

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
      <body
        suppressHydrationWarning={true}
        className={cn(
          'min-h-screen bg-background  antialiased',
          raleway.variable,
        )}
      >
        <div className="min-h-screen bg-white dark:bg-zinc-900 ">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange >
            <DockDemo></DockDemo>
            {children}  
          </ThemeProvider>
          </div>
      </body>
    </html>

  );
}
