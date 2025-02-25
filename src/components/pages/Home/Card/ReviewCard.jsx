import { Avatar, Card, CardBody, CardHeader, Image } from '@heroui/react'
import React from 'react'

const ReviewCard = () => {
    return (
        <Card className='p-5 mr-5 bg-[#F2EFE7] max-w-[330px]'>
            <CardHeader>
                <Avatar className='border border-primary' size='lg' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='profile' />
                <div className='flex flex-col ml-3'>
                    <h2 className='md:text-body font-poppinsMedium'>Username - <span className='text-default-500'>PCX</span></h2>
                    <div className="flex text-body">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < 5 ? "text-yellow-500" : "text-gray-300"}>&#9733;</span>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <Image
                    src='https://rental-motor-kudus.vercel.app/_next/image?url=https%3A%2F%2Frental-motor.ruscarestudent.com%2Fstorage%2Fimages%2Fvespa_sprint.png&w=1080&q=75'
                    alt='vespa' className='rounded-xl w-full h-60 object-contain'
                />
                <h4 className='text-caption'>
                    Motornya sangat bagus dan terawat, pelayanannya sangat ramah dan jelas
                </h4>
            </CardBody>
        </Card>
    )
}

export default ReviewCard