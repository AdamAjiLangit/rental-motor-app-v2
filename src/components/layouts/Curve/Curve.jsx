'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { opacity } from '@/components/anim/anim';

const routes = {
    '/': 'Beranda',
    '/tentang': 'Tentang',
    '/kontak': 'Kontak',
    '/katalog': 'Katalog',
    '/login': 'Login',
    '/register': 'Register',
    '/detail/[id]': 'Detail',
};

const anim = (variants) => ({
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
});

const textanim = {
    initial: { opacity: 1 },
    enter: { opacity: 0, top: -100, transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }, transitionEnd: { top: "47.5%" } },
    exit: { opacity: 1, top: "40%", transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }, }
};

const curve = (initialPath, targetPath) => ({
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: initialPath, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }
});

const translate = {
    initial: { top: "-300px", opacity: 1 },
    enter: {
        top: "-100vh",
        opacity: 1,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: { top: "100vh", opacity: 0 }
    },
    exit: { top: "-300px", opacity: 1, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }
};

export default function Curve({ children, backgroundColor }) {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);
    const [dimensions, setDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        const resize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className="relative h-screen z-[999]" style={{ backgroundColor }}>
            <div
                className="fixed w-full bg-black pointer-events-none transition-opacity duration-0 delay-100"
                style={{ opacity: dimensions.width == null ? 1 : 0 }}
            />
            {visible ? <motion.p
                onAnimationComplete={() => setVisible(false)}
                className="absolute left-1/2 top-[40%] z-[1000] transform -translate-x-1/2 text-center text-white text-4xl"
                {...anim(textanim)}
            >
                {routes[pathname]}
            </motion.p> : null}
            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg
            className="fixed w-full h-[calc(100vh+600px)] overflow-hidden pointer-events-none left-0 top-0 z-[999]"
            {...anim(translate)}
        >
            <motion.path {...anim(curve(initialPath, targetPath))} fill="#000" />
        </motion.svg>
    );
};