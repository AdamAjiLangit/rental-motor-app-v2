import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const AnimatedCircleLink = ({
    href = '#',
    icon: Icon,
    iconSize = 30,
    circleSize = 'w-48 h-48',
    borderColor = 'border-[#FFC3B9]',
    hoverBgColor = '#FFC3B9',
    iconColor = 'text-white',
    className = '',
    ...props
}) => {
    const circleRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const wrapper = wrapperRef.current;

        if (!circle || !wrapper) return;

        const hoverAnim = () => {
            // gsap.to(circle, {
            //     width: "3.5rem",
            //     height: "3.5rem",
            //     backgroundColor: hoverBgColor,
            //     duration: 0.5,
            //     border: "none",
            //     ease: "power2.inOut",
            // });
        };

        const resetAnim = () => {
            // gsap.to(circle, {
            //     width: circleSize.split(' ')[0],
            //     height: circleSize.split(' ')[1],
            //     backgroundColor: "transparent",
            //     border: `2px solid ${borderColor.split('-')[2]}`,
            //     ease: "power2.inOut",
            //     duration: 0.5,
            // });
        };

        gsap.to(circle, {
            y: 20,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });

        wrapper.addEventListener("mouseenter", hoverAnim);
        wrapper.addEventListener("mouseleave", resetAnim);

        return () => {
            wrapper.removeEventListener("mouseenter", hoverAnim);
            wrapper.removeEventListener("mouseleave", resetAnim);
        };
    }, [borderColor, circleSize, hoverBgColor]);

    return (
        <div
            ref={wrapperRef}
            className={`absolute cursor-pointer ${className} hidden md:flex items-center justify-center z-20`}
            {...props}
        >
            <div
                ref={circleRef}
                className={`${circleSize} rounded-full border ${borderColor} flex items-center justify-center transition-colors`}
            >
                {Icon && <Icon size={iconSize} className={iconColor} />}
            </div>
        </div>
    );
};

export default AnimatedCircleLink;