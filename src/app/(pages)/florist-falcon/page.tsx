import type { Metadata } from "next"
import FloristFalcon from "@/components/FloristFalcon"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Falcon | Salty Leaf",
    description:
        "Bespoke floral design in Falcon, Mandurah WA. Salty Leaf provides handcrafted wedding flowers, funeral wreaths, and event florals with prompt delivery.",
    alternates: {
        canonical: "/florist-falcon",
    },
    openGraph: {
        title: "Florist Falcon | Salty Leaf",
        description:
            "Bespoke floral design in Falcon, Mandurah WA. Wedding flowers, funeral wreaths, and event florals.",
        url: "/florist-falcon",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Falcon",
            },
        ],
    },
}

export default function FloristFalconPage() {
    return (
        <div>
            <FloristFalcon />
        </div>
    )
}
