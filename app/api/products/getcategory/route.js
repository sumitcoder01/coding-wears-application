import connectToMongo from "@/lib/db/db";
import Category from "@/lib/models/Category";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        connectToMongo();
        const categories = await Category.find();
        return NextResponse.json({ success: true, categories: categories }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}