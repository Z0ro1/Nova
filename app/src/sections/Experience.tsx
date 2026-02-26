import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SpecializationItem {
  title: string;
  description: string;
}

const specializations: SpecializationItem[] = [
  {
    title: "UI Design",
    description:
      "Designing clean, modern, and user-focused interfaces with strong visual hierarchy and intuitive layouts. Focused on usability, accessibility, and creating visually polished digital experiences.",
  },
  {
    title: "Flutter Development",
    description:
      "Building smooth and scalable cross-platform mobile applications using Flutter. Focused on performance, responsive layouts, clean architecture, and production-ready implementation.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Creating high-impact social media creatives, flyers, and branded content designed to increase engagement, strengthen brand identity, and generate qualified leads.",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [-40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial-purple opacity-30" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-nova-purple" />
              <span className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase">
                Expertise
              </span>
            </div>
            <h2 className="font-display text-section font-bold text-nova-text tracking-tight">
              What I Specialize In
            </h2>
            <p className="mt-4 text-nova-muted max-w-md text-lg">
              Focused skills I use to design, build, and grow digital products.
            </p>
          </motion.div>

          {/* Timeline Style Layout */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12 lg:space-y-16">
              {specializations.map((item, index) => (
                <SpecializationCard
                  key={item.title}
                  item={item}
                  index={index}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SpecializationCardProps {
  item: SpecializationItem;
  index: number;
  scrollProgress: any;
}

const SpecializationCard = ({
  item,
  index,
  scrollProgress,
}: SpecializationCardProps) => {
  const cardX = useTransform(
    scrollProgress,
    [0.1 + index * 0.08, 0.3 + index * 0.08],
    [-60, 0],
  );

  const cardOpacity = useTransform(
    scrollProgress,
    [0.1 + index * 0.08, 0.25 + index * 0.08],
    [0, 1],
  );

  return (
    <motion.div
      style={{ x: cardX, opacity: cardOpacity }}
      className="relative pl-8 lg:pl-20"
    >
      {/* Dot */}
      <div className="absolute left-0 lg:left-8 top-2 w-2 h-2 rounded-full bg-nova-purple -translate-x-1/2" />

      {/* Card */}
      <div className="card-nova p-6 lg:p-8">
        <h3 className="font-display text-xl lg:text-2xl font-semibold text-nova-text mb-4">
          {item.title}
        </h3>

        <p className="text-nova-muted/80 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;
