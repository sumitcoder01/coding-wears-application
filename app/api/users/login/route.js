import connectToMongo from "@/lib/db/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
export async function POST(req) {
    try {
        const {email, password } = await req.json();
        connectToMongo();
        let user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ success: false, error: "Please try to login with correct credentials" }, { status: 400 });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return NextResponse.json({ success: false, error: "Please try to login with correct credentials" }, { status: 400 });
        }
        const data = {
          user: {
            id: user._id
          }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        return NextResponse.json({ success: true, authToken, message: "User Successfully login" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}