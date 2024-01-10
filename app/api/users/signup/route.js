import connectToMongo from "@/lib/db/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const bcrypt = require('bcryptjs');
export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        connectToMongo();
        let user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ success: false, error: "Sorry a user with this email already exists" }, { status: 400 });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        user = await User.create({
            name,
            email,
            password: secPass,
        });
        return NextResponse.json({ success: true,message: "User successfully created!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}