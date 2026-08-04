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
        <section id="resume" className="py-24 relative z-10 pointer-events-auto bg-grid-pattern">
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
                        <FileText size={14} />
                        <span>03 // CURRICULUM VITAE</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">
                        Resume & <span className="text-primary">Background</span>
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
                    className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-white/10 relative overflow-hidden shadow-2xl bg-darkcard/90"
                >
                    {/* Top Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                <Briefcase size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide">Om Mohanty's Resume</h3>
                                <p className="text-xs text-primary font-mono font-bold uppercase tracking-wider">PDF DOCUMENT • 2026 EDITION</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href={resumeUrl}
                                download="Om_Mohanty_Resume.pdf"
                                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow transition-all duration-300 group border border-primary"
                            >
                                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                <span>Download Resume</span>
                            </a>

                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-darker hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group"
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
                                    <h4 className="text-xl font-bold text-white mb-2 font-display">Resume Preview</h4>
                                    <p className="text-gray-400 text-sm max-w-md">
                                        Inline PDF preview is not supported on this browser/device. You can easily download or open the full resume directly.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-2xl mt-4">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <h5 className="text-xs font-mono text-primary font-bold uppercase tracking-wider">{item.title}</h5>
                                                <p className="text-sm text-gray-200 mt-1">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={resumeUrl}
                                        download="Om_Mohanty_Resume.pdf"
                                        className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-glow flex items-center gap-2 border border-primary"
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
