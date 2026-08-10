"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    const isSmallScreen = window.matchMedia("(max-width: 1023px)").matches

    if (reduceMotion || isTouchDevice || isSmallScreen) {
      return
    }

    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
