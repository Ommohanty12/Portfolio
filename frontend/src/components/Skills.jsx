import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import skillsData from '../data/skills.json';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    
    // Determine how many skills to display initially
    const INITIAL_COUNT = 6;
    const displayedSkills = showAll ? skillsData : skillsData.slice(0, INITIAL_COUNT);

    return (
        <section id="skills" className="py-24 z-10 pointer-events-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8">
                
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/3 flex flex-col items-start"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <p className="text-xl text-primary">Capabilities</p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
                        My Skills
                    </h2>
                    <p className="text-gray-400 mb-10 leading-relaxed text-sm">
                        These are the technologies and tools I currently work with. You can easily add more skills to this list as I continue to learn and grow.
                    </p>
                </motion.div>

                {/* Right side - Skills Grid & Toggle Button */}
                <div className="md:w-2/3 flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        {displayedSkills.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-dark/50 border border-white/10 p-6 rounded-2xl flex flex-col gap-2 hover:border-primary/50 transition-colors cursor-pointer group"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg text-white font-medium group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </h3>
                                    <CheckCircle2 className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-gray-500">
                                    {skill.category}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* See More / See Less Button */}
                    {skillsData.length > INITIAL_COUNT && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center mt-10"
                        >
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="flex items-center gap-2 px-8 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 group pointer-events-auto shadow-[0_0_15px_rgba(var(--color-primary),0.1)] hover:shadow-glow"
                            >
                                <span>{showAll ? 'See Less' : 'See More'}</span>
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
