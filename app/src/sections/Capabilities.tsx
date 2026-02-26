import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Megaphone, Smartphone, Sparkles } from "lucide-react";

interface Capability {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
}

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Product Design",
    description: "UX flows, UI systems, prototyping.",
    skills: ["Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Flutter, responsive UI, native feel.",
    skills: ["Flutter", "Responsive UI", "Cross-platform"],
  },
  {
    icon: Sparkles,
    title: "Motion & Brand",
    description: "Animation, identity, marketing assets.",
    skills: ["Motion Graphics", "Brand Identity", "Social Assets"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "High-converting social media creatives that build brand presence and generate leads.",
    skills: [
      "Social Media Post Design",
      "Lead Generation",
      "Flyer & Brochure Design",
    ],
  },
];

const Capabilities = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [-60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial-purple-right opacity-40" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-nova-purple" />
              <span className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase">
                Services
              </span>
            </div>
            <h2 className="font-display text-section font-bold text-nova-text tracking-tight">
              Capabilities
            </h2>
            <p className="mt-4 text-nova-muted max-w-md text-lg">
              A small team mindset—strategy, design, and build.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.title}
                capability={capability}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CapabilityCardProps {
  capability: Capability;
  index: number;
  scrollProgress: any;
}

const CapabilityCard = ({
  capability,
  index,
  scrollProgress,
}: CapabilityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = capability.icon;

  const cardY = useTransform(
    scrollProgress,
    [0.1 + index * 0.03, 0.3 + index * 0.03],
    [60, 0],
  );
  const cardOpacity = useTransform(
    scrollProgress,
    [0.1 + index * 0.03, 0.25 + index * 0.03],
    [0, 1],
  );
  const cardX = useTransform(
    scrollProgress,
    [0.1 + index * 0.03, 0.3 + index * 0.03],
    [index % 2 === 0 ? -40 : 40, 0],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity, x: cardX }}
      className="group"
    >
      <div className="card-nova p-8 lg:p-10 h-full transition-all duration-500 hover:-translate-y-2 hover:border-white/12">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-nova-purple/10 flex items-center justify-center mb-6 group-hover:bg-nova-purple/20 transition-colors">
          <Icon size={24} className="text-nova-purple" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl lg:text-2xl font-semibold text-nova-text mb-3">
          {capability.title}
        </h3>

        {/* Description */}
        <p className="text-nova-muted mb-6">{capability.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {capability.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/5 text-xs text-nova-muted border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Capabilities;
