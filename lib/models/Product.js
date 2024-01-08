import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        size: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        availableQty: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        review: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);
const Product = mongoose.models.products || mongoose.model("products", ProductSchema);
export default Product;
