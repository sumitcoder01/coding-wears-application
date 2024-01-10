import connectToMongo from "@/lib/db/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const { email } = await req.json();
        connectToMongo();
        let user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ success: false, error: "Incorrect email" }, { status: 400 });
        }
        // currently not functional
        return NextResponse.json({ success: true,message: "OTP send to your email!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}