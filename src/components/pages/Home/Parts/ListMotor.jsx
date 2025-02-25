import React from 'react'
import MotorCard from '../Card/MotorCard'
import AnimatedLink from '@/components/ui/animated-link'
import SwiperCard from '../Card/SwiperCard'

const ListMotor = () => {
    return (
        <section id='catalog' className="min-h-screen bg-[#F2EFE7] flex flex-col gap-10 py-10 items-center justify-center">
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-subheader md:text-header font-semibold ml-4'>Motor <span className='text-primary'>Terlaris</span>✨</h1>
                <AnimatedLink text="Lihat Selengkapnya" href="/katalog" customStyle="text-primary text-button after:bg-primary" />
            </div>
            <div className='hidden md:flex md:flex-row gap-10 justify-center items-center'>
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
                <div className='hidden lg:block'>
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

export default ListMotor