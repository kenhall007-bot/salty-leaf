import type { Metadata } from "next"
import EventFloristMandurah from "@/components/EventFloristMandurah"
import React from "react"

export const metadata: Metadata = {
    title: "Event Florist Mandurah",
    description:
        "Bespoke event flowers, corporate floral arrangements, and venue styling in Mandurah, WA. Salty Leaf brings atmosphere and elegance to every occasion.",
    alternates: {
        canonical: "/event-florist-mandurah",
    },
    openGraph: {
        title: "Event Florist Mandurah | Salty Leaf",
        description:
            "Bespoke event flowers, corporate floral arrangements, and venue styling in Mandurah, WA.",
        url: "/event-florist-mandurah",
        images: [
            {
                url: "/og-events.jpg",
                width: 1200,
                height: 630,
                alt: "Salty Leaf event florist Mandurah",
            },
        ],
    },
}

export default function EventFloristMandurahPage() {
    return (
        <div>
            <EventFloristMandurah />
        </div>
    )
}
