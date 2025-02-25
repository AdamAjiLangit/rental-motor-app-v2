import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { slideUp } from "../anim/anim";

export default function TextAnim({ text, customClass, textClass }) {
    const description = useRef(null);
    const isInView = useInView(description, { once: true });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        let timer;
        if (isInView) {
            timer = setTimeout(() => setShouldAnimate(true), 600);
        }
        return () => clearTimeout(timer);
    }, [isInView]);

    return (
        <div ref={description} className={customClass}>
            <p className="m-0">
                {text.split(" ").map((word, index) => (
                    <span key={index} className="relative overflow-hidden inline-flex">
                        <motion.span
                            className={textClass}
                            variants={slideUp}
                            custom={index}
                            initial="initial"
                            animate={shouldAnimate ? "open" : "closed"}
                        >
                            {word}&nbsp;
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    );
}
