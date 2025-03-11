'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
import { ReactLenis } from "lenis/react";

const AboutComponent = dynamic(() => import('@/components/pages/About/AboutComponent'));
const Navbar = dynamic(() => import('@/components/layouts/Navbar/Navbar'));
const NavbarAfter = dynamic(() => import('@/components/layouts/NavbarAfter/NavbarAfter'));
const Footer = dynamic(() => import('@/components/layouts/Footer/Footer'));

import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';

const Tentang = () => {
    const { data: session } = useSession();
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <Curve>
                {/* {session ? <NavbarAfter /> : <Navbar />} */}
                <Navbar />
                <AboutComponent />
                <Footer />
            </Curve>
        </ReactLenis>
    )
}

export default Tentang