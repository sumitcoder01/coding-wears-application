import connectToMongo from "@/lib/db/db";
import Order from "@/lib/models/Order";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function GET(req) {
    try {
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
        const orders = await Order.find({userId:user.id})
        if(!orders){
            return NextResponse.json({ success: false, error: "Orders not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, orders, message: "Orders successfully fetched!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}