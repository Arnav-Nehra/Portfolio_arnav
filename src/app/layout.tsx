import type { Metadata } from "next";
import { Inter , Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


const raleway = Raleway({ 
  subsets: ['latin'], 
  variable: "--display-font"
})

const inter = Inter({
  subsets:['latin'],
  variable:"--display-inter"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange >
            {children}  

          </ThemeProvider>
      </body>
    </html>

  );
}
