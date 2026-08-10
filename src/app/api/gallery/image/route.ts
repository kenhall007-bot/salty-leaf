import { NextRequest, NextResponse } from "next/server"

function isAllowedBlobHost(hostname: string) {
    return (
        hostname === "blob.vercel-storage.com" ||
        hostname.endsWith(".blob.vercel-storage.com")
    )
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const source = searchParams.get("url")

    if (!source) {
        return NextResponse.json(
            { success: false, message: "Image url is required" },
            { status: 400 }
        )
    }

    try {
        const parsedUrl = new URL(source)

        if (
            parsedUrl.protocol !== "http:" &&
            parsedUrl.protocol !== "https:"
        ) {
            throw new Error("Unsupported image protocol")
        }

        if (!isAllowedBlobHost(parsedUrl.hostname)) {
            throw new Error("Unsupported image host")
        }

        const response = await fetch(parsedUrl.toString(), {
            cache: "force-cache",
        })

        if (!response.ok || !response.body) {
            return NextResponse.json(
                { success: false, message: "Failed to load image" },
                { status: 502 }
            )
        }

        return new NextResponse(response.body, {
            status: 200,
            headers: {
                "Content-Type":
                    response.headers.get("content-type") ||
                    "application/octet-stream",
                "Cache-Control": "public, max-age=86400, s-maxage=86400",
                "X-Content-Type-Options": "nosniff",
            },
        })
    } catch (error) {
        console.error("GET /api/gallery/image error:", error)

        return NextResponse.json(
            { success: false, message: "Invalid image url" },
            { status: 400 }
        )
    }
}
