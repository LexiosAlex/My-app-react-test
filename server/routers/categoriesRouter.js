import express from "express";

import {getCategories, createCategory, deleteCategory} from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/api/categories", getCategories);
router.post("/api/categories/create", createCategory);
router.delete("/api/category/delete", deleteCategory);

export default router;
