import { getProduct,getProducts,createProduct,updateProduct,deleteProduct } from "../controllers/product.js";
import express from "express";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();

router.get('/',getProducts);
router.get('/:_id',getProduct);
router.post('/',protect,createProduct);
router.put('/:_id',protect,updateProduct);
router.delete('/:_id',protect,deleteProduct);


export default router;