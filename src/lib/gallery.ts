export function getGalleryImageSrc(src: string) {
    if (!src) return src

    try {
        const url = new URL(src)

        if (url.protocol === "http:" || url.protocol === "https:") {
            return `/api/gallery/image?url=${encodeURIComponent(src)}`
        }
    } catch {
        return src
    }

    return src
}
