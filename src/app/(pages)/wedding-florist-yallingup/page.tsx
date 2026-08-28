import type { Metadata } from "next"
import WeddingFloristYallingup from "@/components/WeddingFloristYallingup"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Yallingup",
    description:
        "Bespoke wedding flowers and bridal bouquets in Yallingup, WA. From coastal cliffside ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-yallingup",
    },
    openGraph: {
        title: "Wedding Florist Yallingup | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Yallingup, WA. Coastal ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-yallingup",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Yallingup",
            },
        ],
    },
}

export default function WeddingFloristYallingupPage() {
    return (
        <div>
            <WeddingFloristYallingup />
        </div>
    )
}
