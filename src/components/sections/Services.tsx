"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: 1,
        title: "THE ESSENTIALS",
        tagline: "Everyday Consistency.",
        details: [
            "30 High-End Static Feeds (Full Month Content)",
            "Daily Caption & Hashtag Strategy",
            "Scheduling & Posting",
            "Monthly Performance Report",
        ],
        price: "$600 / Rp 9.5Jt",
    },
    {
        id: 2,
        title: "THE GROWTH CATALYST",
        tagline: "Aggressive Growth.",
        details: [
            "15 Dynamic Reels/TikTok (High Retention Editing)",
            "15 Carousel/Static Feeds (Educational/Branding)",
            "Total 30 Posts (Daily Mix)",
            "Trending Audio Research",
        ],
        price: "$1,500 / Rp 23Jt",
    },
    {
        id: 3,
        title: "MARKET DOMINANCE",
        tagline: "Viral Authority & Priority.",
        details: [
            "INCLUDES EVERYTHING IN GROWTH (30 Posts Mix)",
            "SEPARATOR", // Special marker for divider
            "+ SPECIAL PACKET (Strategic Add-ons):",
            "Trend-Jacking Service: Pembuatan konten dadakan (24 jam) saat ada tren viral.",
            "Scriptwriting & Directing: Panduan lengkap untuk klien saat syuting mandiri.",
            "Priority Support: Jalur komunikasi khusus (WhatsApp Pribadi) & Unlimited Revisions.",
            "Competitor Deep-Dive Analysis.",
        ],
        price: "$3,000 / Rp 45Jt",
    },
];

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(2); // Default active: The Growth Catalyst

    const toggleService = (id: number) => {
        if (activeService === id) {
            setActiveService(null);
        } else {
            setActiveService(id);
        }
    };

    return (
        <section id="services" className="w-full bg-[#0A0A0A] py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-6xl text-[#F0F0F0] tracking-tight">
                        CONTENT PACKAGES
                    </h2>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-6">
                    {services.map((service) => {
                        const isActive = activeService === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => toggleService(service.id)}
                                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                                        ? "border-[#CCFF00] bg-black/40 shadow-[0_0_30px_rgba(204,255,0,0.15)]"
                                        : "border-white/10 bg-white/5 hover:bg-white/10"
                                    }`}
                                initial={false}
                            >
                                {/* Card Header */}
                                <div className="flex items-center justify-between p-6 md:p-8">
                                    <div className="flex flex-col gap-1">
                                        <h3
                                            className={`text-xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? "text-[#CCFF00]" : "text-white/60"
                                                }`}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                                            {service.tagline}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${isActive
                                                ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                                                : "border-white/20 text-white/60"
                                            }`}
                                    >
                                        <motion.span
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-2xl font-light leading-none"
                                        >
                                            {isActive ? "−" : "+"}
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0">
                                                <div className="w-full h-px bg-white/10 mb-6" />

                                                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                                                    {/* Details List */}
                                                    <ul className="space-y-3 w-full md:w-2/3">
                                                        {service.details.map((detail, index) => {
                                                            if (detail === "SEPARATOR") {
                                                                return (
                                                                    <motion.li
                                                                        key={index}
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.1 + index * 0.1 }}
                                                                        className="py-2"
                                                                    >
                                                                        <div className="w-full h-px bg-white/10 border-t border-dashed border-white/20" />
                                                                    </motion.li>
                                                                );
                                                            }

                                                            const isSpecialHeader = detail.startsWith("+ SPECIAL PACKET");

                                                            return (
                                                                <motion.li
                                                                    key={index}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                                    className={`flex items-start gap-3 text-gray-300 ${isSpecialHeader ? "mt-4 font-bold text-[#CCFF00]" : ""}`}
                                                                >
                                                                    {!isSpecialHeader && (
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mt-2 shrink-0" />
                                                                    )}
                                                                    <span className="leading-relaxed">{detail}</span>
                                                                </motion.li>
                                                            );
                                                        })}
                                                    </ul>

                                                    {/* Price */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-right md:w-1/3 shrink-0"
                                                    >
                                                        <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
                                                            Investment
                                                        </p>
                                                        <p className="text-xl md:text-2xl font-bold text-[#CCFF00] font-mono whitespace-nowrap">
                                                            {service.price}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
