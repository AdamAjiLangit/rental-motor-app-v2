import React, { useRef, useEffect } from 'react';
import { Image } from '@heroui/react';
import { IoMdArrowDown } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedLink from '@/components/ui/animated-link';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const AboutUs = () => {
    const circleRef = useRef(null);
    const circlesRef = useRef([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const circles = circlesRef.current;
        const wrapper = wrapperRef.current;

        if (!circle || !wrapper || !circles.length === 0) return;

        const hoverAnim = () => {
            gsap.to(circle, {
                width: "3.5rem",
                height: "3.5rem",
                backgroundColor: "#FFC3B9",
                duration: 0.5,
                border: "none",
                ease: "power2.inOut",
            });
        };

        const resetAnim = () => {
            gsap.to(circle, {
                width: "12rem",
                height: "12rem",
                backgroundColor: "transparent",
                border: "2px solid #FFC3B9",
                ease: "power2.inOut",
                duration: 0.5,
            });
        };

        gsap.to(circle, {
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });

        const animateCircle = (el, radius, duration) => {
            const path = `M ${radius},0 A ${radius},${radius} 0 1,0 ${-radius},0 A ${radius},${radius} 0 1,0 ${radius},0`;

            gsap.to(el, {
                motionPath: {
                    path: path,
                    autoRotate: false,
                    alignOrigin: [0.5, 0.5],
                },
                duration: duration,
                repeat: -1,
                ease: "none",
            });
        };

        circles.forEach((el, i) => {
            animateCircle(el, (i + 1) * 5, 4 + Math.random() * 2);
        });

        wrapper.addEventListener("mouseenter", hoverAnim);
        wrapper.addEventListener("mouseleave", resetAnim);

        return () => {
            wrapper.removeEventListener("mouseenter", hoverAnim);
            wrapper.removeEventListener("mouseleave", resetAnim);
        };
    }, []);

    return (
        <div className='min-h-screen bg-primary px-5 md:px-20 relative'>
            <div ref={(el) => (circlesRef.current[0] = el)} className='absolute bottom-5 right-5 w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#FF7D4B] z-[1]'></div>
            <div ref={(el) => (circlesRef.current[1] = el)} className='absolute top-5 left-5 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#FF958A]/40 z-[1]'></div>
            <div ref={(el) => (circlesRef.current[2] = el)} className='absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#F9565C] z-[1]'></div>
            <a
                href='#catalog'
                ref={wrapperRef}
                className="absolute cursor-pointer -bottom-5 left-5 w-48 h-48 z-20 hidden md:flex items-center justify-center"
            >
                <div ref={circleRef} className="w-48 h-48 rounded-full border border-[#FFC3B9] flex items-center justify-center">
                    <IoMdArrowDown size={30} className='text-white' />
                </div>
            </a>
            <div className='flex items-center justify-center h-screen gap-5'>
                <div className='hidden xl:flex items-center justify-center w-full max-w-[250px]'>
                    <Image
                        alt="Rental Motor Kudus"
                        className=""
                        src="/assets/images/person.png"
                        width={500}
                    />
                </div>
                <div className='flex flex-col gap-5 text-white z-10'>
                    <h1 className='text-subheader lg:text-header font-semibold'>Mengapa Memilih Kami?</h1>
                    <div className='space-y-2'>
                        <h4 className='text-caption md:text-body font-poppinsMedium'>Kami menghargai kepercayaan Anda dalam memilih layanan sewa motor kami. Dengan fokus pada kepuasan pelanggan, kami berusaha untuk memberikan pengalaman perjalanan yang tak terlupakan. Jadilah bagian dari komunitas kami dan rasakan kebebasan berkendara dengan layanan sewa motor terbaik di Kudus.</h4>
                        <h4 className='text-caption md:text-body font-poppinsMedium'>Hubungi kami sekarang untuk informasi lebih lanjut atau lakukan pemesanan online. Terima kasih atas kepercayaan Anda kepada kami sebagai mitra perjalanan Anda di Kudus!</h4>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaWhatsapp size={25} className='text-white' />
                            <AnimatedLink text='Hubungi Kami' href='/contact' customStyle="text-white font-poppinsMedium text-xl after:bg-white" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <FiMapPin size={25} className='text-white' />
                            <AnimatedLink text='Lokasi Kami' href='/catalog' customStyle="text-white font-poppinsMedium text-xl after:bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs