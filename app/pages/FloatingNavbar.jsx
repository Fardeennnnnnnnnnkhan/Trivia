"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  PenBox,
  FileText,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "How It Works",
      link: "#how-it-works",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "FAQ",
      link: "#faq",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav
        navItems={navItems}
        // leftSlot={
        //   <>
        //     {/* <Link href="/">
        //       <h1 className="text-xl font-light">Trivia</h1>
        //     </Link> */}
        //   </>
        // }
        rightSlot={
          <div className="flex items-center gap-2">
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Industry Insights
                </Button>
              </Link>
              {/* Mobile: icon-only Industry Insights */}
              <Link href="/dashboard" className="md:hidden">
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center w-10 h-10 p-0"
                >
                  <LayoutDashboard className="h-4 w-4" />
                </Button>
              </Link>
              <DropdownMenu>
                {/* Desktop: labeled Growth Tools */}
                <DropdownMenuTrigger asChild>
                  <Button className="hidden md:inline-flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span className="hidden md:block">Growth Tools</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                {/* Mobile: icon-only Growth Tools */}
                <DropdownMenuTrigger asChild>
                  <Button className="md:hidden inline-flex items-center justify-center w-10 h-10 p-0">
                    <PenBox className="h-4 w-4" />
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
                    <Link
                      href="/ai-cover-letter"
                      className="flex items-center gap-2"
                    >
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
                appearance={{ elements: { avatarBox: "w-10 h-10" } }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        }
      />
    </div>
  );
}
