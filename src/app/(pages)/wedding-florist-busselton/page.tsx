import type { Metadata } from "next"
import WeddingFloristBusselton from "@/components/WeddingFloristBusselton"
import React from "react"

export const metadata: Metadata = {
    title: "Wedding Florist Busselton",
    description:
        "Bespoke wedding flowers and bridal bouquets in Busselton, WA. From seaside jetty ceremony arches to reception centrepieces, Salty Leaf crafts floral designs tailored to your wedding story.",
    alternates: {
        canonical: "/wedding-florist-busselton",
    },
    openGraph: {
        title: "Wedding Florist Busselton | Salty Leaf",
        description:
            "Bespoke wedding flowers and bridal bouquets in Busselton, WA. Seaside ceremony arches and reception styling designed with care.",
        url: "/wedding-florist-busselton",
        images: [
            {
                url: "/og-weddings.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf wedding florist Busselton",
            },
        ],
    },
}

export default function WeddingFloristBusseltonPage() {
    return (
        <div>
            <WeddingFloristBusselton />
        </div>
    )
}
