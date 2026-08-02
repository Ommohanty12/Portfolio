import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const proj = projectsData.find(p => p.id === parseInt(id));
        if (proj) setProject(proj);
        else navigate('/'); // fallback
    }, [id, navigate]);

    if (!project) return null;

    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumbnail];

    const handlePrev = () => {
        setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group pointer-events-auto"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            {project.title}
                        </h1>
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                            {project.category}
                        </span>
                    </div>
                </motion.div>

                {/* Main Photo Gallery Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 space-y-4"
                >
                    <div className="relative w-full h-[280px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden glass border border-white/10 shadow-glow group bg-darker">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImgIndex}
                                src={images[currentImgIndex]}
                                alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous Image"
                                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-darker/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary shadow-lg pointer-events-auto"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next Image"
                                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-darker/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:border-primary shadow-lg pointer-events-auto"
                                >
                                    <ChevronRight size={20} />
                                </button>

                                {/* Photo Counter Badge */}
                                <div className="absolute top-4 right-4 bg-darker/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-300">
                                    {currentImgIndex + 1} / {images.length}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Thumbnail Selector Strip */}
                    {images.length > 1 && (
                        <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 px-1">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImgIndex(idx)}
                                    className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                                        idx === currentImgIndex
                                            ? 'border-primary scale-105 shadow-glow'
                                            : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                                    }`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Main Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Project Overview</h2>
                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </div>
                        
                        {project.whatItSolves && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-primary">What It Solves</h2>
                                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line bg-white/5 p-6 rounded-2xl border border-white/10">
                                    {project.whatItSolves}
                                </p>
                            </div>
                        )}
                    </motion.div>

                    {/* Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg">
                            <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>

                            <div className="space-y-4">
                                {Object.entries(project.skillsUsed).map(([category, skills]) => (
                                    <div key={category} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                        <h4 className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{category}</h4>
                                        <p className="text-sm text-gray-300 flex items-start gap-2">
                                            {skills}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full sm:w-auto px-6 py-2.5 mt-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full font-medium text-sm shadow-[0_0_15px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_20px_rgba(var(--color-primary),0.5)] border border-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group pointer-events-auto"
                        >
                            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                            <span>Request</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Contact Us Modal popup */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass max-w-md w-full p-8 rounded-3xl border border-primary/20 shadow-glow relative overflow-hidden"
                        >
                            {/* Decorative glows */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-[50px]"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <MessageCircle size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white">Contact Request</h3>

                                <p className="text-gray-300 text-base">
                                    Do you want to contact us regarding <strong>{project.title}</strong> or not?
                                </p>

                                <div className="flex gap-4 w-full mt-6">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all"
                                    >
                                        No, Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowModal(false);
                                            navigate('/');
                                            setTimeout(() => {
                                                const contactEl = document.getElementById('contact');
                                                if (contactEl) {
                                                    contactEl.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, 500);
                                        }}
                                        className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        Yes, Contact
                                        <Mail size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectDetails;
