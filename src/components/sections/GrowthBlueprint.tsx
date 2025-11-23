"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GrowthBlueprint() {
    return (
        <section className="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-white text-xl md:text-2xl mb-4"
                    >
                        GROSIR OJOLALI.
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl text-white leading-tight"
                    >
                        REAL-WORLD IMPACT:
                        <br />
                        <span className="text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                            FROM SCROLLS TO SALES
                        </span>
                    </motion.h2>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative">

                    {/* Connector Lines (Desktop Only) */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
                            {/* Line 1: Phone to Graph */}
                            <motion.path
                                d="M 300 300 C 350 300, 400 400, 500 400"
                                stroke="#CCFF00"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            />
                            {/* Line 2: Graph to Review Card */}
                            <motion.path
                                d="M 700 300 C 800 300, 850 400, 900 400"
                                stroke="#CCFF00"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                            />
                        </svg>
                    </div>

                    {/* 1. The Strategy Engine (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center relative z-10"
                    >
                        {/* iPhone Mockup */}
                        <div className="relative w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10">
                            {/* Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="w-full h-full bg-[#0f0f0f] relative">
                                <Image
                                    src="/images/works/tiktok-ojolali.jpg"
                                    alt="Ojolali TikTok Profile"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay Gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <p className="mt-6 text-gray-400 text-sm font-medium tracking-wider uppercase">
                            THE STRATEGY ENGINE
                            <br />
                            <span className="text-white/60 text-xs normal-case">(TikTok Reach)</span>
                        </p>
                    </motion.div>

                    {/* 2. The Core Narrative (Center) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center text-center relative z-10"
                    >
                        {/* Graph Container */}
                        <div className="relative w-full max-w-[350px] aspect-square flex items-end justify-center p-8">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 border-l border-b border-white/10" />

                            {/* Bars */}
                            <div className="flex items-end gap-3 w-full h-full px-4 pb-1">
                                {[30, 45, 40, 60, 55, 80, 100].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                        className="flex-1 bg-[#CCFF00]/20 rounded-t-sm relative group"
                                    >
                                        <div className="absolute bottom-0 left-0 w-full bg-[#CCFF00] opacity-80 group-hover:opacity-100 transition-opacity" style={{ height: '100%' }} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Arrow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, type: "spring" }}
                                className="absolute top-0 right-0 text-[#CCFF00] drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                            >
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </motion.div>

                            {/* Big Data Text */}
                            <div className="absolute top-10 left-0 text-left">
                                <h3 className="text-5xl font-bold text-[#CCFF00] leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                    2X
                                </h3>
                                <p className="text-white font-bold text-lg leading-none mt-1">
                                    REVENUE
                                    <br />
                                    GROWTH
                                </p>
                                <p className="text-white/50 text-sm mt-2 font-mono">
                                    (2023 - 2025)
                                </p>
                            </div>
                        </div>

                        {/* Caption */}
                        <p className="mt-8 text-gray-400 max-w-xs mx-auto leading-relaxed">
                            Transforming content into cash flow. We doubled revenue through strategic design and storytelling.
                        </p>
                    </motion.div>

                    {/* 3. Real-World Validation (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center relative z-10"
                    >
                        {/* Glass Card - Replaced with Image */}
                        <div className="relative w-[300px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/images/works/ulasan.jpg"
                                    alt="Real World Validation Reviews"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <p className="mt-10 text-gray-400 text-sm font-medium tracking-wider uppercase text-center">
                            REAL-WORLD VALIDATION
                            <br />
                            <span className="text-white/60 text-xs normal-case">(Reviews & Foot Traffic)</span>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
