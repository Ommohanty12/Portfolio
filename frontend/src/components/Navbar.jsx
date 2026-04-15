import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(id);
            }, 500);
        } else {
            scrollToSection(id);
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const topPos = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - 80,
                behavior: 'smooth'
            });
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`w-full transition-all duration-300 py-4 sm:py-6 ${scrolled ? "bg-black shadow-lg" : ""}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* LEFT */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* LOGO */}
                <div
                    className="flex-shrink-0 cursor-pointer text-primary text-2xl sm:text-3xl flex-1 md:flex-none text-center md:text-left"
                    onClick={() => handleNavClick('home')}
                >
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block font-serif"
                    >
                        *
                    </motion.div>
                </div>

                {/* MOBILE BUTTON */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* RIGHT ICONS */}
                <div className="hidden md:flex items-center space-x-4 text-gray-400">
                    <a href="#" className="hover:text-white">
                        <FaFacebook size={16} />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaTwitter size={16} />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaInstagram size={16} />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaLinkedin size={16} />
                    </a>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 space-y-2 border-t border-gray-800 pt-4 px-4"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;