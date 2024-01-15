import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        connectToMongo();
        const products = await Product.find();
        return NextResponse.json({ success: true, products}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}