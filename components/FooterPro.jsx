"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function FooterPro() {
  return (
    <footer className="relative w-full border-t border-neutral-800/60 bg-neutral-950/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/30">
      {/* subtle top glow divider */}
      <div className="pointer-events-none absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-6xl w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Brand + About */}
          <div>
            <Link href="/" className="inline-flex items-baseline group">
              <span className="text-3xl font-light tracking-tight text-white">
                Trivia
              </span>
              <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="mt-4 text-neutral-400 leading-relaxed max-w-prose">
              Trivia is your AI career Guide. Practice interviews, polish your
              resume, and get role‑specific guidance to accelerate your growth.
            </p>

            {/* Unique touch: small stat chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-neutral-800/80 px-3 py-1 text-xs text-neutral-300">
                AI‑powered
              </span>
              <span className="rounded-full border border-neutral-800/80 px-3 py-1 text-xs text-neutral-300">
                ATS‑friendly
              </span>
              <span className="rounded-full border border-neutral-800/80 px-3 py-1 text-xs text-neutral-300">
                Real mock interviews
              </span>
            </div>
          </div>

          {/* Links + Socials */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-neutral-200">
                Navigate
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition-colors"
                    href="#how-it-works"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-200">
                Connect
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    href="mailto:fardeenkhan@example.com"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    href="tel:+910000000000"
                  >
                    <Phone className="h-4 w-4" /> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-800/60 pt-6">
          <p className="text-xs text-neutral-500">
            Made by <span className="text-neutral-300">Fardeen Khan</span> •
            2025 • All rights reserved
          </p>
          <div className="text-xs text-neutral-500">
            <span>Privacy</span>
            <span className="mx-2 opacity-40">•</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
