import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import skillsData from '../data/skills.json';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);

    // Initial display count
    const INITIAL_COUNT = 6;
    const displayedSkills = showAll ? skillsData : skillsData.slice(0, INITIAL_COUNT);

    return (
        <section id="skills" className="py-24 relative z-10 pointer-events-auto bg-grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
                
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/3 flex flex-col items-start"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-4 px-3.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                        <Cpu size={14} />
                        <span>02 // TECHNICAL CAPABILITIES</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">
                        Skills & <span className="text-primary">Stack</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
                        Proficient in full-stack architecture, modern frontend frameworks, cloud databases, microservices, and AI integrations. Engineered for speed, clean abstractions, and maintainable codebases.
                    </p>
                </motion.div>

                {/* Right side - Skills Grid & Toggle Button */}
                <div className="lg:w-2/3 flex flex-col">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <AnimatePresence>
                            {displayedSkills.map((skill, index) => (
                                <motion.div
                                    layout
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="glass-card border-2 border-white/10 p-6 rounded-2xl flex flex-col gap-2 hover:border-primary transition-all duration-300 group hover:-translate-y-1 shadow-xl bg-darkcard/90"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base sm:text-lg text-white font-display font-bold group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </h3>
                                        <CheckCircle2 className="w-5 h-5 text-primary opacity-90 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </div>
                                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                                        {skill.category}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* See More / See Less Button */}
                    {skillsData.length > INITIAL_COUNT && (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center mt-10"
                        >
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="flex items-center gap-3 px-8 py-3 rounded-xl border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 group pointer-events-auto shadow-glow font-mono font-bold text-xs uppercase tracking-wider"
                            >
                                <span>{showAll ? 'Show Less Capabilities' : 'See More Capabilities'}</span>
                                {showAll ? (
                                    <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                                ) : (
                                    <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                                )}
                            </button>
                        </motion.div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Skills;
