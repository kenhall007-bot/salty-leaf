import type { Metadata } from "next"
import WeddingFloristWitchcliffe from "@/components/WeddingFloristWitchcliffe"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Witchcliffe",
    description:
        "Bespoke wedding flowers and bridal bouquets in Witchcliffe, WA. From forest ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-witchcliffe",
    },
    openGraph: {
        title: "Wedding Florist Witchcliffe | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Witchcliffe, WA. Forest ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-witchcliffe",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Witchcliffe",
            },
        ],
    },
}

export default function WeddingFloristWitchcliffePage() {
    return (
        <div>
            <WeddingFloristWitchcliffe />
        </div>
    )
}
