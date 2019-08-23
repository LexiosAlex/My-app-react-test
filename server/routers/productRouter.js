import express from "express";
import {getProducts, createProduct, changeProduct, deleteProduct, getProductById} from "../controllers/productContreller.js";

const router = express.Router();
router.get("/api/products/id", getProductById);
router.get("/api/products", getProducts);
router.post("/api/products/create", createProduct);
router.put("/api/product/change", changeProduct);
router.delete("/api/product/delete", deleteProduct);

export default router
