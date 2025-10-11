
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

import { Crimson_Pro } from "next/font/google";
import { neobrutalism } from "@clerk/themes";
import { FloatingNavDemo } from "./pages/FloatingNavbar";
import Link from "next/link";
import FloatingNavServer from "./pages/FloatingNavServer";

// load Crimson Pro
const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you need
  variable: "--font-crimson", // for CSS variable usage
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [neobrutalism],
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      // navigate={(to) => Router.push(to)}
    >
      <html lang="en" suppressHydrationWarning>
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
            {/* Top-left brand link */}
         
            {/* <Header /> */}
            {/* <FloatingNavDemo /> */}
            <FloatingNavServer/>
            {children}

            {/* <Header /> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
