"use client";

import { useEffect } from "react";
import ShinyText from "../components/ShinyText";
import { ChevronDown } from "lucide-react";

declare global {
  interface Window {
    particlesJS: {
      load: (id: string, path: string, callback: () => void) => void;
    };
  }
}

const HeroSection = () => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const loadParticles = async () => {
      if (typeof window === "undefined") return;

      // If particles already loaded, just call load
      if ((window as any).particlesJS) {
        window.particlesJS.load("particles-js", "/particlesjs-config.json", () => {
          /* noop */
        });
        return;
      }

      // Avoid injecting multiple scripts
      if (document.querySelector('script[data-particles="true"]')) return;

      script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.setAttribute("data-particles", "true");
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS.load("particles-js", "/particlesjs-config.json", () => {
            // loaded
          });
        }
      };
      document.body.appendChild(script);
    };

    loadParticles();

    return () => {
      // cleanup script if we injected it
      if (script && script.parentNode) script.parentNode.removeChild(script);
      // clear particles container to avoid leftover DOM on unmount
      const container = document.getElementById("particles-js");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Particles background */}
      <div className="absolute inset-0" id="particles-js" aria-hidden="true" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* Foreground content: make interactive on mobile/desktop */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto flex flex-col justify-center items-center text-center h-full max-w-4xl">
        <span className="uppercase text-gray-300 tracking-wider text-xs sm:text-sm">
          Welcome to JAC O' Trades!
        </span>

        <h1 className="mt-2 mb-4 leading-tight">
          <ShinyText
            text="WE TURN YOUR IDEAS INTO POWERFUL SOFTWARE SOLUTIONS"
            disabled={false}
            speed={3}
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          />
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          We specialize in designing and developing fast, stunning, and user-friendly websites tailored to your brand.
        </p>
      </div>

      {/* Bottom “Get to Know More” text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white z-20">
        <p className="font-semibold text-sm sm:text-base tracking-wide">GET TO KNOW MORE</p>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mt-2 animate-bounce mx-auto inline" />
      </div>
    </section>
  );
};

export default HeroSection;
