"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const texts = ["Concept", "Story", "Visual", "BAGASPEDY"];

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        // Counter Animation
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 20ms * 100 = 2000ms (2s)

        // Text Sequence Animation
        const textInterval = setInterval(() => {
            setTextIndex((prev) => {
                if (prev >= texts.length - 1) {
                    clearInterval(textInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 600); // Change text every 600ms

        // Finish Loading
        const timeout = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 2500); // Total duration 2.5s

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
            clearTimeout(timeout);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={texts[textIndex]}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.3 }}
                                className="text-white font-serif text-4xl md:text-6xl tracking-widest"
                            >
                                {texts[textIndex]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Right Counter */}
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                        <p className="text-[#bef264] font-mono text-xl md:text-2xl font-bold">
                            {count}%
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
