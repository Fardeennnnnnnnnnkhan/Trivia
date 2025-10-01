"use client";
import React from "react";

const stats = [
  { value: "50+", label: "Industries Covered" },
  { value: "1000+", label: "Interview Questions" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "AI Support" },
];

export default function Statistics() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between rounded-xl border border-neutral-800/60 bg-neutral-950/50 backdrop-blur-sm">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="relative flex items-center justify-center py-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="mt-2 text-sm md:text-base text-neutral-400">
                  {item.label}
                </div>
              </div>
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-neutral-800" />
              )}
              {index % 2 === 0 && index < 2 && (
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-neutral-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
