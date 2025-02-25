'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@heroui/react";
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import gsap from 'gsap';
import NavItems from './Nav/NavItems';
import Rounded from '@/components/ui/rounded-button';
import Magnetic from '@/components/ui/magnetic-button';
import Link from 'next/link';
import BottomNavbar from '../BottomNavbar/BottomNavbar';

export default function NavbarAfter() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const button = useRef(null);
    const { data: session } = useSession();

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        });
    }, []);

    const handleHover = (selector) => {
        gsap.to(selector, { scale: 1, duration: 0.1, ease: 'power3.out' });
    };

    const handleLeave = (selector) => {
        gsap.to(selector, { scale: 0, duration: 0.1, ease: 'power3.out' });
    };

    return (
        <div>
            <div ref={header} className="absolute flex z-[100] top-0 font-semibold p-[35px] text-primary justify-between w-full box-border items-center" id='header'>
                <Link href="/" className='flex items-center'>
                    <Magnetic>
                        <div className="flex cursor-pointer absolute left-[9%]">
                            <p className="m-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">©</p>
                            <div className="relative overflow-hidden items-center flex whitespace-nowrap ml-1 transition-all duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">
                                <p className="relative transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)] text-caption md:text-button">Rental Motor Kudus</p>
                                {/* <p className="absolute left-[120px] pl-[0.3em] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">Adam</p>
                                <p className="absolute left-[120px] pl-[0.3em] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]">Aji</p> */}
                            </div>
                        </div>
                    </Magnetic>
                </Link>
                <div className="flex items-center">
                    {['Beranda', 'Pesanan', 'Katalog', 'Tentang', 'Kontak'].map((item) => (
                        <Magnetic key={item}>
                            <div
                                className="relative z-10 p-[15px] cursor-pointer hidden lg:block"
                                onMouseEnter={() => handleHover(`.${item.toLowerCase()}-indicator`)}
                                onMouseLeave={() => handleLeave(`.${item.toLowerCase()}-indicator`)}
                            >
                                <Link href={item === 'Beranda' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
                                <div
                                    className={`indicator ${item.toLowerCase()}-indicator absolute w-[5px] h-[5px] top-[45px] left-[50%] bg-primary rounded-full transform scale-0 -translate-x-1/2 transition-transform`}
                                ></div>
                            </div>
                        </Magnetic>
                    ))}
                    <div className="flex items-center ml-5">
                        <Dropdown placement="bottom-start">
                            <DropdownTrigger className='flex items-center'>
                                <User
                                    as="button"
                                    avatarProps={{
                                        isBordered: true,
                                    }}
                                    className="transition-transform"
                                    name={`Hai, ${session?.user?.name}`}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="User Actions" variant="flat">
                                <DropdownItem key="settings">My Settings</DropdownItem>
                                <DropdownItem key="logout" color="danger"
                                    onPress={async () => {
                                        await signOut({ redirect: false })
                                        router.push("/login")
                                    }}>
                                    <div
                                        className='flex items-center gap-2 text-primary'
                                    >
                                        <CiLogout size={20} />
                                        <span>Logout</span>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div ref={button} className="scale-0 fixed right-0 z-40">
                    <Rounded onClick={() => { setIsActive(!isActive) }} className="relative m-[20px] w-[80px] h-[80px] rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center">
                        <div className={`w-full relative z-10 transition-transform duration-[0.3s] ${isActive ? 'rotate-[45deg] top-[-1px]' : ''}`}>
                            <div className="block h-[1px] w-[40%] mx-auto bg-white relative top-[-5px] transition-transform"></div>
                            <div className="block h-[1px] w-[40%] mx-auto bg-white relative top-[5px] transition-transform"></div>
                        </div>
                    </Rounded>
                </div>
            </div>
            <div ref={button} className="scale-0 fixed right-0 z-40 hidden md:block">
                <Rounded
                    onClick={() => { setIsActive(!isActive) }}
                    className="relative m-[20px] w-[80px] h-[80px] rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center"
                >
                    <div
                        className={`w-full relative z-10 transition-transform duration-[0.3s] ${isActive ? 'rotate-0' : ''}`}
                    >
                        <div
                            className={`block h-[1px] w-[40%] mx-auto bg-white absolute top-[-5px] left-[50%] transform -translate-x-[1rem] transition-transform ${isActive ? 'rotate-45 translate-y-1' : ''}`}
                        ></div>
                        <div
                            className={`block h-[1px] w-[40%] mx-auto bg-white absolute top-[5px] left-[50%] transform -translate-x-[1rem] transition-transform ${isActive ? '-rotate-45 -translate-y-1' : ''}`}
                        ></div>
                    </div>
                </Rounded>
            </div>
            <div className='md:hidden block'>
                <BottomNavbar />
            </div>

            <AnimatePresence mode="wait">
                {isActive && <NavItems />}
            </AnimatePresence>
        </div>
    );
}