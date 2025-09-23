"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
      <ClerkProvider 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => Router.push(to)}
      >
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${inter.className}antialiased`}
      >

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
            <Header/>
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
