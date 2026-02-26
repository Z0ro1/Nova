import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Development",
    subtitle: "Flutter · Android Studio · React ·  Java",
    image: "/images/project-ecommerce.jpg",
  },
  {
    title: "Design",
    subtitle: " Figma · UI Systems · Prototyping  ·Wix Studio",
    image: "/images/project-uikit.jpg",
  },
  {
    title: "Motion",
    subtitle: "After Effects · Lottie Animation · UI Motion Graphics",
    image: "/images/project-typography.jpg",
  },
];

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [-80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial-purple-right opacity-50" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-nova-purple" />
              <span className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-section font-bold text-nova-text tracking-tight">
              Stack & Workflow
            </h2>
            <p className="mt-4 text-nova-muted max-w-md text-lg">
              The stack powering my ideas from concept to launch.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
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

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollProgress: any;
}

const ProjectCard = ({ project, index, scrollProgress }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const cardY = useTransform(
    scrollProgress,
    [0.1 + index * 0.05, 0.4 + index * 0.05],
    [100, 0],
  );
  const cardOpacity = useTransform(
    scrollProgress,
    [0.1 + index * 0.05, 0.3 + index * 0.05],
    [0, 1],
  );
  const cardRotate = useTransform(
    scrollProgress,
    [0.1 + index * 0.05, 0.4 + index * 0.05],
    [index === 0 ? -6 : index === 2 ? 6 : 0, 0],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity, rotateZ: cardRotate }}
      className="group relative"
    >
      <div className="card-nova overflow-hidden h-[400px] lg:h-[500px] relative cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-white/12">
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-nova-text mb-2">
            {project.title}
          </h3>
          <p className="text-nova-muted text-sm">{project.subtitle}</p>
        </div>

        {/* Hover Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-nova-purple to-nova-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

export default FeaturedWork;
