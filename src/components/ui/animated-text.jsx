import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { slideUp } from "../pages/Home/anim";

export default function TextAnim({ text, customClass, fontSize, textClass }) {
    const description = useRef(null);
    const isInView = useInView(description, { once: true });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (description.current) {
            const rect = description.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setShouldAnimate(true);
            }
        }
    }, []);

    return (
        <div ref={description} className={customClass}>
            <p className="m-0">
                {text.split(" ").map((word, index) => (
                    <span key={index} className="relative overflow-hidden inline-flex">
                        <motion.span
                            className={`text-${fontSize} ${textClass}`}
                            variants={slideUp}
                            custom={index}
                            initial="initial"
                            animate={shouldAnimate || isInView ? "open" : "closed"}
                        >
                            {word}&nbsp;
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    );
}
