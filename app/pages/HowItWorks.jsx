"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function HowItWorks() {
  return (
    <div className="h-[20rem] w-full max-w-6xl mx-auto px-4 sm:px-6 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    step: "Step 1",
    quote:
      "Sign up and create your profile by adding your career interests, skills, and goals.",
    name: "Onboarding",
    title: "Personalized Career Setup",
  },
  {
    step: "Step 2",
    quote:
      "Take AI-powered quizzes and interactive trivia to discover your strengths and areas to improve.",
    name: "AI Assessment",
    title: "Skill Gap Analysis",
  },
  {
    step: "Step 3",
    quote:
      "Receive tailored career guidance and learning roadmaps to build in-demand skills.",
    name: "Guidance",
    title: "Learning Recommendations",
  },
  {
    step: "Step 4",
    quote:
      "Practice mock interviews with instant AI feedback and improve your confidence.",
    name: "Practice",
    title: "Interview Preparation",
  },
  {
    step: "Step 5",
    quote:
      "Build your resume, get career tips, and connect with mentors to achieve your goals.",
    name: "Grow",
    title: "Career Success",
  },
];
