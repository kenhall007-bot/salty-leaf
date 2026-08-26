import type { Metadata } from "next"
import FloristSouthYunderup from "@/components/FloristSouthYunderup"
import React from "react"

export const metadata: Metadata = {
    title: "Florist South Yunderup | Salty Leaf",
    description:
        "Handcrafted floral arrangements in South Yunderup, Mandurah WA. Salty Leaf provides bespoke wedding flowers, funeral tributes, and event florals with reliable delivery.",
    alternates: {
        canonical: "/florist-south-yunderup",
    },
    openGraph: {
        title: "Florist South Yunderup | Salty Leaf",
        description:
            "Handcrafted floral arrangements in South Yunderup, Mandurah WA. Wedding flowers, funeral tributes, and event florals.",
        url: "/florist-south-yunderup",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist South Yunderup",
            },
        ],
    },
}

export default function FloristSouthYunderupPage() {
    return (
        <div>
            <FloristSouthYunderup />
        </div>
    )
}
