"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function CaseStudy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);

    // Calculate clip path based on x position
    // If x = 0 (left), clip is 0% from left (Full After visible) -> Wait, if handle is at left, Before (Left) is 0 width. After (Right) is 100% width.
    // Top Layer is After. So it should be fully visible. inset(0 0 0 0%).
    // If x = width (right), clip is 100% from left (No After visible). inset(0 0 0 100%).
    const clipPath = useTransform(x, [0, containerWidth], ["inset(0 0 0 0%)", "inset(0 0 0 100%)"]);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setContainerWidth(width);
            x.set(width / 2); // Start in the middle
        }

        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setContainerWidth(width);
                // Optionally reset x or keep percentage? Keeping it simple for now.
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [x]);

    return (
        <section className="w-full bg-[#0A0A0A] py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-6xl text-[#F0F0F0] tracking-tight mb-4">
                        CASE STUDY: THE TRANSFORMATION
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Instant Visual Impact: See the power of strategic design.
                    </p>
                </div>

                {/* Comparison Slider */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none bg-black">
                    {/* Labels */}
                    <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
                        <span className="text-xs font-bold tracking-widest text-white">
                            BEFORE (OLD FEED)
                        </span>
                    </div>
                    <div className="absolute top-6 right-6 z-20 bg-[#CCFF00]/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 pointer-events-none">
                        <span className="text-xs font-bold tracking-widest text-black">
                            AFTER (NEW DESIGN)
                        </span>
                    </div>

                    {/* Container for Interaction */}
                    <div
                        ref={containerRef}
                        className="relative w-full h-full"
                    >
                        {/* Bottom Layer (Before) - Always Full */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/images/works/old-feed.jpg"
                                alt="Before Transformation"
                                fill
                                className="object-cover grayscale opacity-60"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Top Layer (After) - Masked */}
                        <motion.div
                            className="absolute inset-0 w-full h-full overflow-hidden"
                            style={{ clipPath }}
                        >
                            <Image
                                src="/images/works/new-feed.jpg"
                                alt="After Transformation"
                                fill
                                className="object-cover"
                                draggable={false}
                            />
                        </motion.div>

                        {/* Slider Handle */}
                        <motion.div
                            className="absolute top-0 bottom-0 w-1 bg-[#CCFF00] z-30 cursor-ew-resize shadow-[0_0_20px_rgba(204,255,0,0.5)]"
                            style={{ x }}
                            drag="x"
                            dragConstraints={containerRef}
                            dragElastic={0}
                            dragMomentum={false}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7h8M8 17h8M12 7v10"
                                    />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7M14 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
