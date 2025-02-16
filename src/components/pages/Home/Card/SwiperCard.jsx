import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MotorCard from './MotorCard';

const SwiperCard = () => {
    // Dummy data array
    const motors = [
        {
            id: 1,
            image: "https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75",
            title: "Vespa Sprint",
            dailyPrice: 250000,
            weeklyPrice: 1500000,
            availability: true
        },
        {
            id: 2,
            image: "https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fpcx.png&w=1080&q=75",
            title: "Honda PCX",
            dailyPrice: 200000,
            weeklyPrice: 1200000,
            availability: true
        },
        {
            id: 3,
            image: "https://example.com/images/yamaha-nmax.jpg",
            title: "Yamaha NMAX",
            dailyPrice: 220000,
            weeklyPrice: 1300000,
            availability: false
        },
        {
            id: 4,
            image: "https://example.com/images/suzuki-address.jpg",
            title: "Suzuki Address",
            dailyPrice: 180000,
            weeklyPrice: 1000000,
            availability: true
        }
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                className="flex items-center justify-center w-full max-w-4xl mx-auto"
            >
                {motors.map((motor) => (
                    <SwiperSlide key={motor.id} className="flex justify-center">
                        <MotorCard
                            image={motor.image}
                            title={motor.title}
                            dailyPrice={motor.dailyPrice}
                            weeklyPrice={motor.weeklyPrice}
                            availability={motor.availability}
                        />
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
                <div className="custom-swiper-button-prev bg-primary p-2 cursor-pointer rounded-full absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
                    <FaArrowLeft className="text-white" />
                </div>
                <div className="custom-swiper-button-next bg-primary p-2 cursor-pointer rounded-full absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="text-white" />
                </div>
            </Swiper>
        </div>
    );
};

export default SwiperCard;