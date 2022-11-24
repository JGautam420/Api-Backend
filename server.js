import express  from 'express';
import mongoose from 'mongoose';
import connectDB from'./db.js';
import router from './routes/Product.js';
import user from './routes/users.js';
import dotenv from "dotenv";
import cloudineryConfig from "./config/cloudinery.js"; 
import multer from "multer";
import cloudinary from"cloudinary";
dotenv.config();
// const express = require('express');
const app = express();
const upload = multer({dest:"uploads/"});
app.use(express.json());

// mongodb connection
connectDB();
cloudineryConfig();

app.post("/uploads",upload.single('image'),(req,res)=>{
    cloudinary.v2.uploader.upload
    (req.file.path,
    function(error, result){
        res.send(result);
    
    });
})

app.use('/api/products',router);
app.use('/api/users',user);

// ENV CONNECT
let Port = process.env.PORT || 5000

// create port on 5000

app.listen(Port,console.log(`server is running on port ${Port}`));

// const data = async() => {
//     let data = await Product.find();
//     console.log(data);
// }
// data();




// const product1 = {
//     product_name: "iphone 13",
//     price: 69000,
//     colors: ["navy blue","black","spartan green","starlight white" ],
//     type: "electronics"
// }
// const product2 = {
//     product_name: "Philips Sound bar",
//     price: 12000,
//     colors: [" blue","black"],
//     type: "electronics"
// }
// const product3 = {
//     product_name: "milton stainless steel bottle",
//     price: 2000,
//     colors: [" blue","black","silver" ],
//     type: "kitchen"
// }
// const product4 = {
//     product_name: "java 42",
//     price: 25000,
//     colors: [" blue","black","white" ],
//     type: "vehicle"
// }

// const insertData = async() => {
//     let result = await Product.insertMany([product1,product2,product3,product4]);
//     if(result )console.log("Data is inserting");
// }

// insertData();


// to get data

// const getData = async() => {
//     let result = await Product.find();
//     if(result) console.log(result);
// }

// getData();

// to update data

// const updateData = async() => {
// let result = await Product.updateOne({  product_name: "iphone 13"},{$set: {product_name: "iphone 13 pro max",price: 130000}});
// if (result) console.log("data update");

//  }

//  updateData();




// to delete data

// const deleteData = async () => {
//     let result = await Product.deleteOne({product_name:"laptop"});
//     if (result) console.log("data delete");

// }
// deleteData();



// api -Application programming interface

// api method

// get - data fetching
// post - create new document
// put - update a specific data
// delete - delete a specific data













// For example, here is a completely imaginary case with a pseudo language:
// English language syntaxes to write code for programs before it is actually converted into a specific programming language.

// You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:

// book_list = new List();
// sql = "SELECT book FROM library WHERE author = 'Linus'";
// data = query(sql); 
// while (row = data.next())
// {
//      book = new Book();
//      book.setAuthor(row.get('author');
//      book_list.add(book);
// }
// With an ORM library, it would look like this:

// book_list = BookTable.query(author="Linus");
// The mechanical part is taken care of automatically via the ORM library.

// MVC model - model  view controller