import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    duration: "",
    expectations: "",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0.1, 0.4], [-80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const formX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const formOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Project submitted successfully!");
  };

  return (
    <section
      id="start-project"
      ref={sectionRef}
      className="min-h-screen bg-nova-dark py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial-purple-center opacity-40" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="lg:col-span-6"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-nova-text mb-6">
              Start a Project
            </h2>

            <p className="text-nova-muted text-lg leading-relaxed">
              Have an idea in mind? Share the details below and let’s build
              something impactful together. Clear expectations, smooth
              execution, and results-driven delivery.
            </p>

            <div className="mt-8 space-y-2 text-sm text-nova-muted/70">
              <p>• UI Design</p>
              <p>• Flutter App Development</p>
              <p>• Social Media Marketing</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            style={{ x: formX, opacity: formOpacity }}
            className="lg:col-span-6"
          >
            <form onSubmit={handleSubmit} className="card-nova p-8 space-y-5">
              <input
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <select
                name="projectType"
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-nova-purple"
              >
                <option value="" className="bg-nova-dark text-white">
                  Select Project Type
                </option>
                <option value="UI Design" className="bg-nova-dark text-white">
                  UI Design
                </option>
                <option value="Flutter App" className="bg-nova-dark text-white">
                  Flutter App
                </option>
                <option
                  value="Social Media Marketing"
                  className="bg-nova-dark text-white"
                >
                  Social Media Marketing
                </option>
              </select>

              <textarea
                name="description"
                placeholder="Project Description"
                rows={3}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <input
                name="duration"
                placeholder="Expected Duration"
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <textarea
                name="expectations"
                placeholder="Client Expectations"
                rows={3}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-nova-purple"
              />

              <button
                type="submit"
                className="w-full bg-nova-purple hover:bg-nova-purple/90 transition-all duration-300 py-3 rounded-md font-semibold text-white"
              >
                Submit Project
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
