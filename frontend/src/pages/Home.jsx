import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-20"
        >
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </motion.div>
    );
};

export default Home;
