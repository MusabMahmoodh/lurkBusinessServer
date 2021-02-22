import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { upload_file } from "./fileUpload.js";
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 1;
  const page = Number(req.query.page) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const cat = req.query.category
    ? {
        ...keyword,
        category: req.query.category,
      }
    : { ...keyword };
  const subCat = req.query.variation
    ? {
        ...cat,
        variation: req.query.variation,
      }
    : { ...cat };
  const search = req.query.subVariation
    ? {
        ...subCat,
        subVariation: req.query.subVariation,
      }
    : { ...subCat };
  try {
    const count = await Product.countDocuments({ ...search });
    const products = await Product.find({ ...search })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    // console.log(products, keyword);
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }

  // console.log(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  // console.log("here");
  const product = new Product({
    name: "Sample name",
    price: 0,
    newPrice: 0,
    image: "",
    brand: "Sample brand",
    // category: "Sample category",
    // countInStock: 0,
    // numReviews: 0,
    description: "Sample description",
  });
  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    newPrice,
    image,
    brand,
    category,
    isAvailable,
    isRecommended,
    variation,
    subVariation,
  } = req.body;

  const product = await Product.findById(req.params.id);
  try {
    const newImage = await upload_file(image.data);
    if (product) {
      product.name = name;
      product.price = price;
      product.newPrice = newPrice;
      product.description = description;
      product.image = newImage.secure_url;
      product.brand = brand;
      product.category = category;
      product.isAvailable = isAvailable;
      product.isRecommended = isRecommended;
      product.variation = variation;
      product.subVariation = subVariation;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(204).json({ message: "Failed Updating" });
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
// const createProductReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body;

//   const product = await Product.findById(req.params.id);

//   if (product) {
//     const alreadyReviewed = product.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString()
//     );

//     if (alreadyReviewed) {
//       res.status(400);
//       throw new Error("Product already reviewed");
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };

//     product.reviews.push(review);

//     product.numReviews = product.reviews.length;

//     product.rating =
//       product.reviews.reduce((acc, item) => item.rating + acc, 0) /
//       product.reviews.length;

//     await product.save();
//     res.status(201).json({ message: "Review added" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ isRecommended: true }).exec();
  // console.log(products);
  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  // createProductReview,
  getTopProducts,
};
