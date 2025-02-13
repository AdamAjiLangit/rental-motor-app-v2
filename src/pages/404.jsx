'use client';

import React, { useEffect } from 'react';
import Curve from '@/components/layouts/Curve/Curve';
import Button from '@/components/ui/animated-button';
import useAppStore from '@/utils/store';

const NotFound = () => {
    const { isLoaded } = useAppStore();
    const handleOnClick = () => {
        useAppStore.setState({ isLoaded: true });
        console.log(`isLoaded after update:`, useAppStore.getState().isLoaded);
    };

    return (
        <Curve backgroundColor={"#F2EFE7"}>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Button text="Go back to Home" href={"/"} onClick={handleOnClick} />
            </div>
        </Curve>
    )
}

export default NotFound