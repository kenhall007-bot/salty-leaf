import React from "react"
import Link from "next/link"
import Image from "next/image"

const services = [
    { name: "Wedding Florist Mandurah", href: "/wedding-florist-mandurah" },
    { name: "Funeral Flowers Mandurah", href: "/funeral-flowers-mandurah" },
    { name: "Event Florist Mandurah", href: "/event-florist-mandurah" },
    { name: "Weddings", href: "/weddings" },
    { name: "Farewells", href: "/farewells" },
    { name: "Events", href: "/events" },
]

const suburbs = [
    { name: "Florist Halls Head", href: "/florist-halls-head" },
    { name: "Florist Dawesville", href: "/florist-dawesville" },
    { name: "Florist Falcon", href: "/florist-falcon" },
    { name: "Florist Madora Bay", href: "/florist-madora-bay" },
    { name: "Florist Lakelands", href: "/florist-lakelands" },
    { name: "Florist Meadow Springs", href: "/florist-meadow-springs" },
    { name: "Florist Rockingham", href: "/florist-rockingham" },
    { name: "Florist Wannanup", href: "/florist-wannanup" },
    { name: "Florist South Yunderup", href: "/florist-south-yunderup" },
    { name: "Florist Secret Harbour", href: "/florist-secret-harbour" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-[#1b1d19] px-6 py-16 text-[#f5f0e7] sm:px-10 lg:px-14 lg:py-20">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
                    <div className="flex flex-col items-start">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Salty Leaf Florist"
                                width={200}
                                height={80}
                                className="h-16 w-auto brightness-0 invert"
                            />
                        </Link>

                        <p className="mt-4 font-[family-name:var(--font-cormorant)] text-lg text-[#d8d6cf]">
                            Bespoke floral experiences for weddings, funeral tributes, and events across Mandurah and surrounding Peel suburbs.
                        </p>

                        <p className="mt-4 font-[family-name:var(--font-inter)] text-xs tracking-wider text-[#8a8678]">
                            5/10 Rafferty Road, Mandurah WA 6210
                        </p>
                    </div>

                    <div>
                        <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold uppercase tracking-[0.1em] text-white">
                            Services
                        </h4>

                        <div className="mt-2 h-[2px] w-10 bg-[#8a8678]" />

                        <ul className="mt-5 space-y-3 font-[family-name:var(--font-inter)] text-sm text-[#d8d6cf]">
                            {services.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="transition-colors duration-300 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold uppercase tracking-[0.1em] text-white">
                            Areas We Serve
                        </h4>

                        <div className="mt-2 h-[2px] w-10 bg-[#8a8678]" />

                        <ul className="mt-5 grid grid-cols-1 gap-3 font-[family-name:var(--font-inter)] text-sm text-[#d8d6cf] sm:grid-cols-2">
                            {suburbs.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="transition-colors duration-300 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 text-center font-[family-name:var(--font-inter)] text-xs text-[#8a8678]">
                    <p>&copy; {new Date().getFullYear()} Salty Leaf. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
