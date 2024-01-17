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
        const categoryData = await req.json();
        const categoryItem = await Category.findById(params.id);
        if (!categoryItem) {
            return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        else {
            await Product.updateMany(
                { category: categoryItem.category },
                { $set: { category: categoryData.category } }
            );
        }
        const updatedItem = await Category.findByIdAndUpdate(params.id, categoryData, { new: true });
        if (!updatedItem) {
            return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
        }
        return NextResponse.json({ success: true, message: "Category updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}