import connectToMongo from "@/lib/db/db";
import Order from "@/lib/models/Order";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function POST(req) {
    try {
        const { deliveryDetails, cart, totatPrice } = await req.json();
        const authToken = req.headers.get('auth-token');
        if (!authToken) {
            return NextResponse.json({ success: false, error: "Invalid authentication token" }, { status: 401 });
        }
        connectToMongo();
        const { user } = jwt.verify(authToken, JWT_SECRET);
        const userData = await User.findById(user.id);
        if (!userData) {
            return NextResponse.json({ success: false, error: "Invalid authentication token" }, { status: 401 });
        }
        let products = [];
        for (let item of cart) {
            products.push({ productId: item.id, qunatity: item.qunatity,name:item.name,price:item.price})
        }
        deliveryDetails.pincode = parseInt(deliveryDetails.pincode);
        const { _id } = await Order.create({
            userId: user.id,
            ...deliveryDetails,
            amount: totatPrice,
            products,
        });
        return NextResponse.json({ success: true, orderId: _id, message: "Order successfully placed!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}