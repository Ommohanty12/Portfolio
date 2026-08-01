import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const socialPlatforms = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Ommohanty12', color: 'hover:text-white hover:border-white shadow-glow' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/om-mohanty', color: 'hover:text-blue-400 hover:border-blue-400' },
    { name: 'X (Twitter)', icon: FaXTwitter, url: 'https://x.com/ommohanty', color: 'hover:text-sky-400 hover:border-sky-400' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/ommohanty', color: 'hover:text-pink-500 hover:border-pink-500' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ommohanty1210@gmail.com?subject=Contact from Portfolio', color: 'hover:text-primary hover:border-primary' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/917846931505', color: 'hover:text-emerald-400 hover:border-emerald-400' },
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Ommohanty12/', color: 'hover:text-amber-500 hover:border-amber-500' },
    { name: 'HackerRank', icon: SiHackerrank, url: 'https://hackerrank.com/ommohanty', color: 'hover:text-emerald-500 hover:border-emerald-500' },
    { name: 'CodeChef', icon: SiCodechef, url: 'https://codechef.com/users/ommohanty', color: 'hover:text-amber-700 hover:border-amber-700' },
    { name: 'GeeksforGeeks', icon: SiGeeksforgeeks, url: 'https://geeksforgeeks.org/user/ommohanty', color: 'hover:text-green-500 hover:border-green-500' },
];

const Footer = () => {
    return (
        <footer className="w-full bg-darker border-t border-white/10 py-12 text-gray-400 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-8">
                
                {/* Brand / Logo */}
                <div className="flex flex-col items-center text-center">
                    <a href="#home" className="text-3xl font-serif text-primary hover:rotate-180 transition-transform duration-500 inline-block mb-2">
                        *
                    </a>
                    <h3 className="text-xl font-bold text-white tracking-wide">Om Mohanty</h3>
                    <p className="text-xs font-mono text-gray-500 mt-1">Full Stack & AI Developer</p>
                </div>

                {/* Social Media Circular Buttons Grid with Tooltips & Glow */}
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-3xl">
                    {socialPlatforms.map((social) => {
                        const Icon = social.icon;
                        return (
                            <div key={social.name} className="relative group">
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110 shadow-lg ${social.color}`}
                                >
                                    <Icon size={18} />
                                </a>

                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-20">
                                    <span className="bg-darker text-white text-[11px] font-mono py-1 px-2.5 rounded-lg border border-white/10 shadow-xl whitespace-nowrap">
                                        {social.name}
                                    </span>
                                    <div className="w-2 h-2 bg-darker rotate-45 -mt-1 border-r border-b border-white/10"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-500 font-mono pt-4 border-t border-white/5 w-full">
                    &copy; {new Date().getFullYear()} Om Mohanty. Built with React, Tailwind CSS, & Framer Motion.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
