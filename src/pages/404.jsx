'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Curve from '@/components/layouts/Curve/Curve';

const NotFoundComponent = dynamic(() => import('@/components/pages/404/NotFound'), { ssr: false });

const NotFound = () => {
    return (
        <Curve backgroundColor={"#F2EFE7"}>
            <NotFoundComponent />
        </Curve>
    )
}

export default NotFound