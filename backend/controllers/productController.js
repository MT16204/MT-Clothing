import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//fuct add product
const addProduct = async (req, res) => {
    try {
        const {name, description, description_detail, price, category, subCategory, sizes, bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) =>item !== undefined);

        let imageUrl = await Promise.all(
            images.map(async () => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url;
            })
        );

        const productData ={
            name,
            description,
            description_detail,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true:false,
            date: Date.now(),
            images: imageUrl
        };
        console.log(productData);

        const product = new productModel(productData);await product.save();

        res.json({success: true, message: 'Product added'});
        
    } catch (error) {
        console.log(error); res.json({success: false, message: error.message});
    }
};

//fuct list product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({success: true, products});
    } catch (error) {
        console.log(error); res.json({success: false, message: error.message});
    }
};

//fuct remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: 'Product removed'});
    } catch (error) {
        console.log(error); res.json({success: false, message: error.message});
    }
};

//fuct single product
const singleProduct = async (req, res) => {
    try {
        const {productID} = req.body;
        const product = await productModel.findById(productID);
        res.json({success: true, product});        
    } catch (error) {
        console.log(error); res.json({success: false, message: error.message});
    }
};

export {addProduct, listProduct, removeProduct, singleProduct};