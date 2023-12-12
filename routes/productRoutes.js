const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

router.post("/", productController.createProduct);
router.get("/", productController.getProductList);
router.get("/:productId", productController.getProductDetails);
router.put("/:productId", productController.updateProductDetails);
router.delete("/:productId", productController.deleteProduct);

router.put("/admin/products/:productId", productController.updateProductDetailsAdmin);
router.delete("/admin/products/:productId", productController.deleteProductAdmin);

module.exports = router;
