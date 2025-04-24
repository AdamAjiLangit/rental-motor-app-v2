"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { reviewAPI } from '@/api/get';
import Marquee from "react-fast-marquee";
import ReviewCard from '../Card/ReviewCard';
import Button from '@/components/ui/animated-button';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await reviewAPI.get();
                const data = res.data.review;
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className='min-h-screen flex flex-col gap-7 items-center py-20 bg-primary'>
            <div className='flex flex-col items-center gap-2 mb-5'>
                <h1 className='text-subheader md:text-header font-semibold ml-4 text-white'>Ulasan Pengguna✨</h1>
            </div>
            <Marquee loop={0} >
                {reviews
                .filter((review) => review.penilaian === 5)
                .map((review) => (
                    <ReviewCard
                        key={review.id}
                        user={review.user}
                        image={review.gambar}
                        penilaian={review.penilaian}
                        komentar={review.komentar}
                    />
                ))}
            </Marquee>
            <Button text='Sewa Sekarang' href="/katalog" customStyle="" className="bg-white" />
        </div>
    )
}

export default Review