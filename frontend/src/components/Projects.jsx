import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import TiltWrapper from './TiltWrapper';

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
        <TiltWrapper className="h-full">
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-3xl overflow-hidden border-2 border-white/10 flex flex-col justify-between group hover:border-primary transition-all duration-500 shadow-2xl bg-darkcard/90 h-full"
        >
            <div>
                {/* Image Gallery / Carousel Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-darker group/slider">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-black/30 opacity-90 pointer-events-none"></div>

                    {/* Index & Category Badges Top Left & Right */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md text-xs font-mono font-black bg-primary text-white uppercase tracking-wider">
                            0{index + 1}
                        </span>
                        <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-darker/90 text-gray-200 border border-white/20 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>

                    {/* Navigation Arrows for Gallery */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                aria-label="Previous Image"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary shadow-lg"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next Image"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary shadow-lg"
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
                            className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-primary transition-colors cursor-pointer tracking-tight"
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
                        <p className="text-xs font-mono uppercase font-bold text-primary mb-2.5 flex items-center gap-1.5 tracking-wider">
                            <Layers size={14} />
                            <span>TECH STACK</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="tech-badge font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 mt-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow transition-all duration-300 group/btn border border-primary"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                    )}
                </div>

                <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-primary transition-colors flex items-center gap-1 ml-auto"
                >
                    <span>View Case Study</span>
                    <ChevronRight size={14} />
                </button>
            </div>
        </motion.div>
        </TiltWrapper>
    );
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    // Requirement: Initially display at most 2 projects
    const INITIAL_COUNT = 2;
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);

    return (
        <section id="projects" className="py-24 relative z-10 bg-grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-4 px-3.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                        <Sparkles size={14} />
                        <span>01 // FEATURED WORK</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        A curated selection of AI applications, SaaS platforms, and full-stack web solutions engineered for performance, scale, and modern user experiences.
                    </p>
                </motion.div>

                {/* Responsive Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            className="flex items-center gap-3 px-8 py-3.5 rounded-xl border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-glow font-mono font-bold text-sm uppercase tracking-wider group pointer-events-auto"
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
