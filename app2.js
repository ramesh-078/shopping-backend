
// const express = require("express");
// const mongoose = require("mongoose");

// const productrouter = require('./routes/productrouter');
// const app =express();
// app.use(express.json());
// mongoose
//  .connect("mongodb://127.0.0.1:27017/HCOE")
//  .then(() =>{
//     console.log("connected to DB");  
//  })
//   .catch((err) =>{
//     console.log(err.message);
//   });
//   app.use("/api/products",productrouter);
//   app.listen(3000,() =>console.log("server is running"));
// //  async function getProducts(){
// //     //  Product.find()
// //     //  .then ((poduct) => console.log(product))
// //     //  .catch((err) => console.log(err.message));
// //     try {
// //         let product = await Product.find();
// //         console.log(product);
// //         }catch (err) {
// //             console.log(err.message);
// //         }
// // }
// // function addproduct(){
// //     let product = {
// //         title:"charger",
// //         description:"charger123",
// //         price:100,
// //         isInstock:true,
// //     };
// //     Product.create(product)
// //     .then((p) => console.log(p))
// //     .catch((err) => console.log(err.message));
// // }
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Product = require("./models/productModel");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/HCOE")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => console.log("Server is running"));
// addProduct();
