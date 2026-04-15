import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/om.jpg';
const Hero = () => {
    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center pt-8 sm:pt-10 pb-12 sm:pb-16 z-10">
            <div className="w-full flex md:flex-row flex-col items-center justify-between gap-10 md:gap-8">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-start text-left space-y-6"
                >
                    <p className="text-gray-400 text-lg font-medium tracking-wide">Hey there.</p>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium text-white leading-tight">
                        I'm Om<br />Mohanty
                    </h1>

                    <div className="flex items-center gap-4 text-gray-400 mt-2">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <p className="text-xl">Full Stack Developer</p>
                    </div>

                    <p className="max-w-md text-gray-500 text-sm leading-relaxed mt-4">
                        I am a full stack developer with experience in building web applications. I am passionate about creating user-friendly and efficient applications.
                    </p>

                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 bg-primary hover:bg-secondary text-white font-medium py-3 px-8 transition-colors duration-300 relative z-20 pointer-events-auto shadow-glow">
                        Get in touch
                    </button>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center md:justify-end relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] mt-8 md:mt-0"
                >
                    {/* Decreased width from 85% to 75% and added rounded corners for a cleaner look */}
                    <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] h-full bg-cover bg-center rounded-xl overflow-hidden relative" style={{ backgroundImage: `url(${profile})` }}>
                        {/* Gradients or overlays to match the dark moody theme */}
                        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-80 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-darker via-transparent opacity-40 pointer-events-none"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
