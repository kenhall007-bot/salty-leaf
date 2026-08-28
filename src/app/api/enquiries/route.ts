import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/config/mongoDB"
import Enquiry from "@/models/Enquiry"
import { requireAdminAuth } from "@/lib/admin-auth"

export async function GET(request: NextRequest) {
    try {
        const auth = requireAdminAuth(request)

        if ("error" in auth) {
            return auth.error
        }

        await connectDB()

        const { searchParams } = new URL(request.url)
        const status = searchParams.get("status")

        const filter = status ? { status } : {}

        const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 })

        return NextResponse.json(
            { success: true, data: enquiries },
            { status: 200 }
        )
    } catch (error) {
        console.error("GET /api/enquiries error:", error)

        return NextResponse.json(
            { success: false, message: "Failed to fetch enquiries" },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB()

        const body = await request.json()
        const { name, email, phone, eventType, eventDate, venue, message } = body

        if (!name || !email || !eventType || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email, eventType and message are required",
                },
                { status: 400 }
            )
        }

        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
            eventType,
            eventDate,
            venue,
            message,
        })

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "39c33735-5ec8-48ad-b21f-471ca9ffb36f"
        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name,
                    email,
                    phone: phone || "Not provided",
                    event_type: eventType,
                    event_date: eventDate || "Not provided",
                    venue: venue || "Not provided",
                    message,
                    subject: `New Enquiry from ${name} - Salty Leaf`,
                }),
            })
        } catch (web3Err) {
            console.error("Web3Forms API call error:", web3Err)
        }

        return NextResponse.json(
            { success: true, data: enquiry },
            { status: 201 }
        )
    } catch (error) {
        console.error("POST /api/enquiries error:", error)

        return NextResponse.json(
            { success: false, message: "Failed to submit enquiry" },
            { status: 500 }
        )
    }
}
