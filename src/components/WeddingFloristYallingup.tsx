"use client"

import Navbar from "@/components/Navbar"
import Link from "next/link"
import React from "react"
import { motion } from "motion/react"
import CategoryGalleryModal from "@/components/CategoryGalleryModal"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const offers = [
    {
        title: "Bridal Bouquets",
        text: "Bespoke bridal bouquets, bridesmaid flowers, and buttonholes designed to reflect your style.",
    },
    {
        title: "Ceremony Florals",
        text: "Stunning floral arches, aisle arrangements, and ceremony backdrops that frame your vows.",
    },
    {
        title: "Reception Centrepieces",
        text: "Elevated table arrangements, floral runners, and reception styling for unforgettable dining.",
    },
    {
        title: "Styling & Hire",
        text: "Vessels, plinths, candles, and curated styling props to complete your wedding look.",
    },
]

const process = [
    {
        number: "01",
        title: "Enquire",
        text: "Tell us about your wedding date, venue, and aesthetic vision.",
    },
    {
        number: "02",
        title: "Consultation",
        text: "We connect to share moodboards, flower concepts, and color palettes.",
    },
    {
        number: "03",
        title: "Design & Planning",
        text: "Detailed floral proposals and itemized quotes tailored for your wedding.",
    },
    {
        number: "04",
        title: "Wedding Day",
        text: "Seamless delivery, setup, and installation on site at your venue.",
    },
]

