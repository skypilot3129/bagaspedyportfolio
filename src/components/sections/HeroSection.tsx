"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0A0A0A] text-white overflow-hidden px-6 md:px-12 pt-24 md:pt-20 pb-12">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Typography & CTA */}
                <div className="flex flex-col items-start z-10">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
                    >
                        {["ELEVATING", "BRAND", "PRESENCE"].map((word, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                                }}
                                className="block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="font-sans text-lg md:text-xl text-gray-400 mb-10 max-w-md"
                    >
                        through Social Media Design
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(204, 255, 0, 0.4)" }}
                        className="interactive px-8 py-4 bg-[#CCFF00] text-black font-bold rounded-full text-sm tracking-widest hover:bg-[#b3e600] transition-colors"
                    >
                        LIHAT PORTFOLIO
                    </motion.button>
                </div>

                {/* Right Column: Visual Interactive */}
                <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[300px] md:max-w-[350px] h-[500px] md:h-[700px]"
                    >
                        {/* Glassmorphism Element */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 z-0 transform -rotate-6" />

                        {/* Phone Mockup */}
                        <div className="relative w-full h-full bg-black rounded-[3rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl z-10">
                            {/* Video Content */}
                            <div className="absolute inset-0 bg-black">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/poster-image.jpg" // Opsional: gambar thumbnail sebelum video load
                                >
                                    <source src="/videos/reel.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Overlay Gradient (Opsional, agar teks lebih terbaca jika ada) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-gray-500"
            >
                SCROLL FOR MORE ↓
            </motion.div>
        </section>
    );
}
