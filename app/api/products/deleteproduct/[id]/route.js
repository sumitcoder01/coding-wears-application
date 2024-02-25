import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

export const dynamic = 'force-dynamic';

export async function DELETE(req, { params }) {
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
        const deletedItem = await Product.findByIdAndDelete(params.id);
        if (!deletedItem) {
            console.log("error item not deleted");
            return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
        }
        return NextResponse.json({ success: true, message: "item deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}