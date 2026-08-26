import type { Metadata } from "next"
import FloristSecretHarbour from "@/components/FloristSecretHarbour"
import React from "react"

export const metadata: Metadata = {
    title: "Florist Secret Harbour | Salty Leaf",
    description:
        "Bespoke floral design in Secret Harbour, Mandurah WA. Salty Leaf provides handcrafted wedding flowers, funeral wreaths, and event florals with prompt delivery.",
    alternates: {
        canonical: "/florist-secret-harbour",
    },
    openGraph: {
        title: "Florist Secret Harbour | Salty Leaf",
        description:
            "Bespoke floral design in Secret Harbour, Mandurah WA. Wedding flowers, funeral wreaths, and event florals.",
        url: "/florist-secret-harbour",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf florist Secret Harbour",
            },
        ],
    },
}

export default function FloristSecretHarbourPage() {
    return (
        <div>
            <FloristSecretHarbour />
        </div>
    )
}
