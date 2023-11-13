import express from "express";

import { Products } from "../models/productsModel.js";

const router = express.Router();

// Route for save a new Products
router.post("/", async(request, response) => {
    try {
        if (!request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear ",
            });
        }

        const newProducts = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const products = await Products.create(newProducts);

        return response.status(201).send(products);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Routes for Get All Products frm database
router.get("/", async(request, response) => {
    try {
        const products = await Products.find({});

        // return response.status(200).json(products);
        return response.status(200).json({
            count: products.length,
            data: products,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Routes for Get One Books from database by id
router.get("/:id", async(request, response) => {
    try {
        const { id } = request.params;
        const product = await Products.findById(id);

        return response.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Routes for Update
router.put("/:id", async(request, response) => {
    try {
        if (!request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear ",
            });
        }

        const { id } = request.params;
        const result = await Products.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Products not found" });
        }

        return response
            .status(200)
            .send({ message: "Products updated successfully " });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Routes for Delete
router.delete("/:id", async(request, response) => {
    try {
        const { id } = request.params;
        const result = await Products.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: "Products not found" });
        }
        return response
            .status(200)
            .send({ message: "Products Deleted successfully " });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;