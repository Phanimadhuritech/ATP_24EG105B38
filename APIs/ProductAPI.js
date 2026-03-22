//create mini express app(seperate route)
import exp from "express";
import { productModel } from "../models/productModel.js";
export const productApp = exp.Router();
//define product rest API Routes
//create new product


productApp.post("/products", async (req, res) => {
    //get new product obj from req
    const newProduct = req.body;
    //create new product document
    const newProductDocument = new productModel(newProduct);
    //save
    const result = await newProductDocument.save();
    //send res
    res.status(201).json({ message: "Product created" });
});

//read all product
productApp.get("/products", async (req, res) => {
    //read all product from db
    let productList = await productModel.find();
    res.status(200).json({ message: "product", payload: productList });
});

//get product by id
productApp.get("/products/:id", async (req, res) => {
    //read object id from req params
    const pid = req.params.id;
    //find user by id
    const productObj = await productModel.findOne({productId:pid});
    //if product not found
    if (!productObj) {
        return res.status(400).json({ message: "product not found" })
    }
    //send res
    res.status(200).json({ message: "product", payload: productObj });
});

//update a product by id
productApp.put("/products/:id", async (req, res) => {
    const modifiedProduct = req.body;
    const pid = req.params.id;
    const updatedProduct = await productModel.updateOne(
 {productId:pid},
 {$set:{...modifiedProduct}}
)
    res.status(200).json({ message: "product", payload: updatedProduct });
});

//find and delete product by id
productApp.delete("/products/:id", async (req, res) => {
    const pid = req.params.id;
    const deletedProduct = await productModel.deleteOne({productId:pid})
    res.status(200).json({ message: "product deleted", payload: deletedProduct });
});
//use findone method to read a document with non object id fields
