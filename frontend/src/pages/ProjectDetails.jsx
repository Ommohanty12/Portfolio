import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code, PlayCircle, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const proj = projectsData.find(p => p.id === parseInt(id));
        if (proj) setProject(proj);
        else navigate('/'); // fallback
    }, [id, navigate]);

    if (!project) return null;

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

                {/* Video Demo Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-white/10 mb-12 shadow-glow group"
                >
                    {project.videoDemo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            poster={project.thumbnail}
                        >
                            <source src={project.videoDemo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-dark text-gray-400">
                            <PlayCircle size={64} className="mb-4 opacity-50" />
                            <p>Demo video coming soon</p>
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
