import type { Metadata } from "next"
import FloristDawesville from "@/components/FloristDawesville"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Dawesville | Salty Leaf",
    description:
        "Handcrafted floral arrangements in Dawesville, Mandurah WA. Salty Leaf provides bespoke wedding flowers, funeral tributes, and event florals with reliable delivery.",
    alternates: {
        canonical: "/florist-dawesville",
    },
    openGraph: {
        title: "Florist Dawesville | Salty Leaf",
        description:
            "Handcrafted floral arrangements in Dawesville, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-dawesville",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Dawesville",
            },
        ],
    },
}

export default function FloristDawesvillePage() {
    return (
        <div>
            <FloristDawesville />
        </div>
    )
}
