import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { linkSlide, linkScale } from '@/components/anim/anim';

export default function LinkNavbar({ data, isActive, setSelectedIndicator }) {

    const { title, href, index } = data;

    return (
        <motion.div
            className="relative flex items-center"
            onMouseEnter={() => { setSelectedIndicator(href) }}
            custom={index}
            variants={linkSlide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={linkScale}
                animate={isActive ? "open" : "closed"}
                className="w-[10px] h-[10px] bg-[#F2EFE7] rounded-[50%] absolute -left-[30px]">
            </motion.div>
            <motion.div
                className="relative flex items-center text-[#F2EFE7]"
                whileHover={{ x: 20 }}
            >
                <AnimatePresence mode='wait'>
                    <Link href={href}>{title}</Link>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}