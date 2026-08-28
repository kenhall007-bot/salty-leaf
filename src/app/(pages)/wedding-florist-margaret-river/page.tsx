import type { Metadata } from "next"
import WeddingFloristMargaretRiver from "@/components/WeddingFloristMargaretRiver"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Margaret River",
    description:
        "Bespoke wedding flowers and bridal bouquets in Margaret River, WA. From vineyard ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-margaret-river",
    },
    openGraph: {
        title: "Wedding Florist Margaret River | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Margaret River, WA. Vineyard ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-margaret-river",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Margaret River",
            },
        ],
    },
}

export default function WeddingFloristMargaretRiverPage() {
    return (
        <div>
            <WeddingFloristMargaretRiver />
        </div>
    )
}
