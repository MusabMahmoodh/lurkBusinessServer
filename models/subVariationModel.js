import mongoose from "mongoose";

const subVariationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SubVariation = mongoose.model("SubVariation", subVariationSchema);

export default SubVariation;
