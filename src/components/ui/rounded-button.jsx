import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Magnetic from './magnetic-button';

export default function Rounded({ children, ...attributes }) {
    const backgroundColor = "#FF7D4B"
    const [isMobile, setIsMobile] = useState(false);
    const circle = useRef(null);
    const timeline = useRef(null);
    let timeoutId = null;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);

            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo('enter', 'exit');
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300);
    };

    return (
        <>
            {isMobile ? (
                <div
                    className="rounded-[3em] cursor-pointer relative flex items-center justify-center py-10 px-5"
                    style={{ overflow: "hidden" }}
                    onMouseEnter={manageMouseEnter}
                    onMouseLeave={manageMouseLeave}
                    {...attributes}
                >
                    {children}
                    <div
                        ref={circle}
                        style={{ backgroundColor }}
                        className="w-full h-[150%] absolute rounded-[50%] top-full"
                    ></div>
                </div>
            ) : (
                <Magnetic>
                    <div
                        className="rounded-[3em] cursor-pointer relative flex items-center justify-center py-10 px-5"
                        style={{ overflow: "hidden" }}
                        onMouseEnter={manageMouseEnter}
                        onMouseLeave={manageMouseLeave}
                        {...attributes}
                    >
                        {children}
                        <div
                            ref={circle}
                            style={{ backgroundColor }}
                            className="w-full h-[150%] absolute rounded-[50%] top-full"
                        ></div>
                    </div>
                </Magnetic>
            )}
        </>
    );
}