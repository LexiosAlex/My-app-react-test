import express from "express";
import productController from "../controllers/productContreller.js";
const router = express.Router();
// a simple test url to check that all of our files are communicating correctly.
router.get("/test", productController.test);

export default {router}
