import Product from "../models/productModel.js";



// to fetch all data
const getProducts = async(req,res) => { 
try {
    let result = await Product.find();
    res.send(result);
    
} catch (error) {
  res.send({error: error.message})  
}
};

// fetching data ById
const getProduct =async (req,res) => { 
  try {
    let {_id} = req.params;
    let result = await Product.findById({_id});
    res.send(result);
  } catch (error) {
    res.send({error: error.message})
  }
};

// creating new Data
const createProduct = async(req,res) => {
 try {
    let data = req.body;
    let result = await Product.create(data);
    res.send(result);
 } catch (error) {
    res.send({error: error.message})
 }

};

// to update Data
const updateProduct = async(req,res) => { 
try {
    let {_id}=req.params;
    let data = req.body;
    let result = await Product.updateOne({_id},{$set: data});
    res.send(result);
} catch (error) {
    res.send({error: error.message})
}
};
// to delete Data
const deleteProduct= async(req,res) => { 
try {
    let {_id} = req.params;
    let result = await Product.deleteOne(_id);
    res.send(result);
} catch (error) {
    res.send({error: error.message})
}
 };

 export {getProduct,getProducts,createProduct,updateProduct,deleteProduct};