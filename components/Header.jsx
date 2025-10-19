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
  <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] max-w-6xl rounded-full border backdrop-blur-md bg-transparent shadow-lg transition-all duration-300">
  <nav className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
      <h1 className="text-2xl sm:text-3xl font-light">Trivia</h1>
    </Link>

    {/* Action Buttons */}
    <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
      <SignedIn>
        {/* Dashboard Button */}
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 text-sm"
          >
            <LayoutDashboard className="h-4 w-4" />
            Industry Insights
          </Button>
          {/* Mobile Dashboard Icon */}
          <Button variant="ghost" className="md:hidden w-9 h-9 p-0">
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link>

        {/* Growth Tools Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-1 sm:gap-2 text-sm px-3">
              <StarsIcon className="h-4 w-4" />
              <span className="hidden sm:block">Tools</span>
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

      {/* Sign In / User Button */}
      <SignedOut>
        <SignInButton>
          <Button variant="outline" className="text-sm px-3 py-1">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 sm:w-12 sm:h-12",
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