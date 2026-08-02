import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Capabilities', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            setTimeout(() => {
                scrollToSection(id);
            }, 50);
        }
    };

    const scrollToSection = (id) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            const topPos = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
            scrolled ? "bg-darker/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" : "bg-transparent py-5"
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* LOGO */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => handleNavClick('home')}
                >
                    <motion.span
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="text-primary text-2xl sm:text-3xl font-serif leading-none"
                    >
                        *
                    </motion.span>
                    <span className="font-display font-bold text-lg text-white tracking-wide group-hover:text-primary transition-colors">
                        Om Mohanty
                    </span>
                </div>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden md:flex items-center space-x-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="text-gray-300 hover:text-white px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all hover:bg-white/10"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* RIGHT ACTIONS */}
                <div className="hidden md:flex items-center space-x-3 text-gray-400">
                    <a
                        href="https://github.com/Ommohanty12"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-white transition-all shadow-glow hover:scale-105"
                    >
                        <FaGithub size={15} />
                    </a>
                    <a
                        href="https://linkedin.com/in/om-mohanty"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition-all hover:scale-105"
                    >
                        <FaLinkedin size={15} />
                    </a>
                    <a
                        href="https://wa.me/917846931505"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-400 transition-all hover:scale-105"
                    >
                        <FaWhatsapp size={16} />
                    </a>

                    <button
                        onClick={() => handleNavClick('contact')}
                        className="ml-2 px-4 py-2 rounded-full bg-primary hover:bg-secondary text-white font-medium text-xs shadow-glow transition-all duration-300"
                    >
                        Hire Me
                    </button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="text-gray-300 hover:text-white p-2"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-darker/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl font-mono text-sm"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <a href="https://github.com/Ommohanty12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FaGithub size={18} />
                                </a>
                                <a href="https://linkedin.com/in/om-mohanty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href="https://wa.me/917846931505" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
                                    <FaWhatsapp size={18} />
                                </a>
                            </div>
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-medium"
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;