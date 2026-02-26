import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string; // Added
}

const projects: Project[] = [
  {
    title: "EduCore",
    description: "Academic CRM",
    tags: ["UI Design", "Dashboard", "Data visualization"],
    image: "/images/project-dashboard.jpg",
    href: "https://google.com",
  },
  {
    title: "Entome",
    description: "Employee Management Application · UI System",
    tags: ["UI Design", "Dashboard", "Internal Tool"],
    image: "/images/project-mobile.jpg",
    href: "https://google.com",
  },
  {
    title: "Entolic System",
    description: "Corporate Website · UI Design",
    tags: ["UI Design", "Web Interface", "Responsive Design"],
    image: "/images/Gemini_Generated_Image_yecu7cyecu7cyecu.png",
    href: "https://google.com",
  },
];

const SelectedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial-purple opacity-30" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-16 lg:mb-24"
          >
            <h2 className="font-display text-section font-bold text-nova-text tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-4 text-nova-muted max-w-md text-lg">
              Deep dives into product, interaction, and performance.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const itemY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const itemOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const itemScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={itemRef}
      style={{ y: itemY, opacity: itemOpacity, scale: itemScale }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-3xl card-nova block"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-nova-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1" : ""}`}>
        <div className="space-y-6">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-nova-purple uppercase">
              0{index + 1}
            </span>
            <h3 className="font-display text-2xl lg:text-4xl font-semibold text-nova-text mt-2">
              {project.title}
            </h3>
            <p className="text-nova-muted mt-2 text-lg">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-nova-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 text-nova-text font-medium hover:text-nova-purple transition-colors"
          >
            View project
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedProjects;