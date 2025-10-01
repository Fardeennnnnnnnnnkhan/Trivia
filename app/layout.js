"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

import { Crimson_Pro } from "next/font/google"
import { dark, neobrutalism } from "@clerk/themes";
import Footer from "@/components/ui/Footer";

// load Crimson Pro
const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you need
  variable: "--font-crimson",   // for CSS variable usage
})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [ neobrutalism],
    }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => Router.push(to)}
      >
    <html lang="en"  suppressHydrationWarning>
      <body
        // className={`${crimson.className} antialiased`}
        className={`$ antialiased`}
      >

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
                 <Header />
            {children}
            
            {/* <Header /> */}
          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
