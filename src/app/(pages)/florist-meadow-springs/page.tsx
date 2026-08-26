import type { Metadata } from "next"
import FloristMeadowSprings from "@/components/FloristMeadowSprings"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Meadow Springs | Salty Leaf",
    description:
        "Bespoke florist serving Meadow Springs, Mandurah WA. Salty Leaf designs custom wedding flowers, funeral tributes, and event arrangements with local delivery.",
    alternates: {
        canonical: "/florist-meadow-springs",
    },
    openGraph: {
        title: "Florist Meadow Springs | Salty Leaf",
        description:
            "Bespoke florist serving Meadow Springs, Mandurah WA. Wedding flowers, funeral tributes, and event arrangements.",
        url: "/florist-meadow-springs",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Meadow Springs",
            },
        ],
    },
}

export default function FloristMeadowSpringsPage() {
    return (
        <div>
            <FloristMeadowSprings />
        </div>
    )
}
