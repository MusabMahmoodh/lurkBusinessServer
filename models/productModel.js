import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Category",
    },
    variation: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Variation",
    },
    subVariation: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "SubVariation",
    },
    description: {
      type: String,
      required: true,
    },
    // reviews: [reviewSchema],
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    price: {
      type: Number,
    },
    newPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
