import React, { useRef, useEffect } from 'react';
import { Image } from '@heroui/react';
import { IoLogoWhatsapp, IoMdArrowDown } from "react-icons/io";
import AnimatedLink from '@/components/ui/animated-link';
import gsap from 'gsap';

const AboutUs = () => {
    const circleRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const wrapper = wrapperRef.current;

        if (!circle || !wrapper) return;

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
                duration: 1.2,
            });
        };

        gsap.to(circle, {
            y: 10,
            duration: 1.5,
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
    }, []);

    return (
        <div className='min-h-screen bg-[#F2EFE7] px-5 md:px-20 relative'>
            <div className='absolute bottom-5 right-5 w-64 h-64 rounded-full bg-[#FFC3B9] z-10'></div>
            <div className='absolute top-5 left-5 w-48 h-48 rounded-full bg-[#FFC3B9] z-10'></div>
            <a
                href='#catalog'
                ref={wrapperRef}
                className="absolute cursor-pointer -bottom-5 left-5 w-48 h-48 z-10 flex items-center justify-center"
            >
                <div ref={circleRef} className="w-48 h-48 rounded-full border border-primary flex items-center justify-center">
                    <IoMdArrowDown size={30} className='text-primary' />
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
                <div className='flex flex-col gap-5'>
                    <h1 className='text-subheader lg:text-header font-semibold'>Mengapa Memilih Kami?</h1>
                    <div className='space-y-2'>
                        <h4 className='text-caption md:text-body font-poppinsMedium'>Kami menghargai kepercayaan Anda dalam memilih layanan sewa motor kami. Dengan fokus pada kepuasan pelanggan, kami berusaha untuk memberikan pengalaman perjalanan yang tak terlupakan. Jadilah bagian dari komunitas kami dan rasakan kebebasan berkendara dengan layanan sewa motor terbaik di Kudus.</h4>
                        <h4 className='text-caption md:text-body font-poppinsMedium'>Hubungi kami sekarang untuk informasi lebih lanjut atau lakukan pemesanan online. Terima kasih atas kepercayaan Anda kepada kami sebagai mitra perjalanan Anda di Kudus!</h4>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 items-center'>
                        <div className='flex items-center gap-2'>
                            <IoLogoWhatsapp className='text-4xl text-green-500' />
                            <AnimatedLink text='Hubungi Kami' href='/contact' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-3xl'>
                                🛵
                            </p>
                            <AnimatedLink text='Lihat Katalog' href='/catalog' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs