"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "motion/react"

export default function Hero() {
    return (
        <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-hidden"
        >
            <Image
                src="/homebg.png"
                alt="Wedding ceremony"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
        </motion.div>
    )
}
