import mongoose from "mongoose";
import cors from "cors"
import express, { response } from "express"
import UserModel from "./models/products.js";


const app = express()

app.use(cors())
app.use(express.json())

app.post("/CreateProduct", (req, res) => {
    UserModel.create(req.body)
    .then(Products => res.json(Products))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    UserModel.find({})
    .then(Products=>res.json(Products))
    .catch(err=>res.json(err))
})

app.get("/getuser/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(Products=>res.json(Products))
    .catch(err=>res.json(err))

})

app.put("/UpdateProduct/:id", (req, res) => {
    const id = req.params.id;
    const { name, price, details, rating } = req.body;

    UserModel.findByIdAndUpdate(
        { _id: id },
        { name, price, details, rating },
        { new: true } // Return the updated document
    )
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err));
});

app.delete("/DeleteProduct/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(Products=>res.json(Products))
    .catch(err=>res.json(err))
})


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AddProduct');
    console.log("mongoose connnect success")

}

app.listen(3001, () => {
    console.log("server running port 3001")
})