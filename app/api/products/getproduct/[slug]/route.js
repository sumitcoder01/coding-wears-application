import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
export async function GET(_req, { params }) {
    try {
        const productSlug = params.slug;
        connectToMongo();
        const { _id, title, description, img, category, slug, size, color, availableQty, price, review } = await Product.findOne({ slug: productSlug });
        const products = await Product.find({ title: title });
        let varient = { _id, title, description, img, category, slug, size, color, availableQty, price, review };
        let sizeColorVarient = {};
        for (let item of products) {
            if (item.availableQty > 0) {
                sizeColorVarient[item.size] = sizeColorVarient[item.size] || {};
                sizeColorVarient[item.size][item.color] = slug;
            }
        }
        return NextResponse.json({ success: true, varient: varient, sizeColorVarient: sizeColorVarient }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}