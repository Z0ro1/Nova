import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-nova-dark overflow-hidden flex items-center select-none">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial-purple pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 lg:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-1 items-center gap-16">
          <div className="max-w-2xl">
            <h1 className="font-display text-hero font-bold text-nova-text leading-[1.05] tracking-tight">
              Immersive <br />
              digital <br />
              <span className="text-nova-purple">experiences.</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-nova-muted max-w-md leading-relaxed">
              I design and build interactive websites, apps, and motion
              systems—clean, fast, and memorable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="btn-primary flex items-center gap-2 group pointer-events-auto"
              >
                View selected work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={scrollToContact}
                className="btn-secondary pointer-events-auto"
              >
                Start a project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ROBOT (HeroOrb spline link now used)
      <div className="hidden lg:block absolute right-[-160px] top-[58%] -translate-y-1/2 w-[950px] h-[720px] z-0">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-QNRoZMn4BvRBWFcgeWTGzC7U/"
          frameBorder="0"
          allow="fullscreen; xr-spatial-tracking"
          className="w-full h-full pointer-events-auto"
          loading="lazy"
        />
      </div> */}

      {/* Vertical Label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <span
          className="font-mono text-xs tracking-[0.2em] text-nova-muted uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Creative Developer
        </span>
      </div>
      {/* FLOATING ROBOT (HeroOrb spline link now used) */}
      <div className="hidden lg:block absolute right-[-160px] top-[58%] -translate-y-1/2 w-[950px] h-[720px] z-0">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-QNRoZMn4BvRBWFcgeWTGzC7U/"
          frameBorder="0"
          allow="fullscreen; xr-spatial-tracking"
          className="w-full h-full pointer-events-auto"
          loading="lazy"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20">
        <span className="font-mono text-xs tracking-wider text-nova-muted">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
