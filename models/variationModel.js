import mongoose from "mongoose";

const variationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subVariations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubVariation",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Variation = mongoose.model("Variation", variationSchema);

export default Variation;
