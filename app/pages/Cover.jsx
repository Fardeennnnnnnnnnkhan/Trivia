import { Cover } from "@/components/ui/cover";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CoverDemo() {
  return (
    <section className="relative w-full py-24 sm:py-28 md:py-32">
      {/* Soft top-to-bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-200/30 via-transparent to-black/60 dark:from-white/10 dark:via-transparent dark:to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Ready to <Cover>Accelerate</Cover> Your Career? 
        </h2>
        <p className="mt-4 md:mt-5 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
          Join thousands of professionals who are advancing their careers with
          AI-powered guidance.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm md:text-base shadow-sm hover:bg-neutral-800 transition-colors"
          >
            Start Your Journey Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
