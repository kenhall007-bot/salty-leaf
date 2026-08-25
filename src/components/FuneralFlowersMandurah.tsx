"use client"

import Navbar from "@/components/Navbar"
import Link from "next/link"
import React from "react"
import { motion } from "motion/react"
import CategoryGalleryModal from "@/components/CategoryGalleryModal"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const offers = [
    {
        title: "Funeral Wreaths",
        text: "Classic circular and bespoke floral wreaths handcrafted with fresh seasonal blooms.",
    },
    {
        title: "Casket Flowers",
        text: "Elegantly styled casket sprays and sheaths designed to honour your loved one with grace.",
    },
    {
        title: "Sympathy Arrangements",
        text: "Thoughtful sympathy vase arrangements and floral tributes sent with heart and compassion.",
    },
    {
        title: "Same-Day Delivery",
        text: "Reliable delivery directly to funeral homes, churches, or family residences across Mandurah.",
    },
]

export default function FuneralFlowersMandurah() {
    return (
        <main>
            <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
                <Navbar />

                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1600&auto=format&fit=crop"
                    alt="Funeral flowers Mandurah - sympathy floral tributes"
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
                            Funeral Flowers Mandurah
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-4 max-w-lg font-[family-name:var(--font-cormorant)] text-xl font-light text-white/90 sm:text-2xl"
                        >
                            Compassionate, thoughtful funeral and sympathy floral tributes crafted with care in Mandurah.
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
                            Honouring Lives With Grace
                        </h2>

                        <div className="mt-9 h-[2px] w-40 bg-[#25251f]" />

                        <p className="mt-7 max-w-md font-[family-name:var(--font-cormorant)] text-lg font-medium leading-[1.35] text-[#35352e] sm:text-2xl">
                            We create bespoke funeral flowers, casket sprays, and sympathy wreaths that celebrate a life beautifully lived.
                        </p>

                        <p className="mt-7 max-w-md font-[family-name:var(--font-cormorant)] text-lg font-medium leading-[1.35] text-[#35352e] sm:text-2xl">
                            Every arrangement is prepared with deep respect, compassion, and the freshest local blooms.
                        </p>

                        <CategoryGalleryModal
                            title="Funeral Flowers Gallery"
                            buttonLabel="View Gallery"
                            categories={["farewell", "general"]}
                            buttonClassName="mt-9 inline-flex items-center gap-3 border border-[#25251f] px-8 py-4 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.15em] text-[#25251f] transition-colors duration-300 hover:bg-[#25251f] hover:text-[#f8f5ef]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop"
                            alt="Funeral flowers Mandurah - casket spray arrangement"
                            className="h-[500px] w-full object-cover sm:h-[600px] lg:h-[680px]"
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
                            What We Offer
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
                        {offers.map((offer, index) => (
                            <motion.div
                                key={offer.title}
                                variants={fadeUp}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`px-6 py-8 text-center ${index !== 0 ? "border-t border-[#d8d6cf] lg:border-l lg:border-t-0" : ""}`}
                            >
                                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase text-[#33332e]">
                                    {offer.title}
                                </h3>

                                <p className="mx-auto mt-5 max-w-xs font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-[1.35] text-[#55554e]">
                                    {offer.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#f4f1ec] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                <div className="mx-auto max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mb-14 text-center"
                    >
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.1em] text-[#44443d]">
                            Our Process
                        </p>

                        <div className="mx-auto mt-3 h-[2px] w-12 bg-[#44443d]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                        className="grid grid-cols-1 gap-12 sm:grid-cols-3"
                    >
                        {[
                            {
                                number: "01",
                                title: "Enquire",
                                text: "Get in touch via our contact form or phone to discuss your funeral flower requirements.",
                            },
                            {
                                number: "02",
                                title: "Consultation",
                                text: "We discuss flower choices, colour themes, and delivery details with empathy and care.",
                            },
                            {
                                number: "03",
                                title: "Design & Delivery",
                                text: "We craft your tribute flowers and ensure punctual delivery to Mandurah venues.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.number}
                                variants={fadeUp}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="text-center"
                            >
                                <span className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#44443d]">
                                    {item.number}
                                </span>

                                <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-xl font-bold uppercase tracking-[0.05em] text-[#44443d]">
                                    {item.title}
                                </h3>

                                <p className="mx-auto mt-4 max-w-[220px] font-[family-name:var(--font-cormorant)] text-xl font-medium leading-[1.3] text-[#55554e]">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section
                id="enquire"
                className="relative h-[650px] min-h-[600px] w-full overflow-hidden sm:h-[750px]"
            >
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1600&auto=format&fit=crop"
                    alt="Funeral flowers Mandurah - sympathy tribute arrangement"
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
                        We are here to help
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white sm:text-4xl"
                    >
                        Reach out to us anytime for funeral flower guidance.
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
