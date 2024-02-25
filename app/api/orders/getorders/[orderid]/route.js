import connectToMongo from "@/lib/db/db";
import Order from "@/lib/models/Order";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
    try {
        const authToken = req.headers.get('auth-token');
        if (!authToken) {
            return NextResponse.json({ success: false, error: "Invalid authentication token" }, { status: 401 });
        }

        connectToMongo(); 

        const { user } = jwt.verify(authToken, JWT_SECRET);
        const userOrders = await Order.find({ userId: user.id });

        if (!userOrders || userOrders.length === 0) {
            return NextResponse.json({ success: false, error: "No orders found for the user" }, { status: 404 });
        }

        const order = await Order.findOne({ _id: params.orderid, userId: user.id });

        if (!order) {
            return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, order, message: "Orders successfully fetched!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
