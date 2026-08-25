import type { Metadata } from "next"
import React from "react"
import Navbar from "@/components/Navbar"
import CategorySection from "@/components/home/CategorySection"
import ContactSection from "@/components/home/ContactSection"
import Hero from "@/components/home/Hero"

export const metadata: Metadata = {
    title: "Salty Leaf Florist | Wedding & Funeral Florist Mandurah",
    description:
        "Salty Leaf is a Mandurah florist crafting bespoke floral arrangements for weddings, funeral flowers, and events across Mandurah, Halls Head, Dawesville, and surrounding suburbs.",
    alternates: {
        canonical: "/",
    },
}

export default function HomePg() {
    return (
        <main>
            <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
                <Navbar />

                <Hero />
                <div className="absolute inset-0 md:bg-black/10 bg-black/35" />
            </section>


            <CategorySection />

            <ContactSection />
        </main>
    )
}