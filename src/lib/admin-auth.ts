import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export type AdminSession = {
    id: string
    email: string
    role: string
}

export function requireAdminAuth(request: NextRequest) {
    if (!JWT_SECRET) {
        return {
            error: NextResponse.json(
                { success: false, message: "Server misconfiguration" },
                { status: 500 }
            ),
        }
    }

    const token = request.cookies.get("admin_session")?.value

    if (!token) {
        return {
            error: NextResponse.json(
                { success: false, message: "Not authenticated" },
                { status: 401 }
            ),
        }
    }

    try {
        const session = jwt.verify(token, JWT_SECRET) as AdminSession

        return { session }
    } catch {
        return {
            error: NextResponse.json(
                { success: false, message: "Invalid or expired session" },
                { status: 401 }
            ),
        }
    }
}
