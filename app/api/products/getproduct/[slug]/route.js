import connectToMongo from "@/lib/db/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";
export async function GET(_req, { params }) {
    try {
        const productSlug = params.slug;
        connectToMongo();
        const{title,description,img,category,slug,size,color,availableQty,price,review} = await Product.findOne({ slug: productSlug });
        const products = await Product.find({ title: title });
        const varient = {title,description,img,category,slug,size,color,availableQty,price,review,};
        let sizeVarient = {};
        let colorVarient = {};
        for (let item of products) {
            if (item.availableQty > 0) {
                sizeVarient[item.size] = sizeVarient[item.size] || {};
                colorVarient[item.color] = colorVarient[item.color] || {};
                sizeVarient[item.size][item.color] = item.slug;
                colorVarient[item.color][item.size] = item.slug;
            }
        }
        return NextResponse.json(
            {
                success: true,
                varient: varient,
                sizeVarient: sizeVarient,
                colorVarient: colorVarient,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Internal Server error" },{ status: 500 });
    }
}
