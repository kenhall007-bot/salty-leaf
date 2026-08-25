import type { Metadata } from "next"
import WeddingFloristMandurah from "@/components/WeddingFloristMandurah"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Mandurah",
    description:
        "Bespoke wedding flowers and bridal bouquets in Mandurah, WA. From ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-mandurah",
    },
    openGraph: {
        title: "Wedding Florist Mandurah | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Mandurah, WA. Ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-mandurah",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Mandurah",
            },
        ],
    },
}

export default function WeddingFloristMandurahPage() {
    return (
        <div>
            <WeddingFloristMandurah />
        </div>
    )
}
