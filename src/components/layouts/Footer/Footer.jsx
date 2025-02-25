import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Image } from '@heroui/react';
import AnimatedLink from '@/components/ui/animated-link';

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer
            className={`relative min-h-[80vh] flex items-center justify-center bg-[#F2EFE7] ${pathname === '/katalog' ? 'bg-primary' : 'bg-[#F2EFE7]'}`}
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-60 flex flex-col items-start justify-start w-full pl-10 gap-2'>
                <h2 className={`text-body md:text-header uppercase font-semibold text-default-600 ${pathname === '/katalog' ? 'text-white' : ''}`}>Tentang</h2>
                <div className='flex flex-col items-start justify-start gap-2 mb-5'>
                    <AnimatedLink href="/" text="● Beranda" customStyle={`text-button md:text-subheader font-semibold after:bg-default-700 ${pathname === '/katalog' ? 'text-white after:bg-white' : ''}`} />
                    <AnimatedLink href="/katalog" text="● Katalog" customStyle={`text-button md:text-subheader font-semibold after:bg-default-700 ${pathname === '/katalog' ? 'text-white after:bg-white' : ''}`} />
                    <AnimatedLink href="/kontak" text="● Kontak Kami" customStyle={`text-button md:text-subheader font-semibold after:bg-default-700 ${pathname === '/katalog' ? 'text-white after:bg-white' : ''}`} />
                    <AnimatedLink href="/tentang" text="● Tentang Kami" customStyle={`text-button md:text-subheader font-semibold after:bg-default-700 ${pathname === '/katalog' ? 'text-white after:bg-white' : ''}`} />
                </div>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-1'>
                    <h4 className={`text-body font-semibold text-default-700 ${pathname === '/katalog' ? 'text-white' : ''}`}>Semua hak cipta dilindungi undang-undang.</h4>
                    <Link href="/kebijakan" className={`text-body font-semibold text-primary ${pathname === '/katalog' ? 'text-white underline' : ''}`}>Syarat & Ketentuan ● Kebijakan Privasi</Link>
                </div>
            </div>
            <div className='fixed bottom-0 w-full p-10 mb-10 lg:mb-0 flex items-center gap-2'>
                <Image src='/assets/svg/logo.svg' alt='logo' width={100} height={100} />
                <h1 className={`text-subheader md:text-5xl lg:text-8xl text-default-800 md:font-medium font-semibold font-serif ${pathname === '/katalog' ? 'text-white' : ''}`}>Rental Motor Kudus</h1>
            </div>
            <div className='fixed bottom-0 right-0 w-full p-10 flex items-end justify-end gap-2'>
                <h4 className={`text-default-700 font-semibold ${pathname === '/katalog' ? 'text-white' : ''}`}>© 2025 Rental Motor Kudus</h4>
            </div>
        </footer>
    )
}

export default Footer