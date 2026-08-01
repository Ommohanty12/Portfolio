import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Phone, Mail, User, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    // Contact Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    // WhatsApp Generator State
    const [waName, setWaName] = useState('');
    const [waMessage, setWaMessage] = useState('');

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Form Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('All fields (Name, Email, Subject, Message) are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('https://portfolio-1-ekza.onrender.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Network error. Failed to connect to server.');
        }

        setTimeout(() => {
            if (status !== 'loading') setStatus('idle');
        }, 6000);
    };

    // WhatsApp Action
    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const name = waName.trim() || 'Visitor';
        const customMessage = waMessage.trim() || 'I would like to discuss a project with you.';
        const phoneNumber = '917903669654';

        const fullMessage = `Hello Om,\n\nMy name is ${name}.\n\n${customMessage}\n\nI visited your portfolio and would like to connect with you regarding a project.\n\nThanks!`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-24 relative z-10 pointer-events-auto">
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
                        <MessageSquare size={16} />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-bold text-white mb-6 tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Have a project in mind or a potential opportunity? Send a direct email or connect instantly via WhatsApp below.
                    </p>
                </motion.div>

                {/* Two Equal Responsive Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* LEFT SIDE: Redesigned Contact Form with Floating Labels */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                                <p className="text-xs text-gray-400 font-mono">Fill out the form below</p>
                            </div>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="floating-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="floating-input"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <label htmlFor="name" className="floating-label">Your Name</label>
                                </div>

                                {/* Email Input */}
                                <div className="floating-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        className="floating-input"
                                        placeholder="Your Email"
                                        required
                                    />
                                    <label htmlFor="email" className="floating-label">Your Email</label>
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="floating-group">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleFormChange}
                                    className="floating-input"
                                    placeholder="Subject"
                                    required
                                />
                                <label htmlFor="subject" className="floating-label">Subject</label>
                            </div>

                            {/* Message Input */}
                            <div className="floating-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    rows={5}
                                    className="floating-input resize-none"
                                    placeholder="Your Message"
                                    required
                                />
                                <label htmlFor="message" className="floating-label">Message</label>
                            </div>

                            {/* Error Alert */}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-sm"
                                >
                                    <AlertCircle size={18} className="shrink-0" />
                                    <span>{errorMessage}</span>
                                </motion.div>
                            )}

                            {/* Success Toast */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20 text-sm"
                                >
                                    <CheckCircle2 size={18} className="shrink-0" />
                                    <span>Thank you! Your message has been sent successfully.</span>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
                            >
                                {status === 'loading' ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT SIDE: WhatsApp Contact Generator Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border border-emerald-500/20 relative overflow-hidden bg-gradient-to-b from-emerald-950/20 via-darker to-darker shadow-2xl"
                    >
                        {/* Ambient Green Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none"></div>

                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                                    <FaWhatsapp size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Direct WhatsApp</h3>
                                    <p className="text-xs text-emerald-400 font-mono">Instant Chat Widget</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                Online
                            </span>
                        </div>

                        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Prefer an immediate chat? Generate a custom WhatsApp message to connect directly with Om in real-time.
                            </p>

                            {/* Visitor Name Input */}
                            <div className="floating-group">
                                <input
                                    type="text"
                                    id="waName"
                                    value={waName}
                                    onChange={(e) => setWaName(e.target.value)}
                                    className="floating-input border-emerald-500/20 focus:border-emerald-500 focus:ring-emerald-500"
                                    placeholder="Your Name"
                                />
                                <label htmlFor="waName" className="floating-label">Your Name</label>
                            </div>

                            {/* Custom Message Input */}
                            <div className="floating-group">
                                <textarea
                                    id="waMessage"
                                    value={waMessage}
                                    onChange={(e) => setWaMessage(e.target.value)}
                                    rows={4}
                                    className="floating-input border-emerald-500/20 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                                    placeholder="Custom Message (Optional)"
                                />
                                <label htmlFor="waMessage" className="floating-label">Custom Message (Optional)</label>
                            </div>

                            {/* Preview Card */}
                            <div className="p-4 rounded-xl bg-darker/80 border border-white/10 text-xs font-mono text-gray-400 space-y-1">
                                <p className="text-gray-500 uppercase tracking-wider">Generated Output Preview:</p>
                                <p className="text-gray-300 italic">
                                    "Hello Om, My name is {waName.trim() || '[Your Name]'}. {waMessage.trim() || '[Your Message]'} I visited your portfolio..."
                                </p>
                            </div>

                            {/* Chat on WhatsApp Button */}
                            <button
                                type="submit"
                                className="w-full py-4 px-8 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium rounded-xl shadow-glow-green transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
                                <span>Chat on WhatsApp</span>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
