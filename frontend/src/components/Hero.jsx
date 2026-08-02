import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Terminal } from 'lucide-react';
import profile from '../assets/om.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 relative z-10">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="w-full flex md:flex-row flex-col items-center justify-between gap-12 lg:gap-16">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-start text-left space-y-6"
                >

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-editorial-serif font-bold text-white leading-[1.05] tracking-tight">
                        I'm <span className="italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-white to-gray-300">Om Mohanty</span>
                    </h1>

                    {/* Subtitle / Role */}
                    <div className="flex flex-wrap items-center gap-3 text-gray-300 text-lg sm:text-xl font-medium">
                        <div className="w-10 h-[2px] bg-primary"></div>
                        <span className="text-primary font-mono font-semibold">Full Stack & AI Engineer</span>
                    </div>

                    {/* Short Description */}
                    <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed">
                        Crafting high-performance web platforms, microservice architectures, and AI integrations with React, Next.js, Node.js, Express, MongoDB, and Gemini APIs.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2 group pointer-events-auto"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all duration-300 pointer-events-auto"
                        >
                            Explore Projects
                        </button>
                    </div>
                </motion.div>

                {/* Right: Profile Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center md:justify-end relative"
                >
                    <div className="relative w-[85%] sm:w-[75%] md:w-[85%] lg:w-[75%] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-3 border border-white/15 shadow-2xl group">
                        <div
                            className="w-full h-full bg-cover bg-center rounded-2xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            style={{ backgroundImage: `url(${profile})` }}
                        >
                            {/* Theme Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-75 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-darker/40 via-transparent opacity-50 pointer-events-none"></div>
                        </div>

                        {/* Floating Micro Card Accent */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-darker/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-gray-300 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-primary" />
                                <span>Full Stack Developer</span>
                            </div>
                            <span className="text-emerald-400 font-bold">100% Client Satisfaction</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
