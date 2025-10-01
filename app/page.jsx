import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";
import { SpotlightPage } from "./pages/SpotlightPage";
import { WavyBackgroundPage } from "./pages/WavyBackground";
import Statistics from "@/components/Statistics";
import { FeaturesSectionDemo } from "./pages/FeaturesPage";
import { HowItWorks } from "./pages/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full  ">
      {/* Landing Page */}
      <section className="relative flex items-center justify-center h-screen w-full">
        <SpotlightPage className="w-full h-full" />
      </section>
      <br />
      {/* Features */}
      <div>
        <h1 className="text-4xl font-mono font-light flex justify-center mb-10 items-center mt-8">
          Powerful Features for your Career Growth
        </h1>
        <section className="relative flex items-center justify-center  w-full">
          <FeaturesSectionDemo />
        </section>
        <br />
      </div>

      {/* Statistics */}
      <section className="relative flex items-center justify-center w-full py-20">
        <Statistics />
      </section>
      {/* How it Works  */}
      <div>
      <h1 className="text-4xl font-mono font-light flex justify-center mb-10 items-center mt-8">
          How Trivia Works
        </h1>
      <section className="relative flex items-center justify-center w-full ">
        <HowItWorks />
     </section>
      </div>
    </div>
  );
}
