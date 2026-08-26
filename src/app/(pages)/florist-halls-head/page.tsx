import type { Metadata } from "next"
import FloristHallsHead from "@/components/FloristHallsHead"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Halls Head | Salty Leaf",
    description:
        "Bespoke florist serving Halls Head, Mandurah WA. Salty Leaf creates thoughtful wedding flowers, funeral tributes, and event florals with prompt local delivery.",
    alternates: {
        canonical: "/florist-halls-head",
    },
    openGraph: {
        title: "Florist Halls Head | Salty Leaf",
        description:
            "Bespoke florist serving Halls Head, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-halls-head",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Halls Head",
            },
        ],
    },
}

export default function FloristHallsHeadPage() {
    return (
        <div>
            <FloristHallsHead />
        </div>
    )
}
