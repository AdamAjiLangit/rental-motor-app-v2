import React, { useRef } from 'react';
import Button from '@/components/ui/animated-button';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import TextAnim from '../../../ui/animated-text';
import AnimatedLink from '@/components/ui/animated-link';
import StarAnimation from './StarsAnim';
import AnimatedCursor from '@/components/ui/animated-cursor';

const HomeComponent = () => {
    return (
        <div className='min-h-screen home px-5 md:px-20'>
            <div className='hidden lg:block'>
                <AnimatedCursor />
            </div>
            <div className='text-second flex items-center justify-between h-screen'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 h-[600px] w-screen p-10 rounded-2xl bg-[#F2EFE7] z-10'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <h1 className='text-subheader lg:text-header tracking-tight font-poppinsBold'>Sewa Motor <span className='text-primary'>Mudah</span> <br /> <span className='text-primary'>Cepat</span> di Mana Saja!🛵</h1>
                        <TextAnim text='Dapatkan motor pilihan dengan harga terjangkau, tanpa ribet!' textClass={"tracking-tight text-body lg:text-subheader"} />
                        <div className='mt-5'>
                            <Button text='Sewa Sekarang' href="/katalog" customStyle="" />
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center max-w-52 lg:max-w-[600px]'>
                        <Image
                            alt="Rental Motor Kudus"
                            className="m-5"
                            src="/assets/images/pcx.png"
                            width={600}
                            height={500}
                            loading='lazy'
                        />
                        <StarAnimation x="5%" y="20%" delay={0} customStyle={"text-body md:text-header"} />
                        <StarAnimation x="90%" y="75%" delay={0} customStyle={"text-subheader md:text-7xl"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent