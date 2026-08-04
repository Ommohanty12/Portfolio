import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Terminal, Flame, Globe, Compass } from 'lucide-react';
import profile from '../assets/om.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 relative z-10 bg-grid-pattern">
            {/* Ambient Vermillion Background Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center justify-between gap-12 lg:gap-16 my-auto">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-start text-left space-y-6"
                >
                    {/* Top Sticker Badges inspired by Kevin Luna design */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="sticker-tag-red">
                            <Flame size={14} />
                            <span>Full Stack & AI Developer</span>
                        </span>
                        <span className="sticker-tag">
                            <Globe size={14} />
                            <span>India • 2026 Edition</span>
                        </span>
                    </div>

                    {/* Main Headline with Red Pop (Hola! Soy Kevin Luna style) */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[1.02] tracking-tight">
                        Hello! I'm <br className="hidden sm:inline" />
                        <span className="text-primary underline decoration-white/20 decoration-wavy decoration-2">Om Mohanty</span>
                    </h1>

                    {/* Subtitle / Role Tag */}
                    <div className="flex flex-wrap items-center gap-3 text-gray-300 text-base sm:text-lg font-mono">
                        <span className="text-primary font-bold">///</span>
                        <span>Building High-Performance Web Apps, Microservices & AI Systems</span>
                    </div>

                    {/* Short Description */}
                    <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
                        Architecting modern web platforms, scalable Node.js microservices, and intelligent AI integrations using React, Next.js, Express, MongoDB, and Gemini APIs.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-3 group pointer-events-auto border-2 border-primary"
                        >
                            <span className="tracking-wide uppercase text-sm font-mono">Get In Touch</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </button>

                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-darkcard hover:bg-white/10 border-2 border-white/15 text-white font-bold rounded-xl transition-all duration-300 pointer-events-auto uppercase text-sm font-mono tracking-wide"
                        >
                            Explore Projects
                        </button>
                    </div>
                </motion.div>

                {/* Right: Profile Visual with Cutout Outline & Sticker Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center md:justify-end relative"
                >
                    <div className="relative w-[85%] sm:w-[75%] md:w-[85%] lg:w-[80%] aspect-[4/5] rounded-3xl p-3 bg-darkcard border-4 border-primary shadow-[10px_10px_0px_#FF3B00] group transform hover:rotate-1 transition-all duration-500">
                        
                        {/* Profile Image with Cutout Mask / Frame */}
                        <div
                            className="w-full h-full bg-cover bg-center rounded-2xl overflow-hidden relative transition-all duration-700 ease-in-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${profile})` }}
                        >
                            {/* Theme Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-60 pointer-events-none"></div>
                        </div>

                        {/* Sticker Tag Overlay */}
                        <div className="absolute -top-4 -left-4 bg-white text-darker font-mono font-black text-xs px-3 py-1.5 rounded-lg border-2 border-darker shadow-md uppercase tracking-wider transform -rotate-6">
                            BUILT BY OM
                        </div>

                        {/* Floating Micro Card Accent */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-darker/95 backdrop-blur-xl border border-white/15 text-xs font-mono text-gray-300 flex items-center justify-between shadow-xl">
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-primary" />
                                <span className="font-bold text-white">Full Stack & AI</span>
                            </div>
                            <span className="text-primary font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/30">100% Client Satisfaction</span>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scrolling Marquee Banner underneath Hero (inspired by Kevin Luna portfolio bottom ticker) */}
            <div className="w-full border-y border-white/15 bg-darkcard/80 backdrop-blur-md py-3.5 mt-16 overflow-hidden select-none">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-gray-300">
                    <span className="flex items-center gap-3 text-primary"><Flame size={16} /> FULL STACK DEVELOPER</span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3"><Sparkles size={16} className="text-primary" /> AI DEVELOPER </span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3 text-primary"><Code2 size={16} /> MICROSERVICE ARCHITECTURES</span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3"><Globe size={16} className="text-primary" /> REACT, NEXT.JS & NODE.JS</span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3 text-primary"><Flame size={16} /> FULL STACK DEVELOPER</span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3"><Sparkles size={16} className="text-primary" /> AI DEVELOPER </span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3 text-primary"><Code2 size={16} /> MICROSERVICE ARCHITECTURES</span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-3"><Globe size={16} className="text-primary" /> REACT, NEXT.JS & NODE.JS</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
