import connectToMongo from "@/lib/db/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function PUT(req) {
    try {
        const authToken = req.headers.get('auth-token');
        if (!authToken) {
            return NextResponse.json({ success: false, error: "Please authenticate using a valid token" }, { status: 401 });
        }
        const userData = await req.json();
        connectToMongo();
        const { user } = jwt.verify(authToken, JWT_SECRET);
        const updatedItem = await User.findByIdAndUpdate(user.id, { ...userData }, { new: true })
        if (!updatedItem) {
            return NextResponse.json({ success: false, error: "Please authenticate using a valid token" }, { status: 401 });
        }
        return NextResponse.json({ success: true, message: "User Details successfully updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
