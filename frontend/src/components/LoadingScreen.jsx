import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-darker">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            >
                Loading...
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
