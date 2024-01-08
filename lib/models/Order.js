import mongoose from "mongoose";
const { Schema } = mongoose;
const OrderSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: { type: String },
                qunatity: { type: Number, default: 1 },
            },
        ],
        address: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default: "Pending",
        },
    },
    { timestamps: true }
);
const Order = mongoose.models.orders || mongoose.model("orders", OrderSchema);
export default Order;
