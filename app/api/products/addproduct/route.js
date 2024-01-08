import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const productData = await req.json();
        connectToMongo();
        const product = new Product(productData);
        await product.save();
        return NextResponse.json({ success: true, message: "product Successfully Stored" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}