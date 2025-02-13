import React, { useRef } from 'react';
import Button from '@/components/ui/animated-button';
import { slideUp, opacity } from './anim';
import { useInView, motion } from 'framer-motion';
import { Image, Link } from '@heroui/react';
import TextAnim from '../../ui/animated-text';
import AnimatedLink from '@/components/ui/animated-link';

const HomeComponent = () => {
    return (
        <div className='min-h-screen home px-5 md:px-20'>
            <div className='text-second flex items-center justify-between h-screen'>
                <div className='flex gap-10 h-[600px] w-screen p-10 rounded-2xl bg-[#F2EFE7] z-10'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <h1 className='text-subheader lg:text-header tracking-tight font-poppinsBold'>Sewa Motor <span className='text-primary'>Mudah</span> <br /> <span className='text-primary'>Cepat</span> di Mana Saja!✨</h1>
                        <TextAnim text='Dapatkan motor pilihan dengan harga terjangkau, tanpa ribet!' fontSize={"2xl"} textClass={"tracking-tight text-default-600 text-body lg:text-subheader"} />
                            
                        <div className='mt-5'>
                            <Button text='Sewa Sekarang' href="/test" />
                        </div>
                    </div>
                    <div className='hidden xl:flex items-center justify-center'>
                        <Image
                            alt="Rental Motor Kudus"
                            className="m-5"
                            src="/assets/svg/travel.svg"
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent