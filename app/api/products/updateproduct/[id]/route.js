import connectToMongo from "@/lib/db/db";
import Category from "@/lib/models/Category";
import Product from "@/lib/models/Product";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function PUT(req, { params }) {
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
        const productData = await req.json();
        const productItem = await Product.findById(params.id);
        if (!productItem) {
            return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        if (productData.category !== productItem.category) {
            const categoryItem = await Category.findOne({ category: productData.category });
            if (!categoryItem) await Category.create({ category: productData.category });
        }
        const updatedItem = await Product.findByIdAndUpdate(params.id, productData, { new: true });
        if (!updatedItem) {
            return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
        }
        return NextResponse.json({ success: true, message: "Product updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}