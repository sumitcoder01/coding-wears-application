import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        connectToMongo();
        const products = await Product.find();
        let varients = {};
        for (let item of products) {
            if (item.availableQty > 0 && Object.keys(varients).includes(item.title)) {
                varients[item.title].availableQty += item.availableQty;
                if (!varients[item.title]["color"].includes(item.color)) {
                    varients[item.title]["color"].push(item.color);
                }
                if (!varients[item.title]["size"].includes(item.size)) {
                    varients[item.title]["size"].push(item.size);
                }
            }
            else if (item.availableQty > 0) {
                const { title, description, img, category, slug, size, color, availableQty, price, review } = item;
                varients[item.title] = { title, description, img, category, slug, size, color, availableQty, price, review };
                varients[item.title].color = [color];
                varients[item.title].size = [size];
            }
        }
        return NextResponse.json({ success: true, products:varients}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}