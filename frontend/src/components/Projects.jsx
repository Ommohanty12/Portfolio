import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    
    // Determine how many projects to display
    const INITIAL_COUNT = 2; // Show only 2 initially
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);
    
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4 text-primary text-3xl font-serif">
                        *
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
                        Portfolio
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                        Here are some of my recent projects. Click on any project to explore its details, the skills utilized, and to request more information.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12 mb-12">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="group cursor-pointer pointer-events-auto flex flex-col"
                        >
                            {/* Made project cards slightly smaller: h-56 md:h-72 */}
                            <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 w-full mb-5 overflow-hidden bg-gray-900 border border-gray-800 rounded-lg">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    {project.shortDescription}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See More / See Less Button */}
                {projectsData.length > INITIAL_COUNT && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
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
        </section>
    );
};

export default Projects;

