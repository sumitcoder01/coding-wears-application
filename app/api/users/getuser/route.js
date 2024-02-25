import connectToMongo from "@/lib/db/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        const authToken = req.headers.get('auth-token');
        if (!authToken) {
            return NextResponse.json({ success: false, error: "Please authenticate using a valid token" }, { status: 401 });
        }
        connectToMongo();
        const { user } = jwt.verify(authToken, JWT_SECRET);
        const userDetails = await User.findById(user.id).select("-password");
        if (!userDetails) {
            return NextResponse.json({ success: false, error: "Please authenticate using a valid token" }, { status: 401 });
        }
        return NextResponse.json({ success: true, user: userDetails, message: "User Details successfully fetched" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
