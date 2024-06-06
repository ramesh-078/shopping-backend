const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const {getProducts,addProduct, updateProduct, deleteProduct} = require("../conttrollers/productcontroller");

const router = express.Router();
router.get("/",getProducts);
router.post("/",checkAuth,addProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
module.exports = router;