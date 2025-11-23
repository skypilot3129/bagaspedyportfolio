"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full bg-[#0A0A0A] py-32 px-6 md:px-12 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center">

                {/* Left: Image Wrapper (40-50% width) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-[45%] relative z-10 pr-0 md:pr-12"
                >
                    <div className="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-125">
                        <Image
                            src="/images/works/bagaspedy.jpg" // Placeholder - using existing image for now
                            alt="The Strategist"
                            fill
                            className="object-cover"
                        />
                        {/* Grain/Texture Overlay */}
                        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Right: Text Content Wrapper (Overlapping) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full md:w-[65%] relative z-20 mt-[-10%] md:mt-0 md:-ml-24 flex flex-col justify-center"
                >
                    <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/5">
                        <h2 className="font-serif text-5xl md:text-7xl text-white font-bold leading-[0.9] mb-8 tracking-tight">
                            THE STRATEGIST
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                                BEHIND THE SCREENS
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-sans">
                            "In a world of visual noise, the brands that win aren’t the loudest—they’re the most honest. I don’t just design pretty feeds; I craft strategic visual narratives that connect, convert, and build lasting communities. Let’s find your story."
                        </p>

                        {/* Signature Section */}
                        <div className="mt-12 relative">
                            <motion.div
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                className="relative w-fit transform -rotate-6"
                            >
                                <h3 className="font-handwriting text-6xl md:text-7xl text-[#bef264] drop-shadow-[0_0_10px_rgba(190,242,100,0.5)]">
                                    Bagaspedy
                                </h3>
                                {/* Underline SVG Animation */}
                                <svg className="absolute -bottom-2 left-0 w-full h-8" viewBox="0 0 200 20" fill="none">
                                    <motion.path
                                        d="M 5 10 Q 100 20 195 5"
                                        stroke="#bef264"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
