import type { Metadata } from "next"
import FloristWannanup from "@/components/FloristWannanup"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Wannanup | Salty Leaf",
    description:
        "Bespoke florist serving Wannanup, Mandurah WA. Salty Leaf creates thoughtful wedding flowers, funeral tributes, and event florals with prompt local delivery.",
    alternates: {
        canonical: "/florist-wannanup",
    },
    openGraph: {
        title: "Florist Wannanup | Salty Leaf",
        description:
            "Bespoke florist serving Wannanup, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-wannanup",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Wannanup",
            },
        ],
    },
}

export default function FloristWannanupPage() {
    return (
        <div>
            <FloristWannanup />
        </div>
    )
}
