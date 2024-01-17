import connectToMongo from "@/lib/db/db";
import Order from "@/lib/models/Order";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req, { params }) {
    try {
        const authToken = req.headers.get('auth-token');
        if (!authToken) {
            return NextResponse.json({ success: false, error: "Admin access failed" }, { status: 401 });
        }
        const { user } = jwt.verify(authToken, JWT_SECRET);
        connectToMongo();
        const { userType } = await User.findById(user.id).select("userType");
        if (!userType || userType !== "admin") {
            return NextResponse.json({ success: false, error: "Admin access failed" }, { status: 401 });
        }
        const order = await Order.findById(params.id);
        if (!order) {
            return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, order, message: "Order successfully fetched!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
