import type { Metadata } from "next"
import FloristLakelands from "@/components/FloristLakelands"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Lakelands | Salty Leaf",
    description:
        "Artisanal florist serving Lakelands, Mandurah WA. Salty Leaf creates bespoke wedding flowers, funeral tributes, and event florals with prompt delivery.",
    alternates: {
        canonical: "/florist-lakelands",
    },
    openGraph: {
        title: "Florist Lakelands | Salty Leaf",
        description:
            "Artisanal florist serving Lakelands, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-lakelands",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Lakelands",
            },
        ],
    },
}

export default function FloristLakelandsPage() {
    return (
        <div>
            <FloristLakelands />
        </div>
    )
}
