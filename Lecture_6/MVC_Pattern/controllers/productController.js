const Product = require("../models/productModel");

// business Logic

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      res.json({
        message: "There is no Product",
      });
    }
    // If we have products >= 1
    res.status(200).json({
      success: true,
      products: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();
    res.status(200).json({
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log("Put ki req aayi h");
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      { new: true }
    );

    if (!updateProduct) {
      res.json({
        message: "Cannot find Product",
      });
    }

    res.status(200).json({
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      res.json({
        message: "Product not found, cannot delete",
      });
    }

    res.status(200).json({
      message: "Product Deleted Successfully",
      product: deletedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