export default function WeddingFloristYallingup() {
    return (
        <main>
            <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
                <Navbar />

                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    src="/outdoorflowers.jpeg"
                    alt="Wedding Florist Yallingup - bridal bouquets and coastal ceremony flowers"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 md:bg-black/20 bg-black/40" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
                    }}
                    className="absolute left-10 top-1/2 z-10 -translate-y-1/2 sm:left-16 lg:left-24"
                >
                    <div className="flex flex-col items-start">
                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-[family-name:var(--font-cormorant)] text-5xl font-light uppercase leading-none tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
                        >
                            Wedding Florist Yallingup
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-4 max-w-lg font-[family-name:var(--font-cormorant)] text-xl font-light text-white/90 sm:text-2xl"
                        >
                            Bespoke wedding florals crafted with intention for ceremonies and receptions across Yallingup.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-5 h-[2px] w-40 rounded-full bg-white"
                        />

                        <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
                            <Link
                                href="/contact"
                                className="mt-4 inline-block font-[family-name:var(--font-cormorant)] text-2xl uppercase tracking-wide text-white transition-opacity duration-300 hover:opacity-60"
                            >
                                Enquire
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section className="bg-[#f8f5ef] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium uppercase leading-[0.95] tracking-[-0.025em] text-[#1f211d] sm:text-6xl lg:text-6xl">
                            Bespoke Wedding Flowers
                        </h2>

                        <p className="mt-10 max-w-lg font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-[1.15] text-[#25251f] sm:text-4xl">
                            Floral designs that elevate your special day with romance and timeless elegance.
                        </p>

                        <div className="mt-9 h-[2px] w-40 bg-[#25251f]" />

                        <p className="mt-7 max-w-md font-[family-name:var(--font-cormorant)] text-lg font-medium leading-[1.35] text-[#35352e] sm:text-2xl">
                            From coastal cliffside ceremonies to luxury estate celebrations across Yallingup and the Southwest region, we source the most premium seasonal blooms for your wedding day.
                        </p>

                        <CategoryGalleryModal
                            title="Wedding Gallery"
                            buttonLabel="View Gallery"
                            categories={["wedding", "general"]}
                            buttonClassName="mt-9 inline-flex items-center gap-3 border border-[#25251f] px-8 py-4 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.15em] text-[#25251f] transition-colors duration-300 hover:bg-[#25251f] hover:text-[#f8f5ef]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full"
                    >
                        <img
                            src="/Bridalpartyflowers.jpeg"
                            alt="Wedding Florist Yallingup - bridal party flowers"
                            className="h-[500px] w-full object-cover sm:h-[600px] lg:h-[680px]"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#faf9f6] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                <div className="mx-auto max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mb-14 text-center"
                    >
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.1em] text-[#44443d]">
                            What We Offer
                        </p>

                        <div className="mx-auto mt-3 h-[2px] w-12 bg-[#44443d]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        className="grid grid-cols-1 md:grid-cols-3"
                    >
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="px-6 py-8 text-center md:border-r md:border-[#d8d6cf]"
                        >
                            <div className="mb-7 flex justify-center">
                                <svg fill="#55554e" className="h-20" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.258 508.258" stroke="#55554e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path d="M272.259,216.377c9.192,1.704,17.862,2.772,25.996,2.772c22.563,0,42.522-6.075,59.01-19.959 c26.034-20.827,44.258-57.275,56.407-111.946c0-1.736,0-4.339-1.736-6.942c-0.868-1.736-2.603-2.603-5.207-3.471 c-20.153-4.429-38.776-2.404-55.588,4.12c-3.023-21.951-13.741-45.418-34.662-77.882c-2.603-4.339-7.81-5.207-12.149-2.603 c-21.959,13.63-45.238,31.226-61.192,56.244c-12.298-11.534-27.352-19.464-44.679-23.268c-4.339-0.868-9.546,2.603-10.414,6.942 c-9.546,42.522-8.678,79.837,1.736,109.342c11.082,31.662,32.998,53.209,65.081,63.338c-7.114,21.161-11.169,44.796-13.034,69.299 c-3.651-3.786-7.655-7.497-11.491-10.266c-0.208-0.427-0.452-0.838-0.74-1.228c-20.475-76.181-91.662-81.07-130.934-71.679 c-1.736,0-4.339,1.736-5.207,3.471s-0.868,4.339-0.868,6.075l0.868,2.603c1.736,11.281,8.678,45.993,39.919,65.953 c13.885,8.678,30.373,13.017,50.332,13.017c11.99,0,24.716-1.491,37.5-4.436c5.856,4.148,14.126,13.585,19.47,20.302 c-0.655,29.797,1.431,60.09,4.773,88.124c-0.081,0.675-0.129,1.31-0.129,1.881c0,1.531,0.307,2.906,0.863,4.093 c0.761,5.997,1.577,11.875,2.43,17.613c-2.718-2.295-5.614-4.598-8.7-7.008c-1.549-22.537-10.029-39.593-23.231-51.146 c-15.62-13.017-36.447-17.356-62.481-14.753h-1.736c-4.339,0.868-7.81,4.339-7.81,9.546c0,0.868,0,1.736,0,2.603 c0,8.678,0,32.976,18.224,50.332c13.017,11.281,32.108,17.356,56.407,17.356c3.089,0,6.179-0.437,9.268-0.69 c13.008,10.7,20.283,16.798,25.98,28.652c3.452,18.11,6.985,33.542,9.878,44.933c1.736,5.207,6.075,9.546,11.281,9.546 c0,0,8.678-0.868,7.81-9.546c-4.901-19.227-14.222-58.769-20.141-104.882c2.274-6.788,9.366-21.852,14.761-29.626 c0.636,0,1.272,0,1.908,0c28.637,0,49.464-6.942,64.217-22.563c19.959-19.092,19.091-45.125,19.091-53.803v-0.868 c0-4.339-5.207-8.678-9.546-8.678c-27.769-0.868-51.2,6.942-66.82,21.695c-13.064,13.064-19.978,29.972-20.75,51.441 c-2.052,2.533-4.217,5.71-6.346,9.235C255.922,310.599,257.343,258.088,272.259,216.377z M142.919,262.539 c-20.827-13.017-27.77-35.58-31.241-48.597c20.692-3.183,71.305-4.898,94.951,42.365c-16.792-10.018-31.861-17.969-51.561-23.273 c-4.339-1.736-9.546,1.736-10.414,6.075c-1.736,4.339,1.736,9.546,6.075,10.414c17.994,4.694,31.767,12.921,48.292,22.761 C176.381,274.735,157.499,272.016,142.919,262.539z M393.712,91.583c-11.281,45.993-26.902,76.366-47.729,93.722 c-18.135,14.681-39.711,19.904-68.997,14.824c10.353-37.319,35.309-80.421,70.732-98.132c0.872-0.581,1.635-1.269,2.279-2.044 C363.355,93.238,378.027,89.944,393.712,91.583z M306.932,19.556c18.224,29.505,26.902,50.332,27.769,69.424 c-23.943,13.681-41.976,35.791-54.953,58.852c-0.867-15.317-3.374-30.015-7.528-43.232c-4.139-13.009-9.894-24.504-17.085-34.319 C267.308,47.978,287.116,32.48,306.932,19.556z M205.4,143.651c-7.81-24.298-8.678-55.539-1.736-91.119 c12.867,4.437,23.687,11.603,32.47,21.484c0.321,0.991,0.798,1.951,1.374,2.814c22.553,29.319,27.515,74.262,22.799,111.71 c-0.334,2.391-0.693,4.784-1.104,7.178C232.302,187.908,214.946,169.685,205.4,143.651z M162.01,362.336 c18.224-0.868,32.976,2.603,43.39,11.281c4.909,3.927,8.706,9.246,11.551,15.794c-4.307-3.285-8.736-6.251-13.286-8.851 c-4.339-1.736-9.546-0.868-12.149,3.471c-1.736,4.339-0.868,9.546,3.471,12.149c5.174,3.184,9.981,6.555,14.593,10.272 c-15.018-1.017-26.977-5.301-34.552-12.876C164.614,384.031,162.01,371.014,162.01,362.336z M345.983,295.515 c-0.868,8.678-2.603,23.431-13.885,33.844c-8.349,8.349-20.056,13.344-35.547,15.446c3.878-3.603,7.565-7.082,11.249-10.24 c3.471-2.603,3.471-8.678,0.868-12.149c-2.603-3.471-8.678-3.471-12.149-0.868c-3.041,2.661-5.915,5.327-8.769,8.061 c2.529-6.732,6.37-12.604,11.372-17.606C309.536,301.59,326.024,296.383,345.983,295.515z"></path> </g> </g> </g></svg>
                            </div>

                            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase text-[#33332e]">
                                All Wedding Florals
                            </h3>

                            <p className="mx-auto mt-5 max-w-xs font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-[1.35] text-[#55554e]">
                                Bouquets, buttonholes, ceremony installations and reception florals designed with intention.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="border-t border-[#d8d6cf] px-6 py-8 text-center md:border-t-0 md:border-r"
                        >
                            <div className="mb-7 flex justify-center">
                                <svg fill="#55554e" height="200px" className="h-20" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M454.077,139.678c15.66,0,28.43-12.713,28.484-28.387c0.027-7.609-2.911-14.772-8.272-20.171 c-5.362-5.4-12.505-8.387-20.113-8.413c-1.154,0-3.566-0.006-18.611,1.988c12.111-9.139,13.824-10.835,14.646-11.651 c5.4-5.362,8.388-12.505,8.413-20.115c0.027-7.609-2.911-14.773-8.272-20.17c-5.361-5.4-12.505-8.388-20.113-8.415 c-0.035,0-0.069,0-0.102,0c-7.57,0-14.694,2.937-20.068,8.272c-0.821,0.816-2.529,2.516-11.753,14.563 c2.1-15.026,2.112-17.437,2.117-18.593C400.486,12.879,387.752,0.055,372.046,0c-0.035,0-0.068,0-0.101,0 c-15.66,0-28.43,12.714-28.484,28.385c-0.004,1.157-0.008,3.567,1.987,18.608c-9.142-12.112-10.836-13.824-11.65-14.643 c-5.361-5.4-12.505-8.388-20.113-8.415c-7.648-0.016-14.773,2.911-20.172,8.272c-5.4,5.361-8.387,12.505-8.413,20.114 c-0.026,7.609,2.911,14.773,8.272,20.172c0.815,0.821,2.516,2.528,14.563,11.753c-15.027-2.101-17.437-2.112-18.594-2.117 c-0.035,0-0.069,0-0.102,0c-7.569,0-14.694,2.937-20.068,8.272c-5.4,5.361-8.388,12.505-8.413,20.114 c-0.055,15.707,12.679,28.53,28.385,28.585c0.055,0,0.113,0,0.176,0c1.239,0,4.104-0.086,18.431-1.986 c-12.111,9.14-13.823,10.835-14.643,11.65c-5.4,5.361-8.387,12.505-8.413,20.114c-0.027,7.609,2.911,14.773,8.272,20.172 c5.362,5.4,12.505,8.386,20.114,8.413c0.034,0,0.068,0,0.101,0c0.029,0,0.057-0.002,0.086-0.002 c-19.001,38.48-34.297,80.759-39.429,97.974c-9.814,32.917-11.595,63.634-14.828,119.396c-1.705,29.397-2.521,59.056-2.427,88.155 c0.017,4.984,4.061,9.013,9.041,9.013c0.01,0,0.021,0,0.03,0c4.993-0.017,9.028-4.078,9.013-9.07 c-0.094-28.731,0.712-58.02,2.395-87.049c3.06-52.779,4.885-80.013,11.702-106.606c6.846,1.347,13.753,2.034,20.653,2.034 c12.63,0,25.232-2.253,37.352-6.74c21.51-7.961,39.579-22.241,52.255-41.293c1.601-2.407,1.955-5.436,0.951-8.147 c-1.004-2.711-3.243-4.78-6.026-5.564c-22.026-6.21-45.036-5.283-66.546,2.68c-8.392,3.105-16.249,7.185-23.478,12.122 c10.283-26.669,25.034-60.711,40.702-87.009c-1.725,12.601-1.735,14.781-1.74,15.865c-0.055,15.707,12.68,28.53,28.386,28.585 c0.034,0,0.069,0,0.102,0c7.571,0,14.693-2.935,20.068-8.272c5.4-5.36,8.388-12.504,8.413-20.112 c0.004-1.159,0.01-3.57-1.985-18.609c9.138,12.108,10.834,13.823,11.65,14.645c5.56,5.598,12.886,8.4,20.214,8.4 c7.261,0,14.524-2.751,20.071-8.26c5.4-5.361,8.388-12.504,8.413-20.114c0.027-7.609-2.911-14.773-8.272-20.17 c-0.816-0.821-2.517-2.53-14.563-11.754c15.027,2.101,17.437,2.112,18.594,2.117C454.009,139.678,454.042,139.678,454.077,139.678 z M333.673,269.203c13.489-4.992,27.684-6.661,41.702-4.97c-9.538,10.41-21.398,18.384-34.888,23.379 c-13.487,4.993-27.684,6.662-41.702,4.969C308.323,282.17,320.184,274.196,333.673,269.203z M289.216,121.018 c-0.005,0-0.01,0-0.014,0c-5.736-0.02-10.387-4.703-10.366-10.439c0.01-2.78,1.101-5.389,3.073-7.346 c1.963-1.949,4.564-3.021,7.328-3.021c0.012,0,0.025,0,0.037,0c1.482,0.007,9.063,0.682,46.942,6.516l-0.028,8.104 C298.387,120.381,290.732,121.018,289.216,121.018z M320.503,176.36c-1.971,1.957-4.556,2.988-7.366,3.021 c-2.779-0.01-5.387-1.101-7.345-3.072c-1.958-1.972-3.031-4.589-3.021-7.367c0.01-2.78,1.101-5.387,3.074-7.346 c1.054-1.044,6.891-5.926,37.799-28.584l5.709,5.75C347.936,140.666,321.388,175.48,320.503,176.36z M343.799,88.599 c-30.749-22.876-36.553-27.798-37.598-28.848c-1.958-1.97-3.032-4.587-3.022-7.366c0.01-2.78,1.101-5.387,3.073-7.346 c1.963-1.948,4.564-3.021,7.33-3.021c0.012,0,0.025,0,0.037,0c2.779,0.01,5.387,1.101,7.346,3.074 c1.044,1.054,5.926,6.891,28.583,37.798L343.799,88.599z M371.982,18.083c5.736,0.021,10.387,4.703,10.366,10.439 c-0.006,1.483-0.682,9.066-6.516,46.941l-8.104-0.028c-5.567-37.919-6.19-45.504-6.187-46.987 C361.562,22.713,366.221,18.055,371.982,18.083z M378.698,200.703c-1.971,1.958-4.562,2.979-7.366,3.021 c-5.737-0.021-10.387-4.703-10.368-10.437c0.006-1.483,0.682-9.066,6.517-46.942l8.102,0.029c5.568,37.914,6.19,45.5,6.187,46.985 C381.761,196.137,380.669,198.745,378.698,200.703z M383.901,123.229l-0.006,0.006c-3.275,3.251-7.615,5.04-12.228,5.043 l-0.083-0.001c-4.635-0.019-8.987-1.841-12.254-5.132c-3.269-3.291-5.062-7.66-5.045-12.3c0.017-4.641,1.838-8.997,5.131-12.266 c3.278-3.255,7.622-5.046,12.24-5.046c0.022,0,0.042,0,0.063,0c4.638,0.017,8.991,1.837,12.259,5.125l0.012,0.012 C390.732,105.465,390.693,116.48,383.901,123.229z M422.809,45.447c1.963-1.948,4.564-3.021,7.33-3.021c0.012,0,0.025,0,0.037,0 c2.779,0.01,5.388,1.101,7.345,3.074c1.958,1.971,3.031,4.587,3.021,7.366s-1.101,5.388-3.073,7.345 c-1.054,1.044-6.893,5.928-37.799,28.584l-2.855-2.874l-2.856-2.875C416.833,52.298,421.757,46.494,422.809,45.447z M437.113,162.059c1.958,1.969,3.031,4.585,3.021,7.365c-0.01,2.779-1.101,5.388-3.073,7.345 c-4.071,4.042-10.67,4.018-14.711-0.051c-1.044-1.054-5.928-6.893-28.585-37.8l5.749-5.709 C430.26,156.082,436.066,161.006,437.113,162.059z M407.096,115.079l0.029-8.104c37.796-5.55,45.453-6.187,46.971-6.187 c0.006,0,0.01,0,0.014,0c2.779,0.01,5.388,1.101,7.345,3.073c1.959,1.972,3.032,4.588,3.021,7.366 c-0.021,5.724-4.682,10.367-10.401,10.367c-0.012,0-0.025,0-0.037,0C452.557,121.588,444.976,120.913,407.096,115.079z"></path> </g> </g> </g></svg>
                            </div>

                            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase text-[#33332e]">
                                Styling & Hire
                            </h3>

                            <p className="mx-auto mt-5 max-w-xs font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-[1.35] text-[#55554e]">
                                Signage, plinths, vessels and curated styling details to complete your celebration.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="border-t border-[#d8d6cf] px-6 py-8 text-center md:border-t-0"
                        >
                            <div className="mb-7 flex justify-center">
                                <svg viewBox="0 0 1024 1024" className="h-20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#55554e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M489.48 960.05h-1.11a16.09 16.09 0 0 1-15-17.15c14.21-208.64 37.28-768.64-25.82-853.19a16.1 16.1 0 0 1 25.81-19.25c81.69 109.47 37.45 796.64 32.13 874.63a16.1 16.1 0 0 1-16.01 14.96z" fill="#55554e"></path><path d="M506.64 480.34h-0.08a12.88 12.88 0 0 1-11.62-7.49c-1-2.17-101.43-209.65-174-280.12-5.1-5-4.54-21 0.42-26.15a12.87 12.87 0 0 1 18.21-0.26c61.73 60 138.4 211.8 167.21 271.45 12.32-24.81 33.14-65.69 57-108.09 52.06-92.47 93.47-148.07 123.08-165.26a12.87 12.87 0 0 1 17.6 4.67c3.57 6.15 1 21.59-4.7 25.78C654.2 228.15 551.23 403.55 518.27 473a12.87 12.87 0 0 1-11.63 7.34z" fill="#55554e"></path><path d="M504.49 557.61h-0.15a12.87 12.87 0 0 1-10.49-5.61c-1.52-2.22-156.56-209-219-267.51-8.59-8-5.9-21.39-1.41-26.9a12.87 12.87 0 0 1 18.11-1.87c59.63 48.44 177.39 215.11 213.21 266.71C522.51 498 560 446.94 599.22 396.51c113.11-145.43 130-144.39 140.07-143.65a12.87 12.87 0 0 1 12 13.7c-0.44 6.67-6.41 17.93-13.92 20.07-23.16 8.24-130.18 137.06-222.37 265.61a12.89 12.89 0 0 1-10.51 5.37z m233.1-279.06z m1.7-0.11z" fill="#55554e"></path><path d="M502.34 619.85H502a12.86 12.86 0 0 1-9.28-4.33c-1.8-2-177.27-184.07-260.26-217.27-13.46-5.37-15.1-27.25-12.65-33.95a12.87 12.87 0 0 1 16.52-7.67c79.56 29.11 227.91 189 266.52 231.62 19.9-19.76 67.79-66.84 118-112.36 137.85-125 158.4-117 169.46-112.73 6.63 2.58 7.72 12.14 7.54 19.25-0.2 7.81-10.2 21.6-17.44 24-11.1 3.72-143.27 82.88-268.92 209.59a12.89 12.89 0 0 1-9.15 3.85z" fill="#55554e"></path><path d="M502.34 677.8a12.88 12.88 0 0 1-8.38-3.09c-94.65-81-250.8-183.64-287.28-196.51-6.7-2.37-12.2-20.69-11.12-27.72a12.87 12.87 0 0 1 14.69-10.77c9.44 1.45 38.2 5.88 173.92 112 51.93 40.62 100.11 81 118.59 96.63 59.48-45.34 265.94-200.2 314.71-200.2h1a12.88 12.88 0 0 1 12.28 13.45c-0.32 7.11-7.66 18.85-15.28 20-27.58 4.06-176 94.26-305.26 193.56a12.85 12.85 0 0 1-7.87 2.65z" fill="#55554e"></path><path d="M500.2 722.88a12.88 12.88 0 0 1-7.63-2.5c-2.24-1.65-218.81-150.42-317-154.72-12.87-0.56-19.07-20.79-18.77-27.9a12.8 12.8 0 0 1 13.4-12.33c96.36 4 289.68 139.62 330.33 168.89C549.38 662 764.15 523.58 840.7 531.93a12.88 12.88 0 0 1 11.42 14.19c-0.77 7.07-10.34 18.11-17.36 18.07-60.77-0.4-256.24 108.89-327.4 156.52a12.85 12.85 0 0 1-7.16 2.17z" fill="#55554e"></path><path d="M500.2 757.22c-3.28 0-4.5-0.31-45.66-13.34-78.32-24.78-232.81-58.61-296.68-63.4-7.1-0.48-20.86-24.48-20.36-31.54a12.78 12.78 0 0 1 13.8-11.88c66.86 5 231.76 57.19 311 82.27 16.86 5.34 31.77 10.05 37.65 11.73 4.35-1.43 13.71-4.79 23.51-8.29 71.2-25.5 260.34-93.21 346.7-87.86a12.88 12.88 0 0 1 12 13.66c-0.44 7.09-12.86 25.64-20.1 25.08C781 668.55 602 722 532.16 747c-27.45 9.84-28.65 10.22-31.96 10.22z" fill="#55554e"></path><path d="M498 791.56a12.9 12.9 0 0 1-2.85-0.32c-44.55-10.12-302.92-25.39-341.1-12-6.72 2.35-22.15-11-24.5-17.74a12.88 12.88 0 0 1 7.9-16.41c47.57-16.66 314.16 11.43 360.46 20.44 40.88-8.67 339.47-59.38 392.67-13.78a12.88 12.88 0 0 1 1.4 18.16c-4.63 5.4-24.67 9.6-36.34 1.95-40.08-26.26-282.14 2-354.63 19.36a12.8 12.8 0 0 1-3.01 0.34z" fill="#55554e"></path><path d="M208.3 858.1a12.88 12.88 0 0 1-8.72-22.36c80.71-74.16 282.51-52.8 301.09-50.65 50.2-2.27 287.54-9.76 325.83 48.8a12.88 12.88 0 0 1-3.73 17.83c-6 3.89-22.21 1-27.84-4.61-16.22-16.22-96.2-45.36-294.13-36.23a14.43 14.43 0 0 1-2.14-0.08c-2.07-0.25-204.45-21.32-278.55 46.78-2.49 2.25-8.7 0.52-11.81 0.52z" fill="#55554e"></path></g></svg>
                            </div>

                            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold uppercase text-[#33332e]">
                                Custom Design
                            </h3>

                            <p className="mx-auto mt-5 max-w-xs font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-[1.35] text-[#55554e]">
                                Tailored concepts and floral experiences designed specifically for your story.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#f4f1ec] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                <div className="mx-auto max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mb-14 text-center"
                    >
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.1em] text-[#44443d]">
                            Our Process
                        </p>

                        <div className="mx-auto mt-3 h-[2px] w-12 bg-[#44443d]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
                        className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {process.map((item) => (
                            <motion.div
                                key={item.number}
                                variants={fadeUp}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="text-center"
                            >
                                <span className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#44443d]">
                                    {item.number}
                                </span>

                                <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-xl font-bold uppercase tracking-[0.05em] text-[#44443d]">
                                    {item.title}
                                </h3>

                                <p className="mx-auto mt-4 max-w-[220px] font-[family-name:var(--font-cormorant)] text-xl font-medium leading-[1.3] text-[#55554e]">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section
                id="enquire"
                className="relative h-[650px] min-h-[600px] w-full overflow-hidden sm:h-[750px]"
            >
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    src="/wedding2.png"
                    alt="Wedding Florist Yallingup - ceremony floral styling"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                    <motion.h2
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white sm:text-6xl lg:text-7xl"
                    >
                        Let us Create Something Beautiful
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white sm:text-4xl"
                    >
                        Contact us today to arrange a personalised appointment. 
                    </motion.p>

                    <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <Link
                            href="/contact"
                            className="mt-10 inline-block font-[family-name:var(--font-cormorant)] text-5xl font-light uppercase tracking-[-0.02em] text-white transition-opacity duration-300 hover:opacity-60 sm:text-6xl lg:text-7xl"
                        >
                            Enquire
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}
