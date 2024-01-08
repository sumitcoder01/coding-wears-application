import connectToMongo from "@/lib/db/db";
import Category from "@/lib/models/Category";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const {category} = await req.json();
        connectToMongo();
        const categoryData = new Category({category});
        await categoryData.save();
        return NextResponse.json({ success: true, message: "product Successfully Stored" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}