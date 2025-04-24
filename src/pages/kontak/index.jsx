'use client';

import React from 'react';
import dynamic from 'next/dynamic';
kimport { ReactLenis } from "lenis/react";

const ContactComponent = dynamic(() => import('@/components/pages/Contact/ContactComponent'));
const Navbar = dynamic(() => import('@/components/layouts/Navbar/Navbar'));
const NavbarAfter = dynamic(() => import('@/components/layouts/NavbarAfter/NavbarAfter'));
const Footer = dynamic(() => import('@/components/layouts/Footer/Footer'));

import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';

const Kontak = () => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <Curve>
                {/* {session ? <NavbarAfter /> : <Navbar />} */}
                <Navbar />
                <ContactComponent />
                <Footer />
            </Curve>
        </ReactLenis>
    )
}

export default Kontak