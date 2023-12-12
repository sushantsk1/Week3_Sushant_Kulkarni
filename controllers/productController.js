const Product = require("../models/Product");

const productController = {
  createProduct: async (req, res) => {
    try {
      const { productName, description, price, ownerId } = req.body;
      const newProduct = await Product.create({ productName, description, price, ownerId });
      res.status(200).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getProductList: async (req, res) => {
    try {
      const productList = await Product.find();
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  getProductDetails: async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  updateProductDetails: async (req, res) => {
    try {
      const { productName } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        { productName },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
      if (!deletedProduct) {
        return res.status(404).send('Product not found');
      }
      res.json(deletedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  updateProductDetailsAdmin: async (req, res) => {
    try {
      const { productName } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        { productName },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  deleteProductAdmin: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
      if (!deletedProduct) {
        return res.status(404).send('Product not found');
      }
      res.json(deletedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = productController;
