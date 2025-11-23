"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const works = [
    {
        id: 1,
        title: "Ojolali Frozen Food",
        category: "PROMOTION DESIGN",
        src: "/images/works/ojolali-frozen.jpg",
        aspect: "aspect-[3/4]",
    },
    {
        id: 2,
        title: "Toko Grosir Ojolali",
        category: "PROMOTION DESIGN",
        src: "/images/works/toko-grosir-ojolali.jpg",
        aspect: "aspect-[3/4]",
    },
    {
        id: 3,
        title: "ShirtMan",
        category: "PRODUCT DESIGN",
        src: "/images/works/fashionkemeja.jpg",
        aspect: "aspect-[3/4]",
    },
    {
        id: 4,
        title: "Pinocchio Screen",
        category: "SOCIAL CAMPAIGN",
        src: "/images/works/social-campaign.jpg",
        aspect: "aspect-[3/4]",
    },
    {
        id: 5,
        title: "Digital Dreams",
        category: "CONTENT CREATION",
        src: "/images/works/workfrom.jpg",
        aspect: "aspect-[3/4]",
    },
    {
        id: 6,
        title: "AEON Project",
        category: "3D VISUALS",
        src: "/images/works/3d-robot.jpg",
        aspect: "aspect-[3/4]",
    },
];

export default function SelectedWorks() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="w-full min-h-screen bg-[#0A0A0A] py-20 overflow-hidden relative">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="font-serif text-4xl md:text-6xl text-[#F0F0F0] tracking-tight">
                    SELECTED WORKS
                </h2>
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-full cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
            >
                {/* Custom Drag Cursor */}
                <motion.div
                    className="absolute z-50 pointer-events-none flex items-center justify-center bg-[#CCFF00] text-black font-bold text-sm rounded-full px-4 py-2 whitespace-nowrap"
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                        opacity: isHovering ? 1 : 0,
                        scale: isHovering ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                        mass: 0.1,
                    }}
                    style={{
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                >
                    → DRAG TO EXPLORE
                </motion.div>

                {/* Draggable Area */}
                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-hidden px-6 md:px-12"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8"
                    >
                        {works.map((work) => (
                            <motion.div
                                key={work.id}
                                className={`relative min-w-[300px] md:min-w-[400px] ${work.aspect} rounded-2xl overflow-hidden bg-gray-900 group`}
                            >
                                <Image
                                    src={work.src}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    draggable={false}
                                />

                                {/* Pill Tag */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                                        {work.category}
                                    </span>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Title on Hover */}
                                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white">{work.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
