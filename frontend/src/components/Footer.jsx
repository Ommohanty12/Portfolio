import React from 'react';
import { Code, Briefcase, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-dark border-t border-white/10 py-8 text-gray-400 z-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 relative z-[20]">
                <div className="text-gray-200 pointer-events-auto">
                    &copy; {new Date().getFullYear()} Om Mohanty. All rights reserved.
                </div>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 pointer-events-auto" title="GitHub">
                        <Code size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 pointer-events-auto" title="LinkedIn">
                        <Briefcase size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 pointer-events-auto" title="Twitter">
                        <MessageCircle size={20} />
                    </a>
                    <a href="mailto:ommohanty1210@gmail.com?subject=Contact from Portfolio&body=Hi Om, I want to connect with you regarding..." className="hover:text-primary transition-colors hover:scale-110 pointer-events-auto" title="Email">
                        <Mail size={20} />
                    </a>                
                </div>
            </div>
        </footer>
    );
};

export default Footer;
