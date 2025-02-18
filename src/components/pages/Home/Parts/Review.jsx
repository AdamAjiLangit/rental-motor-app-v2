import React from 'react';
import Marquee from "react-fast-marquee";
import ReviewCard from '../Card/ReviewCard';
import Button from '@/components/ui/animated-button';

const Review = () => {
    return (
        <div className='min-h-screen flex flex-col gap-7 items-center py-20 bg-primary'>
            <div className='flex flex-col items-center gap-2 mb-5'>
                <h1 className='text-subheader md:text-header font-semibold ml-4 text-white'>Ulasan Pengguna✨</h1>
            </div>
            <Marquee loop={0} pauseOnHover={true} >
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Marquee>
            <Button text='Sewa Sekarang' href="/catalog" customStyle="" className="bg-white" />
        </div>
    )
}

export default Review