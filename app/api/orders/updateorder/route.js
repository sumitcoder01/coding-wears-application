import connectToMongo from "@/lib/db/db";
import Order from "@/lib/models/Order";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function PUT(req) {
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
        const orderData = await req.json();
        const updatedItem = await Order.findByIdAndUpdate(orderData._id, orderData, { new: true });
        if (!updatedItem) {
            console.log("error item not updated");
            return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
        }
        return NextResponse.json({ success: true, message: "order Successfully updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}