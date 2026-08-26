import type { Metadata } from "next"
import FloristMadoraBay from "@/components/FloristMadoraBay"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Madora Bay | Salty Leaf",
    description:
        "Bespoke floral arrangements in Madora Bay, Mandurah WA. Salty Leaf provides handcrafted wedding flowers, funeral tributes, and event florals with reliable delivery.",
    alternates: {
        canonical: "/florist-madora-bay",
    },
    openGraph: {
        title: "Florist Madora Bay | Salty Leaf",
        description:
            "Bespoke floral arrangements in Madora Bay, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-madora-bay",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Madora Bay",
            },
        ],
    },
}

export default function FloristMadoraBayPage() {
    return (
        <div>
            <FloristMadoraBay />
        </div>
    )
}
