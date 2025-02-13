"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Curve from "@/components/layouts/Curve/Curve";
import { HeroUIProvider } from "@heroui/react";
import { ReactLenis } from "lenis/react";
import useAppStore from "@/utils/store";

const HomeComponent = dynamic(() => import("@/components/pages/Home/HomeComponent"));
const AboutUs = dynamic(() => import("@/components/pages/Home/AboutUs"));
const Preloader = dynamic(() => import("@/components/preloader"));

export default function Home() {
  const { isLoaded, setIsLoaded } = useAppStore();

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <HeroUIProvider>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <Curve>
          <Preloader />
          <HomeComponent />
          <AboutUs />
        </Curve>
      </ReactLenis>
    </HeroUIProvider>
  );
}
