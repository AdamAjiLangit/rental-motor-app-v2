import React from 'react';
import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';

const Catalog = () => {
    return (
        <Curve>
            <div className='absolute top-1/2 left-1/2'>
                <Button text='Sewa Sekarang' href="/" customStyle="" />
            </div>
            <div className='min-h-screen'></div>
        </Curve>
    )
}

export default Catalog