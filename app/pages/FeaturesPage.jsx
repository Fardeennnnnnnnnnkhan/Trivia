import { cn } from "@/lib/utils";
import { 
    IconBrain, 
    IconMessages, 
    IconSchool, 
    IconChartBar, 
    IconUsers, 
    IconRocket, 
    IconHelp, 
    IconHeartHandshake 
  } from "@tabler/icons-react";
  
export function FeaturesSectionDemo() {
      const features = [
        {
          title: "AI Career Guidance",
          description:
            "Get personalized career advice powered by AI to help you choose the right path.",
          icon: <IconBrain />,
        },
        {
          title: "Interactive Mock Interviews",
          description:
            "Practice real interview scenarios with instant AI feedback to boost confidence.",
          icon: <IconMessages />,
        },
        {
          title: "Skill Gap Analysis",
          description:
            "Discover your strengths and weaknesses with AI-driven skill assessment.",
          icon: <IconChartBar />,
        },
        {
          title: "Learning Roadmaps",
          description:
            "Receive tailored study plans and resources to upskill and land your dream job.",
          icon: <IconSchool />,
        },
        {
          title: "Resume & Portfolio Builder",
          description:
            "Build an impressive resume and portfolio with AI-powered suggestions.",
          icon: <IconRocket />,
        },
        {
          title: "Community Support",
          description:
            "Engage with peers, mentors, and career experts in a supportive community.",
          icon: <IconUsers />,
        },
        {
          title: "24/7 Career Coach",
          description:
            "Your AI coach is always available to answer queries and guide your journey.",
          icon: <IconHelp />,
        },
        {
          title: "Empowering Careers",
          description:
            "We’re here to help you achieve your dreams—because your success is our mission.",
          icon: <IconHeartHandshake />,
        },
      ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
