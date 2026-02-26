import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import FeaturedWork from "./sections/FeaturedWork";
import SelectedProjects from "./sections/SelectedProjects";
import About from "./sections/About";
import Capabilities from "./sections/Capabilities";
import Experience from "./sections/Experience";
import Testimonials from "./sections/from";
import Contact from "./sections/Contact";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    ScrollTrigger.refresh();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-nova-dark min-h-screen">
      <div className="grain-overlay" />
      <Navigation />

      <main className="relative">
        <Hero />
        <FeaturedWork />
        <SelectedProjects />
        <About />
        <Capabilities />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default Home;