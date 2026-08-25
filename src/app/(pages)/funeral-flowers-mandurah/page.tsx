import type { Metadata } from "next"
import FuneralFlowersMandurah from "@/components/FuneralFlowersMandurah"
import React from "react"

export const metadata: Metadata = {
    title: "Funeral Flowers Mandurah",
    description:
        "Compassionate funeral flowers, sympathy wreaths, and casket sprays in Mandurah, WA. Salty Leaf creates thoughtful floral tributes designed with dignity and care.",
    alternates: {
        canonical: "/funeral-flowers-mandurah",
    },
    openGraph: {
        title: "Funeral Flowers Mandurah | Salty Leaf",
        description:
            "Compassionate funeral flowers, casket sprays and sympathy floral tributes in Mandurah, WA.",
        url: "/funeral-flowers-mandurah",
        images: [
            {
                url: "/og-farewells.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf funeral flowers Mandurah",
            },
        ],
    },
}

export default function FuneralFlowersMandurahPage() {
    return (
        <div>
            <FuneralFlowersMandurah />
        </div>
    )
}
