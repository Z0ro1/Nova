import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0.1, 0.4], [-100, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@nova.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial-purple-center opacity-50" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div style={{ x: leftX, opacity: leftOpacity }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-nova-purple" />
                <span className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase">
                  About
                </span>
              </div>

              <h2 className="font-display text-section font-bold text-nova-text tracking-tight leading-tight">
                Design-led product
                <br />
                <span className="text-nova-purple">building.</span>
              </h2>

              <p className="mt-8 text-lg text-nova-muted leading-relaxed max-w-lg">
                I’m a UI-focused developer with experience in both UI and UX
                design, building structured digital systems that prioritize
                clarity, scalability, and intentional interaction. I specialize
                in dashboard architecture, design systems, and internal
                platforms, bridging visual design with functional, real-world
                usability.
              </p>

              <p className="mt-4 text-lg text-nova-muted leading-relaxed max-w-lg">
                Beyond web systems, I develop mobile applications using Flutter
                and have worked on multiple production-ready apps. I also bring
                experience in motion graphics through After Effects, creating UI
                animations and Lottie assets, along with social media creatives
                and marketing materials to maintain consistent digital branding
                across platforms.
              </p>

              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 text-nova-text font-medium hover:text-nova-purple transition-colors flex items-center gap-2 group"
              >
                Read the full story
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>

            {/* Right Content - Profile Card */}
            <motion.div
              style={{ x: rightX, opacity: rightOpacity }}
              className="flex justify-center lg:justify-end"
            >
              <div className="card-nova w-full max-w-md overflow-hidden">
                {/* Photo */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src="/images/download (15).jpg"
                    alt="Alex Mercer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nova-dark/60 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-2xl font-semibold text-nova-text">
                    Saurav Ahire
                  </h3>
                  <p className="text-nova-muted mt-1">
                    UI Systems Designer & Flutter Developer
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-nova-muted">
                    <MapPin size={16} />
                    <span className="text-sm">Nashik</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="mt-6 flex items-center gap-2 text-sm text-nova-purple hover:text-nova-text transition-colors"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy email"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
