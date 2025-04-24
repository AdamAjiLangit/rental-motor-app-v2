"use client";

import React, { useState, useEffect } from 'react';
import MotorCard from '../Card/MotorCard';
import AnimatedLink from '@/components/ui/animated-link';
import SwiperCard from '../Card/SwiperCard';
import { motorAPI } from '@/api/get';

const ListMotor = () => {
    const [motorList, setMotorList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await motorAPI.get();
                setMotorList(res.data.listMotor);
                console.log(res.data.listMotor, 'listMotor');
            } catch (error) {
                console.error("Error fetching:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section id='catalog' className="min-h-screen bg-[#F2EFE7] flex flex-col gap-10 py-10 items-center justify-center">
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-subheader md:text-header font-semibold ml-4'>Motor <span className='text-primary'>Terlaris</span>✨</h1>
                <AnimatedLink text="Lihat Selengkapnya" href="/katalog" customStyle="text-primary text-button after:bg-primary" />
            </div>
            <div className='hidden md:flex md:flex-row gap-10 justify-center items-center'>
                {motorList.slice(3, 6).map((motor, index) => (
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
            <div className="block md:hidden w-full">
                <SwiperCard motors={motorList} />
            </div>
        </section>
    )
}

export default ListMotor