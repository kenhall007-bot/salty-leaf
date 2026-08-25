"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"

const MotionLink = motion.create(Link)

const categories = [
    {
        title: "WEDDINGS",
        image: "/home2.jpg",
        href: "/weddings",
        alt: "Wedding florist Mandurah - wedding floral arrangements",
    },
    {
        title: "FAREWELLS",
        image: "/farewell home page image.png",
        href: "/farewells",
        alt: "Funeral florist Mandurah - farewell floral tributes",
    },
    {
        title: "EVENTS",
        image: "/home1.jpg",
        href: "/events",
        alt: "Event florist Mandurah - event floral styling",
    },
]

export default function CategorySection() {
    return (
        <section
            className="w-full"
            style={{
                contentVisibility: "auto",
                containIntrinsicSize: "1px 2200px",
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="grid w-full grid-cols-1 md:grid-cols-3"
            >
                {categories.map((category) => (
                    <MotionLink
                        key={category.title}
                        href={category.href}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="group relative block h-[600px] overflow-hidden sm:h-[700px] lg:h-[760px]"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute inset-0 overflow-hidden"
                        >
                            <Image
                                src={category.image}
                                alt={category.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/20" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light uppercase tracking-[-0.03em] text-white sm:text-6xl lg:text-[68px]">
                                {category.title}
                            </h2>
                        </div>
                    </MotionLink>
                ))}
            </motion.div>
        </section>
    )
}
