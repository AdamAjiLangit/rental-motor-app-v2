import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StarAnimation = ({ x, y, delay, customStyle }) => {
    const [playAnimation, setPlayAnimation] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayAnimation(false);
            setTimeout(() => setPlayAnimation(true), 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={playAnimation ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
            transition={{
                duration: 1,
                repeat: 2,
                repeatType: "mirror",
                delay: delay,
            }}
            style={{
                position: "absolute",
                left: x,
                top: y,
            }}
        >
            <div className={`${customStyle}`}>
                ✨
            </div>
        </motion.div>
    );
};

export default StarAnimation;
