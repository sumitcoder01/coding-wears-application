import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        wishlist: [
            {
                productId: { type: String },
            },
        ],
    },
    { timestamps: true }
);
const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;
