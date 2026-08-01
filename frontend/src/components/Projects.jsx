import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

// Single Project Card Component with Image Carousel
const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();
    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumbnail];
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-primary/40 transition-all duration-500 shadow-xl"
        >
            <div>
                {/* Image Gallery / Carousel Section */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-darker group/slider">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImgIndex}
                            src={images[currentImgIndex]}
                            alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-black/20 opacity-80 pointer-events-none"></div>

                    {/* Category Badge Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-darker/80 text-primary border border-primary/30 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>

                    {/* Navigation Arrows for Gallery */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                aria-label="Previous Image"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next Image"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary"
                            >
                                <ChevronRight size={18} />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImgIndex(i);
                                        }}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            i === currentImgIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/40 hover:bg-white'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4">
                    {/* Project Title */}
                    <div className="flex items-start justify-between gap-4">
                        <h3
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors cursor-pointer"
                        >
                            {project.title}
                        </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2">
                        <p className="text-xs font-mono uppercase text-gray-500 mb-2 flex items-center gap-1.5">
                            <Layers size={14} className="text-primary" />
                            <span>Tech Stack</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 mt-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-glow transition-all duration-300 group/btn"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                    )}

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                        >
                            <FaGithub size={16} />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>

                <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="text-xs font-mono text-gray-400 hover:text-primary transition-colors flex items-center gap-1 ml-auto"
                >
                    <span>View Case Study</span>
                    <ChevronRight size={14} />
                </button>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    // Requirement: Initially display only first 3 projects
    const INITIAL_COUNT = 3;
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center items-center gap-2 mb-3 text-primary font-mono text-sm uppercase tracking-wider">
                        <Sparkles size={16} />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        A curated selection of AI applications, SaaS platforms, and full-stack web solutions engineered for performance, scale, and modern user experiences.
                    </p>
                </motion.div>

                {/* Responsive Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* See More Projects / See Less Button */}
                {projectsData.length > INITIAL_COUNT && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-16"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-glow font-medium text-base group pointer-events-auto"
                        >
                            <span>{showAll ? 'Show Less Projects' : 'See More Projects'}</span>
                            {showAll ? (
                                <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
