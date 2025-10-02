import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button"; // assuming you have shadcn/ui
import { HoverBorderGradientDemo } from "./HoverButton";
import Link from "next/link";

export function SpotlightPage() {
  return (
    <>
      <div className="relative flex min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased items-center justify-center">
        {/* Top-left brand link (visible only on this page) */}
        <Link href="/" className="fixed top-3 left-4 z-[6000]">
          <h1 className="text-2xl md:text-3xl font-light">Trivia</h1>
        </Link>
        {/* Grid Background with Vignette */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 select-none",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent,rgba(0,0,0,0.9))]" />

        {/* Spotlight */}
        <Spotlight
          className="absolute -top-20 left-1/2 -translate-x-1/2 md:-top-32 md:left-1/2"
          fill="white"
        />

        {/* Text Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          {/* <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-light text-transparent sm:text-6xl md:text-7xl leading-tight">
         Trivia 
        </h1> */}

          <h1 className="text-4xl font-mono sm:text-6xl md:text-7xl leading-tight">
            <AnimatedWords text="Your AI Career Coach for" stagger={0.22} />
            <br />
            <AnimatedWords
              text="Professional Success"
              delayStart={0.8}
              stagger={0.22}
            />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-normal text-neutral-400">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <HoverBorderGradientDemo />
          </div>
        </div>
      </div>
    </>
  );
}

function AnimatedWords({ text, delayStart = 0, stagger = 0.12 }) {
  const tokens = text.match(/\S+|\s+/g) || [];
  let wordIndex = 0;
  return (
    <span aria-label={text} className="whitespace-pre-wrap">
      {tokens.map((token, index) => {
        const isWord = /\S/.test(token);
        if (!isWord) {
          return <span key={`space-${index}`}>{token}</span>;
        }
        const delay = delayStart + wordIndex * stagger;
        wordIndex += 1;
        return (
          <span
            key={`word-${index}`}
            className="fall-in bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600"
            style={{ animationDelay: `${delay}s` }}
          >
            {token}
          </span>
        );
      })}
    </span>
  );
}
