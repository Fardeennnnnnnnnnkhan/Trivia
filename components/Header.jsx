"use client"

import React from "react"
import Link from "next/link"
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs"
import { Button, buttonVariants } from "@/components/ui/button"

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/60 backdrop-blur-xl supports-backdrop-filter:bg-white/50 dark:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4">
        <nav className="relative flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex min-w-0 items-center gap-2">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-foreground"
            >
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Trivia Career
              </span>
            </Link>
          </div>

          {/* Middle: Capsule navbar centered */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/80 bg-white/70 px-2 py-1 shadow-sm backdrop-blur-xl supports-backdrop-filter:bg-white/60">
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} rounded-full px-4`}
              >
                Home
              </Link>
              <Link
                href="/quizzes"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} rounded-full px-4`}
              >
                Quizzes
              </Link>
              <Link
                href="/careers"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} rounded-full px-4`}
              >
                Careers
              </Link>
              <Link
                href="/resources"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} rounded-full px-4`}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} rounded-full px-4`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Right: Auth controls */}
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">Sign up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
