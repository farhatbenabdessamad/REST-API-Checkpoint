const express= require("express")
const { addProduct, getProducts, deleteProducts, updateProducts } = require("../controller/productControl")
const productRouter= express.Router()

productRouter.post("/product/add", addProduct)
productRouter.get("/product/get", getProducts)
productRouter.delete("/product/delete/:id", deleteProducts)
productRouter.put("/product/update/:id", updateProducts)

module.exports= productRouter