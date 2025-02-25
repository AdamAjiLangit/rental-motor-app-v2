'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ReactLenis } from "lenis/react";

const LoginComponent = dynamic(() => import('@/components/pages/Login/LoginComponent'), { ssr: false });
const Navbar = dynamic(() => import('@/components/layouts/Navbar/Navbar'));
const Footer = dynamic(() => import('@/components/layouts/Footer/Footer'));

import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';

const Login = () => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <Curve>
                {/* <Navbar /> */}
                <div className='flex justify-center items-center h-screen'>
                    <LoginComponent />
                </div>
                {/* <Footer /> */}
            </Curve>
        </ReactLenis>
    )
}

export default Login