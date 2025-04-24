import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AnimatedLink from '@/components/ui/animated-link';
import SwiperCard from '../Home/Card/SwiperCard';
import AnimatedCircleLink from '@/components/ui/animated-circle';
import { IoMdArrowDown } from 'react-icons/io';
import { Divider } from '@heroui/react';
import axios from 'axios';
import { motorAPI } from '@/api/get';
import AnimatedCursor from '@/components/ui/animated-cursor';

const MotorCard = dynamic(() => import('@/components/pages/Home/Card/MotorCard'), { ssr: false });

const CatalogComponent = () => {
    const [selectedFilter, setSelectedFilter] = useState('Semua');
    const [motorData, setMotorData] = useState([]);

    useEffect(() => {
        const fetchMotorData = async () => {
            try {
                const response = await motorAPI.get();
                setMotorData(response.data.listMotor);
            } catch (error) {
                console.error('Error fetching motor data:', error);
            }
        };

        fetchMotorData();
    }, []);

    return (
        <section id='catalog' className="bg-[#F2EFE7] flex flex-col gap-10 py-10 pt-32 px-5 md:px-20 items-center justify-center">
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
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-[200px] w-full'>
                <h1 className='text-subheader md:text-header font-semibold ml-4'>Pilihan Motor✨</h1>
                <div className="flex gap-1 sm:gap-3 mb-4">
                    {['Semua', 'Matic', 'Manual', 'Sport'].map(filter => (
                        <button
                            key={filter}
                            className={`py-2 px-3 sm:px-4 lg:px-6 border-b-2 border-transparent border-slide hover:text-[#ff4d30] ${selectedFilter === filter ? 'border-slide-active text-[#ff4d30]' : ''}`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            <span className="text-sm sm:text-base lg:text-lg">{filter}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
                    {motorData
                        .filter(motor => selectedFilter === 'Semua' || motor.tipe_motor === selectedFilter)
                        .map(motor => (
                            <MotorCard
                                key={motor.id}
                                id={motor.id}
                                image={`${process.env.NEXT_PUBLIC_API_URL}/storage/${motor.gambar_motor}`}
                                title={motor.nama_motor}
                                dailyPrice={motor.harga_motor_per_1_hari}
                                weeklyPrice={motor.harga_motor_per_1_minggu}
                                availability={motor.status_motor}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default CatalogComponent