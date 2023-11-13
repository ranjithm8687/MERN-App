import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export const Products = mongoose.model("Products", productsSchema);