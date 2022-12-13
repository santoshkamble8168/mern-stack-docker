const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

dotEnv.config()
const PORT = process.env.PORT || 5000

mongoose
  .connect(
    "mongodb://root:secret@mongo:27017/products?directConnection=true&authSource=admin"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const Product = mongoose.model("Product", {name: String})


app.get("/", (req, res) => {
   return res.send("MERN application")
})

app.get("/products", async (req, res) => {
   const products = await Product.find()
   return res.status(200).json(products)
})

app.get("/addproduct", async (req, res) => {
  const products = new Product({name: "Iphone"})
  const saveProduct = await products.save()
  return res.status(201).json(saveProduct);
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
