"use client"

import Navbar from "@/components/Navbar"
import Link from "next/link"
import React from "react"
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const services = [
    {
        title: "Wedding Flowers",
        text: "Bouquets, buttonholes, ceremony installations and reception florals designed with intention and care for your special day in Falcon.",
    },
    {
        title: "Funeral Flowers",
        text: "Respectful casket sheaths, funeral wreaths, and sympathy flowers crafted with care.",
    },
    {
        title: "Event Flowers",
        text: "Custom event styling, table centerpieces, and party florals for functions and celebrations.",
    },
    {
        title: "Styling & Hire",
        text: "Floral signage, plinths, vessels, vases and curated styling to complete your celebration.",
    },
]

export default function FloristFalcon() {
    return (
        <main>
            <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
                <Navbar />

                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    src="/Venue Flowers _ Floral Styling.jpeg"
                    alt="Florist Falcon - Salty Leaf floral arrangements"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 md:bg-black/20 bg-black/40" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
                    }}
                    className="absolute left-10 top-1/2 z-10 -translate-y-1/2 sm:left-16 lg:left-24"
                >
                    <div className="flex flex-col items-start">
                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-[family-name:var(--font-cormorant)] text-5xl font-light uppercase leading-none tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
                        >
                            Florist Falcon
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-4 max-w-lg font-[family-name:var(--font-cormorant)] text-xl font-light text-white/90 sm:text-2xl"
                        >
                            Seasonal handcrafted floral arrangements for weddings, farewells, and events in Falcon.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-5 h-[2px] w-40 rounded-full bg-white"
                        />

                        <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
                            <Link
                                href="/contact"
                                className="mt-4 inline-block font-[family-name:var(--font-cormorant)] text-2xl uppercase tracking-wide text-white transition-opacity duration-300 hover:opacity-60"
                            >
                                Enquire
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section className="bg-[#f8f5ef] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium uppercase leading-[0.95] tracking-[-0.025em] text-[#1f211d] sm:text-6xl lg:text-6xl">
                            Florist Services in Falcon
                        </h2>

                        <div className="mt-9 h-[2px] w-40 bg-[#25251f]" />

                        <p className="mt-7 max-w-md font-[family-name:var(--font-cormorant)] text-lg font-medium leading-[1.35] text-[#35352e] sm:text-2xl">
                            Salty Leaf is your local Falcon florist creating beautiful floral experiences for every occasion.
                        </p>

                        <p className="mt-7 max-w-md font-[family-name:var(--font-cormorant)] text-lg font-medium leading-[1.35] text-[#35352e] sm:text-2xl">
                            Whether you are planning a wedding, hosting an event, or sending sympathy flowers, we craft elegant floral arrangements with fresh seasonal blooms.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full"
                    >
                        <img
                            src="/Wedding reception flowers.JPG"
                            alt="Florist Falcon - coastal floral styling"
                            className="h-[450px] w-full object-cover sm:h-[550px] lg:h-[600px]"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#faf9f6] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                <div className="mx-auto max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mb-14 text-center"
                    >
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.1em] text-[#44443d]">
                            Services Available in Falcon
                        </p>

                        <div className="mx-auto mt-3 h-[2px] w-12 bg-[#44443d]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {services.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`px-6 py-8 text-center ${index !== 0 ? "border-t border-[#d8d6cf] lg:border-l lg:border-t-0" : ""}`}
                            >
                                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase text-[#33332e]">
                                    {item.title}
                                </h3>

                                <p className="mx-auto mt-5 max-w-xs font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-[1.35] text-[#55554e]">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="relative h-[550px] min-h-[500px] w-full overflow-hidden sm:h-[650px]">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    src="/Event Centrepieces.jpeg"
                    alt="Florist Falcon - floral delivery"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white sm:text-6xl lg:text-7xl"
                    >
                        Servicing Falcon &amp; Surrounding Areas
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white sm:text-4xl"
                    >
                        Reach out today to discuss your floral needs.
                    </motion.p>

                    <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <Link
                            href="/contact"
                            className="mt-10 inline-block font-[family-name:var(--font-cormorant)] text-5xl font-light uppercase tracking-[-0.02em] text-white transition-opacity duration-300 hover:opacity-60 sm:text-6xl lg:text-7xl"
                        >
                            Enquire
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}
