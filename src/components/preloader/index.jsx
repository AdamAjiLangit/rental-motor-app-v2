import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
    return (
        <>
            <LoadingScreen />
        </>
    );
};

const LoadingScreen = () => {
    const counter1Ref = useRef(null);
    const counter2Ref = useRef(null);
    const counter3Ref = useRef(null);
    const loader1Ref = useRef(null);
    const loader2Ref = useRef(null);
    const loaderRef = useRef(null);
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        const animate = (counter, duration, delay = 0) => {
            const numElements = counter.current.querySelectorAll('.num');
            const numHeight = numElements[0].clientHeight;
            const totalDistance = (numElements.length - 1) * numHeight;

            gsap.to(counter.current, {
                y: -totalDistance,
                duration,
                delay,
                ease: 'power2.inOut',
            });
        };

        animate(counter3Ref, 5);
        animate(counter2Ref, 6);
        animate(counter1Ref, 2, 4);

        gsap.to(counter1Ref.current, {
            top: '-150px',
            stagger: { amount: 0.25 },
            delay: 6,
            duration: 1,
            ease: 'power4.inOut',
        });
        gsap.to(counter2Ref.current, {
            top: '-150px',
            stagger: { amount: 0.25 },
            delay: 6,
            duration: 1,
            ease: 'power4.inOut',
        });
        gsap.to(counter3Ref.current, {
            top: '-150px',
            stagger: { amount: 0.25 },
            delay: 6,
            duration: 1,
            ease: 'power4.inOut',
        });

        gsap.from(loader1Ref.current, {
            width: 0,
            duration: 6,
            ease: 'power2.inOut',
        });

        gsap.from(loader2Ref.current, {
            width: 0,
            duration: 2,
            ease: 'power2.inOut',
            delay: 1.9,
        });

        gsap.to(loaderRef.current, {
            background: 'none',
            delay: 6,
            duration: 0.1,
        });

        gsap.to(loaderRef.current, {
            scale: 100,
            duration: 1,
            delay: 7,
            ease: 'power2.inOut',
        });

        gsap.to(loadingScreenRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 7.5,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <div
            ref={loadingScreenRef}
            className="fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none"
        >

            <div
                ref={loaderRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] bg-gray-500 flex"
            >
                <div
                    ref={loader1Ref}
                    className="h-[50px] bg-white w-[200px] relative"
                />
                <div
                    ref={loader2Ref}
                    className="h-[50px] bg-white w-[100px] relative"
                />
            </div>

            <div
                className="fixed left-[50px] bottom-[20px] flex h-[100px] text-[100px] leading-[109px] font-normal"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100px)' }}
            >
                <div ref={counter1Ref} className="relative -top-[15px]">
                    <div className="num">0</div>
                    <div className="num relative right-[-25px]">1</div>
                </div>
                <div ref={counter2Ref} className="relative -top-[15px]">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, i) => (
                        <div key={i} className={`num ${i === 1 ? 'relative right-[-10px]' : ''}`}>
                            {num}
                        </div>
                    ))}
                </div>
                <div ref={counter3Ref} className="relative -top-[15px]">
                    {[...Array(10).keys(), ...Array(10).keys(), ...Array(10).keys(), 0].map(
                        (num, i) => (
                            <div key={i} className="num">
                                {num}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Preloader;