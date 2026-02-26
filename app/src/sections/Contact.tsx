import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Calendar,
  Instagram,
  ArrowUpRight,
  Github,
  Briefcase,
  Twitter,
} from "lucide-react";

interface ContactCard {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
}

const contactCards: ContactCard[] = [
  {
    icon: Mail,
    title: "Emai",
    value: "sauravahire15@gmail.com",
    href: "mailto:sauravahire15@gmail.com",
  },
  {
    icon: Calendar,
    title: "LinkedIn",
    value: "Let’s connect professionally",
    href: "#",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "View marketing work",
    href: "#",
  },
  {
    icon: Github,
    title: "Github",
    value: "Explore my repositories",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Freelance",
    value: "Hire me & view profile",
    href: "#",
  },
  {
    icon: Twitter,
    title: "X",
    value: "Follow my dev journey",
    href: "#",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-nova-dark py-16 lg:py-1 relative overflow-hidden flex flex-col"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 bg-gradient-radial-purple opacity-40"
        style={{ backgroundPosition: "50% 85%" }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div style={{ y: headerY, opacity: headerOpacity }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-nova-purple" />
              <span className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase">
                Contact
              </span>
            </div>

            <h2 className="font-display text-section font-bold text-nova-text tracking-tight">
              Let's build something
              <br />
              <span className="text-nova-purple">precise.</span>
            </h2>

            <p className="mt-6 text-lg text-nova-muted max-w-md mx-auto">
              Tell me what you're making. I'll reply within two business days.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            style={{ opacity: headerOpacity }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          >
            {contactCards.map((card, index) => (
              <ContactCardComponent
                key={card.title}
                card={card}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Signature Quote Block */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-nova-purple/40 to-transparent mb-12" />

          <p className="font-display text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-nova-purple font-light tracking-wide">
            Crafting digital experiences that feel inevitable.
          </p>

          <p className="mt-6 text-xs tracking-[0.35em] uppercase text-nova-muted">
            — Saurav
          </p>
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="relative z-10 w-full px-6 lg:px-12 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-nova-muted">
            <p className="tracking-wide">
              © {new Date().getFullYear()} Saurav — Built with precision.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-nova-text transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-nova-text transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-nova-text transition-colors">
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

interface ContactCardProps {
  card: ContactCard;
  index: number;
}

const ContactCardComponent = ({ card, index }: ContactCardProps) => {
  const Icon = card.icon;

  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="group card-nova p-6 lg:p-8 h-full flex flex-col justify-between
                 text-left transition-all duration-500 
                 hover:-translate-y-2 hover:border-white/12 
                 cursor-pointer"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-nova-purple/10 flex items-center justify-center group-hover:bg-nova-purple/20 transition-colors">
            <Icon size={20} className="text-nova-purple" />
          </div>
          <ArrowUpRight
            size={20}
            className="text-nova-muted opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <p className="text-nova-muted text-sm mb-1">{card.title}</p>
        <p className="font-display text-lg text-nova-text group-hover:text-nova-purple transition-colors">
          {card.value}
        </p>
      </div>
    </motion.a>
  );
};

export default Contact;
