"use client"
import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default  function Header({user}) {
  // supports-[backdrop-filter]:bg-background/60
  return (
   <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full border backdrop-blur-md bg-transparent shadow-lg w-[40%] max-w-6xl">
  <nav className="flex items-center justify-between h-16 px-6">
    <Link href="/" className="flex items-center space-x-2">
      {/* <Image
        src={"/logo.png"}
        alt="Sensai Logo"
        width={200}
        height={60}
        className="h-12 py-1 w-auto object-contain"
      /> */}
      <h1 className="text-3xl font-light">Trivia</h1>
    </Link>

    {/* Action Buttons */}
    <div className="flex items-center space-x-2 md:space-x-4">
      <SignedIn>
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="hidden md:inline-flex items-center gap-2"
          >
            <LayoutDashboard className="h-4 w-4" />
            Industry Insights
          </Button>
          <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link>

        {/* Growth Tools Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2">
              <StarsIcon className="h-4 w-4" />
              <span className="hidden md:block">Growth Tools</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/resume" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Build Resume
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/ai-cover-letter" className="flex items-center gap-2">
                <PenBox className="h-4 w-4" />
                Cover Letter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/interview" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Interview Prep
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-12 h-12",
              userButtonPopoverCard: "shadow-xl",
              userPreviewMainIdentifier: "font-semibold",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </nav>
</header>

  );
}