import Button from '@/components/ui/animated-button';
import React from 'react';

export default function NotFoundComponent() {

    return (
        <div className="room min-h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="cuboid">
                <div className="side"></div>
                <div className="side"></div>
                <div className="side"></div>
            </div>
            <div className="oops">
                <h2>OOPS!</h2>
                <p>We can&apos;t find the page that you&apos;re looking for &#58;&#40;</p>
            </div>
            <div className="center-line">
                <div className="hole">
                    <div className="ladder-shadow"></div>
                    <div className="ladder"></div>
                </div>
                <div className="four">4</div>
                <div className="four">4</div>
                <div className='mb-8'></div>
                <Button href="/" text="Back to home" />
            </div>
        </div>
    )
}