import type { Metadata } from "next"
import FloristRockingham from "@/components/FloristRockingham"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Rockingham | Salty Leaf",
    description:
        "Artisanal florist serving Rockingham, Mandurah WA. Salty Leaf designs custom wedding flowers, funeral tributes, and event florals with prompt delivery.",
    alternates: {
        canonical: "/florist-rockingham",
    },
    openGraph: {
        title: "Florist Rockingham | Salty Leaf",
        description:
            "Artisanal florist serving Rockingham, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-rockingham",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Rockingham",
            },
        ],
    },
}

export default function FloristRockinghamPage() {
    return (
        <div>
            <FloristRockingham />
        </div>
    )
}
