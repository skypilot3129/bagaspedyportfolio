"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react"; // Using Twitter icon as placeholder for TikTok if not available, or just standard icons
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0A0A0A] pt-20 pb-10 overflow-hidden relative">
            {/* Infinite Marquee */}
            <div className="relative w-full py-10 border-y border-white/10 group cursor-pointer">
                <Link href="mailto:hello@bagaspedy.com">
                    <div className="flex whitespace-nowrap">
                        <motion.div
                            className="flex"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20,
                            }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-8xl md:text-9xl font-extrabold px-4 transition-all duration-300
                                    text-transparent stroke-text group-hover:text-[#bef264] group-hover:stroke-transparent"
                                    style={{
                                        WebkitTextStroke: "1px white",
                                    }}
                                >
                                    LET’S COLLABORATE — OPEN FOR WORK —
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </Link>

                {/* Hover Overlay to pause animation (Optional - CSS based pause is tricky with Framer Motion, 
                    so we rely on the visual feedback of color change for interaction) 
                    To actually pause, we'd need state, but for simple marquee, continuous flow is often smoother.
                    Let's stick to the color change "Wow" factor requested.
                */}
            </div>

            {/* Socials & Copyright */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 flex flex-col items-center gap-8">

                {/* Social Icons */}
                <div className="flex gap-8">
                    {[
                        { Icon: Instagram, href: "#" },
                        { Icon: Linkedin, href: "#" },
                        { Icon: Twitter, href: "#" }, // Placeholder for TikTok
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="text-[#bef264] hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(190,242,100,0.8)] transition-all duration-300"
                        >
                            <item.Icon size={32} />
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm font-medium">
                    © 2025 Bagaspedy. All Rights Reserved.
                </p>
            </div>


        </footer>
    );
}
