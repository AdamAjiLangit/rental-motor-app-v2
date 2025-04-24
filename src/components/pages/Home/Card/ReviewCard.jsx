import { Avatar, Card, CardBody, CardHeader, Image } from '@heroui/react'
import React, { useEffect } from 'react'

const ReviewCard = ({
    id,
    user,
    image,
    penilaian,
    komentar,
}) => {
    const defaultImage = '/assets/images/blank.png';
    const imageUrl = image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${image}` : null;

    return (
        <Card className='p-5 mr-5 bg-white max-w-[330px]'>
            <CardHeader>
                <Avatar className='border border-primary' size='lg' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='profile' />
                <div className='flex flex-col ml-3'>
                    <h2 className='md:text-body font-poppinsMedium'>{user.nama_pengguna}</h2>
                    <div className="flex text-body">
                        {Array.from({ length: penilaian }, (_, i) => (
                            <span key={i} className={i < 5 ? "text-yellow-500" : "text-gray-300"}>&#9733;</span>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardBody className='space-y-2'>
                <div className='flex justify-center items-center rounded-xl'>
                    <Image
                        src={imageUrl || defaultImage}
                        alt='review'
                        className='rounded-xl w-full h-60 object-contain'
                    />
                </div>
                <h4 className='text-caption truncate'>
                    {komentar}
                </h4>
            </CardBody>
        </Card>
    )
}

export default ReviewCard