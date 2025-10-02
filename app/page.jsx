import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";
import { SpotlightPage } from "./pages/SpotlightPage";
import { WavyBackgroundPage } from "./pages/WavyBackground";
import Statistics from "@/components/Statistics";
import { FeaturesSectionDemo } from "./pages/FeaturesPage";
import { HowItWorks } from "./pages/HowItWorks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CoverDemo } from "./pages/Cover";
import FooterPro from "@/components/FooterPro";
import { Reveal, RevealItem } from "@/components/ui/reveal";

export default function Home() {
  const faqItems = [
    {
      q: "What is the AI Career Coach?",
      a: "It's an AI-powered assistant that provides personalized career guidance, interview preparation, resume feedback, and job search support.",
    },
    {
      q: "How does interview preparation work?",
      a: "Practice with mock interviews tailored to your role and level. Get instant feedback on your responses, structure, and keywords recruiters look for.",
    },
    {
      q: "Can it improve my resume and LinkedIn?",
      a: "Yes. Upload your resume or profile, and the coach suggests quantified bullet points, ATS-friendly formatting, and keyword optimization for target roles.",
    },
    {
      q: "Is my data private?",
      a: "We don't sell your data. Your uploads are encrypted and you can delete them anytime from your account settings.",
    },
    {
      q: "What roles and industries are supported?",
      a: "We cover engineering, product, design, data, marketing, sales, and more—across startups to enterprises in 50+ industries.",
    },
    {
      q: "Does it support behavioral and system design interviews?",
      a: "Yes. You'll get structured frameworks like STAR for behavioral and step-by-step guidance for architecture/systems questions.",
    },
    {
      q: "How much does it cost?",
      a: "There's a free tier to try the basics. Pro unlocks unlimited practice, advanced feedback, and personalized roadmaps.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen w-full  ">
      {/* Landing Page */}
      <section
        id="home"
        className="relative flex items-center justify-center h-screen w-full"
      >
        <SpotlightPage className="w-full h-full" />
      </section>
      <br />
      {/* Features */}
      <Reveal as="div" id="features">
        <h1 className="text-4xl font-mono font-light flex justify-center mb-10 items-center mt-8">
          Powerful Features for your Career Growth
        </h1>
        <section className="relative flex items-center justify-center  w-full">
          <RevealItem>
            <FeaturesSectionDemo />
          </RevealItem>
        </section>
        <br />
      </Reveal>

      {/* Statistics */}
      <Reveal
        as="section"
        id="statistics"
        className="relative flex items-center justify-center w-full py-20"
      >
        <RevealItem>
          <Statistics />
        </RevealItem>
      </Reveal>
      <div>
        <h1
          id="how-it-works"
          className="text-4xl font-mono font-light flex justify-center mb-10 items-center mt-8"
        >
          How Trivia Works
        </h1>
        <section className="relative flex items-center justify-center max-w-full ">
          <RevealItem>
            <HowItWorks />
          </RevealItem>
        </section>
        <Reveal
          as="section"
          id="faq"
          className="relative flex flex-col gap-6 items-center justify-center w-full  py-7"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-light">
            Frequently Asked Questions
          </h2>
          <div className="w-full max-w-4xl px-6">
            <RevealItem>
              <Accordion type="single" collapsible>
                {faqItems.map((item, idx) => (
                  <AccordionItem key={item.q} value={`item-${idx + 1}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealItem>
          </div>
        </Reveal>
        <Reveal>
          <CoverDemo />
        </Reveal>
      </div>
      <FooterPro />
    </div>
  );
}
