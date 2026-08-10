"use client"

import React, { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Loader2, X } from "lucide-react"
import { getGalleryImageSrc } from "@/lib/gallery"

type GalleryImage = {
    _id: string
    url: string
}

type CategoryGalleryModalProps = {
    title: string
    buttonLabel: string
    categories: string[]
    buttonClassName?: string
}

export default function CategoryGalleryModal({
    title,
    buttonLabel,
    categories,
    buttonClassName,
}: CategoryGalleryModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
    const [galleryError, setGalleryError] = useState("")

    const fetchGallery = useCallback(async () => {
        setIsLoading(true)
        setGalleryError("")

        try {
            const response = await fetch(
                `/api/gallery?category=${encodeURIComponent(categories.join(","))}`,
                { cache: "no-store" }
            )
            const result = await response.json()

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to load gallery")
            }

            setGalleryImages(result.data)
        } catch (err) {
            console.error(`Failed to fetch ${title.toLowerCase()} gallery:`, err)
            setGalleryError(
                err instanceof Error ? err.message : "Something went wrong"
            )
        } finally {
            setIsLoading(false)
        }
    }, [categories, title])

    const openGallery = async () => {
        setIsOpen(true)

        if (galleryImages.length === 0) {
            await fetchGallery()
        }
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }

        window.addEventListener("keydown", handleKey)

        return () => window.removeEventListener("keydown", handleKey)
    }, [])

    return (
        <>
            <motion.button
                type="button"
                onClick={openGallery}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={
                    buttonClassName ||
                    "mt-9 inline-flex items-center gap-3 border border-[#25251f] px-8 py-4 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.15em] text-[#25251f] transition-colors duration-300 hover:bg-[#25251f] hover:text-[#f8f5ef]"
                }
            >
                {buttonLabel}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            data-lenis-prevent
                            className="relative h-full max-h-[85vh] w-full max-w-6xl overflow-y-auto bg-[#faf9f6] p-4 sm:p-8"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium uppercase tracking-[-0.02em] text-[#1f211d] sm:text-4xl">
                                    {title}
                                </h3>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close"
                                    className="text-[#55554e] transition-opacity hover:opacity-60"
                                >
                                    <X className="h-6 w-6" strokeWidth={1.75} />
                                </button>
                            </div>

                            {isLoading && (
                                <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-[#e3e0d6] bg-[#faf9f6] py-20">
                                    <Loader2
                                        className="h-6 w-6 animate-spin text-[#8a8678]"
                                        strokeWidth={1.75}
                                    />
                                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#8a8678]">
                                        Loading gallery...
                                    </p>
                                </div>
                            )}

                            {!isLoading && galleryError && (
                                <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 py-20 text-center">
                                    <p className="font-[family-name:var(--font-inter)] text-sm text-red-800">
                                        {galleryError}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={fetchGallery}
                                        className="border border-red-800 px-5 py-2 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.12em] text-red-800 transition-colors duration-200 hover:bg-red-800 hover:text-white"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}

                            {!isLoading &&
                                !galleryError &&
                                galleryImages.length === 0 && (
                                    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#d8d6cf] bg-[#faf9f6] py-20 text-center">
                                        <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#1f211d]">
                                            No gallery images yet
                                        </p>
                                        <p className="font-[family-name:var(--font-inter)] text-sm text-[#8a8678]">
                                            Check back soon.
                                        </p>
                                    </div>
                                )}

                            {!isLoading &&
                                !galleryError &&
                                galleryImages.length > 0 && (
                                    <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
                                        {galleryImages.map((image) => (
                                            <div
                                                key={image._id}
                                                className="mb-3 break-inside-avoid overflow-hidden"
                                            >
                                                <img
                                                    src={getGalleryImageSrc(image.url)}
                                                    alt={title}
                                                    className="w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
