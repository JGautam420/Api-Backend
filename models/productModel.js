import mongoose from "mongoose";


// creating schemas , schema is also known as structure for collection


const productSchema = mongoose.Schema({
    product_name:{ 
    type:String,
    minLength: 3,
     maxLength: 50,
    },
    price:{ 
    type: Number,
    min: 1000,
    max: 1000000000,
    required: true, 
    },
    colors: Array,
    type:{
    type: String,
    required: true,
    enum: ["electronics","clothing","vehicle"] }
});
// creating model - model(collection)

const Product = mongoose.model("Product",productSchema);


export default Product;