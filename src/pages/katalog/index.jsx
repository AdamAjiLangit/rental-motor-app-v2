'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ReactLenis } from "lenis/react";

const CatalogComponent = dynamic(() => import('@/components/pages/Catalog/CatalogComponent'));
const Navbar = dynamic(() => import('@/components/layouts/Navbar/Navbar'));
const NavbarAfter = dynamic(() => import('@/components/layouts/NavbarAfter/NavbarAfter'));
const Footer = dynamic(() => import('@/components/layouts/Footer/Footer'));

import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';

const Katalog = () => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <Curve>
                {/* {session ? <NavbarAfter /> : <Navbar />} */}
                <Navbar />
                <CatalogComponent />
                <Footer />
            </Curve>
        </ReactLenis>
    )
}

export default Katalog