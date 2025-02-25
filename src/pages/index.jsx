"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { HeroUIProvider } from "@heroui/react";
import { ReactLenis } from "lenis/react";
import Curve from "@/components/layouts/Curve/Curve";
import { useSession } from "next-auth/react";
import Loading from "../components/loading/loading";

const HomeComponent = dynamic(() => import("@/components/pages/Home/Parts/HomeComponent"), { ssr: false });
const AboutUs = dynamic(() => import("@/components/pages/Home/Parts/AboutUs"), { ssr: false });
const ListMotor = dynamic(() => import("@/components/pages/Home/Parts/ListMotor"), { ssr: false });
const Review = dynamic(() => import("@/components/pages/Home/Parts/Review"), { ssr: false });
const Navbar = dynamic(() => import("@/components/layouts/Navbar/Navbar"), { ssr: false });
const NavbarAfter = dynamic(() => import("@/components/layouts/NavbarAfter/NavbarAfter"), { ssr: false });
const Footer = dynamic(() => import("@/components/layouts/Footer/Footer"), { ssr: false });

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log('session', session);
    }
  }, [session]);

  return (
    <HeroUIProvider>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <Curve>
          {session ? <NavbarAfter /> : <Navbar />}
          <HomeComponent />
          <AboutUs />
          <ListMotor />
          <Review />
          <Footer />
        </Curve>
      </ReactLenis>
    </HeroUIProvider>
  );
}
