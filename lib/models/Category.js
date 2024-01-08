import mongoose from "mongoose";
const { Schema } = mongoose;
const CategorySchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);
const Category = mongoose.models.categories || mongoose.model("categories", CategorySchema);
export default Category;
