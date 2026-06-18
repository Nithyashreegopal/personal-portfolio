"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;
    let rafCallback: ((time: number) => void) | null = null;

    const initLenis = () => {
      if (typeof window === "undefined") return;

      // Disable Lenis on mobile and tablet viewports (< 1024px width)
      if (window.innerWidth < 1024) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
        }
        if (rafCallback) {
          gsap.ticker.remove(rafCallback);
          rafCallback = null;
        }
        return;
      }

      // Initialize Lenis for desktop viewports targeting the main card scrollbar
      const wrapperEl = document.querySelector(".card-scrollbar");
      const contentEl = document.querySelector(".scroll-content-wrapper");

      if (wrapperEl && contentEl) {
        if (!lenis) {
          lenis = new Lenis({
            wrapper: wrapperEl as HTMLElement,
            content: contentEl as HTMLElement,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
          });

          lenis.on("scroll", ScrollTrigger.update);

          rafCallback = (time: number) => {
            lenis?.raf(time * 1000);
          };
          gsap.ticker.add(rafCallback);
        }
      } else {
        // If DOM nodes aren't ready yet, retry in the next animation frame
        requestAnimationFrame(initLenis);
      }
    };

    // Run initialization on mount
    initLenis();

    // Listen to resize events to enable/disable Lenis dynamically
    const handleResize = () => {
      initLenis();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (rafCallback) {
        gsap.ticker.remove(rafCallback);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{children}</>;
}
