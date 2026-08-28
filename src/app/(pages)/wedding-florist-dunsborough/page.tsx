import type { Metadata } from "next"
import WeddingFloristDunsborough from "@/components/WeddingFloristDunsborough"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Dunsborough",
    description:
        "Bespoke wedding flowers and bridal bouquets in Dunsborough, WA. From beachfront ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-dunsborough",
    },
    openGraph: {
        title: "Wedding Florist Dunsborough | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Dunsborough, WA. Beachfront ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-dunsborough",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Dunsborough",
            },
        ],
    },
}

export default function WeddingFloristDunsboroughPage() {
    return (
        <div>
            <WeddingFloristDunsborough />
        </div>
    )
}
