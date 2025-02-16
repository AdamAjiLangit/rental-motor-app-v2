import { useEffect, useRef } from "react";

const AnimatedCursor = () => {
    const cursorRef = useRef(null);
    const mouse = { x: 0, y: 0 };
    const prevMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let currentScale = 0;
    let currentAngle = 0;
    const speed = 0.17;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!cursorRef.current) return;

            circle.x += (mouse.x - circle.x) * speed;
            circle.y += (mouse.y - circle.y) * speed;
            const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

            const deltaMouseX = mouse.x - prevMouse.x;
            const deltaMouseY = mouse.y - prevMouse.y;
            prevMouse.x = mouse.x;
            prevMouse.y = mouse.y;
            const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
            const scaleValue = (mouseVelocity / 150) * 0.5;
            currentScale += (scaleValue - currentScale) * speed;
            const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

            const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
            if (mouseVelocity > 20) {
                currentAngle = angle;
            }
            const rotateTransform = `rotate(${currentAngle}deg)`;

            cursorRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" />;
};

export default AnimatedCursor;
