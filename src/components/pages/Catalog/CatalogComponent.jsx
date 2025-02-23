import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedLink from '@/components/ui/animated-link';
import SwiperCard from '../Home/Card/SwiperCard';
import AnimatedCircleLink from '@/components/ui/animated-circle';
import { IoMdArrowDown } from 'react-icons/io';
import { Divider } from '@heroui/react';
import AnimatedCursor from '@/components/ui/animated-cursor';

const MotorCard = dynamic(() => import('@/components/pages/Home/Card/MotorCard'), { ssr: false });

const CatalogComponent = () => {
    return (
        <section id='catalog' className="min-h-screen bg-[#F2EFE7] flex flex-col gap-10 py-10 pt-32 px-5 md:px-20 items-center justify-center">
            {/* <AnimatedCircleLink
                href="#catalog"
                icon={IoMdArrowDown}
                className="bottom-5 right-5"
                circleSize="w-48 h-48"
                borderColor="border-[#ff4d30]"
                hoverBgColor="#ff4d30"
                iconColor="text-[#ff4d30]"
            /> */}
            <AnimatedCursor />
            <div className='flex items-center justify-center gap-2 w-full'>
                <h1 className='text-subheader md:text-header font-semibold ml-4'>Pilihan Motor✨</h1>
            </div>
            <div className='relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
                    <MotorCard
                        image="https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75"
                        title="Vespa Sprint"
                        dailyPrice={250000}
                        weeklyPrice={1500000}
                        availability={true}
                    />
                    <MotorCard
                        image="https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75"
                        title="Vespa Sprint"
                        dailyPrice={250000}
                        weeklyPrice={1500000}
                        availability={true}
                    />
                    <MotorCard
                        image="https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75"
                        title="Vespa Sprint"
                        dailyPrice={250000}
                        weeklyPrice={1500000}
                        availability={true}
                    />
                    <MotorCard
                        image="https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75"
                        title="Vespa Sprint"
                        dailyPrice={250000}
                        weeklyPrice={1500000}
                        availability={true}
                    />
                </div>
            </div>
            <div className="block md:hidden w-full">
                <SwiperCard />
            </div>
        </section>
    )
}

export default CatalogComponent