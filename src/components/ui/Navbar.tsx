"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                ease: [0.17, 0.67, 0.83, 0.67] as const,
            },
        }),
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-black/20 border-b border-white/5"
            >
                {/* Branding */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-white font-serif z-50 relative">
                    Bagaspedy
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 font-sans">
                    <Link href="#work" className="hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="#services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="hover:text-white transition-colors">
                        About
                    </Link>
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://wa.me/6283817523403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-6 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group font-sans"
                    >
                        LET&apos;S TALK
                        <span className="group-hover:translate-x-1 transition-transform">
                            →
                        </span>
                    </Link>

                    {/* Mobile Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white z-50 relative focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl font-serif text-white">
                            {["Work", "Services", "About"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        onClick={toggleMenu}
                                        className="hover:text-[#CCFF00] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                custom={3}
                                variants={linkVariants}
                                className="mt-8"
                            >
                                <Link
                                    href="https://wa.me/6283817523403"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={toggleMenu}
                                    className="px-8 py-3 text-lg font-medium text-black bg-[#CCFF00] rounded-full hover:bg-[#b3e600] transition-colors font-sans"
                                >
                                    LET&apos;S TALK
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
