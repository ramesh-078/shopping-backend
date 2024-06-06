const Product = require("../models//productModel.js");

async function getProducts(req,res){
    //  Product.find()
    //  .then ((poduct) => console.log(product))
    //  .catch((err) => console.log(err.message));
    try{
        let productId = req.query.productId;
        if(productId){

        let product= await Product.findById(productId);
         return res.send(product);
    }
    let product= await Product.find().populate("addedBy","fullname -_id");
         return res.send(product);
         }
catch (err) {
             res.status(500).send({error:err.message});
  }
}
async function addProduct(req,res){

    let newproduct=req.body;
    let product = await Product.create({...newproduct,addedBy:req.user});
    let response ={
        message:"Product added",
    };
    res.send(response);
}
 async function updateProduct(req,res){
     let id= req.params.id;
     let updateFields = req.body;
     let product = await Product.findByIdAndUpdate(id,{$set:updateFields});
     res.send({message:"Product updated"});
 }
   async function deleteProduct(req,res){
     let id = req.paramas.id;
     let product = await Product.findByIdAndDelete(id);
  es.send({message:"Product Deleted"});
  }
exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;