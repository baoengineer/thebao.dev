import * as React from 'react';
import { motion } from 'framer-motion';

function MoonIcon() {
    const variants = {
        initial: { scale: 0.6, rotate: 90 },
        animate: {
            scale: 1,
            rotate: 0,
            transition: { type: 'spring', stiffness: 200, damping: 10 },
        },
        whileTap: { scale: 0.95, rotate: 15 },
    };

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 50 50"
            key="moon"
        >
            <motion.path
                d="M43.81 29.354a1.565 1.565 0 00-1.956-1.033A16.412 16.412 0 0121.683 8.133a1.564 1.564 0 00-1.947-1.946A19.532 19.532 0 005.55 26.776a19.533 19.533 0 0017.685 17.675 19.533 19.533 0 0020.581-14.198 1.564 1.564 0 00-.006-.899z"
                fill="currentColor"
                initial="initial"
                animate="animate"
                whileTap="whileTap"
                variants={variants}
            />
        </motion.svg>
    );
}

export default MoonIcon;
