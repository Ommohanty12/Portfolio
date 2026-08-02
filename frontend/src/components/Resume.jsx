import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = () => {
    const [pdfError, setPdfError] = useState(false);
    const resumeUrl = '/assets/resume/Om_Mohanty.pdf';

    const highlights = [
        { title: 'Experience', detail: 'Full Stack & AI Engineer building scalable web apps and microservices' },
        { title: 'Primary Stack', detail: 'React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Gemini API' },
        { title: 'Education', detail: 'Bachelor of Technology in Computer Science & Engineering' },
        { title: 'Certifications', detail: 'Full Stack Web Development & AI Application Building' }
    ];

    return (
        <section id="resume" className="py-24 relative z-10 pointer-events-auto">
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
                        <FileText size={16} />
                        <span>Curriculum Vitae</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-bold text-white mb-6 tracking-tight">
                        Resume & Background
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Explore my professional background, technical expertise, and career accomplishments. Download a copy or view the interactive preview below.
                    </p>
                </motion.div>

                {/* Main Resume Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl"
                >
                    {/* Top Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                <Briefcase size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Om Mohanty's Resume</h3>
                                <p className="text-xs text-gray-400 font-mono">PDF Document • Up to date</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href={resumeUrl}
                                download="Om_Mohanty_Resume.pdf"
                                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-glow transition-all duration-300 group"
                            >
                                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                <span>Download Resume</span>
                            </a>

                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 group"
                            >
                                <span>Open in New Tab</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* PDF Preview container */}
                    <div className="relative w-full rounded-2xl overflow-hidden bg-darker border border-white/10 min-h-[500px] flex flex-col">
                        {!pdfError ? (
                            <iframe
                                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                                title="Om Mohanty Resume Preview"
                                className="w-full h-[600px] border-0 rounded-2xl"
                                onError={() => setPdfError(true)}
                            />
                        ) : (
                            /* Fallback Preview Card */
                            <div className="p-8 flex flex-col justify-center items-center text-center space-y-6 my-auto">
                                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                                    <FileText size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Resume Preview</h4>
                                    <p className="text-gray-400 text-sm max-w-md">
                                        Inline PDF preview is not supported on this browser/device. You can easily download or open the full resume directly.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl mt-4">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <h5 className="text-xs font-mono text-primary uppercase">{item.title}</h5>
                                                <p className="text-sm text-gray-200 mt-1">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={resumeUrl}
                                        download="Om_Mohanty_Resume.pdf"
                                        className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white text-sm font-medium transition-all shadow-glow flex items-center gap-2"
                                    >
                                        <Download size={16} />
                                        <span>Download PDF</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
