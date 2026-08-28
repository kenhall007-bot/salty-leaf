import type { Metadata } from "next"
import WeddingFloristCowaramup from "@/components/WeddingFloristCowaramup"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Cowaramup",
    description:
        "Bespoke wedding flowers and bridal bouquets in Cowaramup, WA. From country vineyard ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-cowaramup",
    },
    openGraph: {
        title: "Wedding Florist Cowaramup | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Cowaramup, WA. Country vineyard ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-cowaramup",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Cowaramup",
            },
        ],
    },
}

export default function WeddingFloristCowaramupPage() {
    return (
        <div>
            <WeddingFloristCowaramup />
        </div>
    )
}
