import asyncHandler from "express-async-handler";
import Variation from "../models/variationModel.js";
import SubVariation from "../models/subVariationModel.js";
// @desc    Fetch all Variation
// @route   GET /api/Variation
// @access  Public
const getVariation = asyncHandler(async (req, res) => {
  const variations = await Variation.find().populate("subVariations").exec();
  res.json({ variations });
});
const getSubVariation = asyncHandler(async (req, res) => {
  const subVariation = await SubVariation.find().exec();
  res.json({ subVariation });
});

// @desc    Fetch single Variation
// @route   GET /api/sub/:id
// @access  Public
const getVariationById = asyncHandler(async (req, res) => {
  const variation = await Variation.findById(req.params.id)
    .populate("subVariations")
    .exec();

  if (variation) {
    res.status(200).json(variation);
  } else {
    res.status(404);
    throw new Error("Variation not found");
  }
});
// @desc    Fetch single Variation
// @route   GET /api/sub/:id
// @access  Public
const getSubVariationById = asyncHandler(async (req, res) => {
  const variation = await SubVariation.findById(req.params.id);
  console.log(variation);
  if (variation) {
    res.status(200).json(variation);
  } else {
    res.status(404);
    throw new Error("Variation not found");
  }
});

// // @desc    Delete a Variation
// // @route   DELETE /api//:id
// // @access  Private/Admin
const deleteVariation = asyncHandler(async (req, res) => {
  const variation = await Variation.findById(req.params.id);

  if (variation) {
    await variation.remove();
    res.json({ message: "Variation removed" });
  } else {
    res.status(404);
    throw new Error("Variation not found");
  }
});
// // @desc    Delete a SubVariation
// // @route   DELETE /api/sub/:id
// // @access  Private/Admin
const deleteSubVariation = asyncHandler(async (req, res) => {
  const subVariation = await SubVariation.findById(req.params.id);

  if (subVariation) {
    await subVariation.remove();
    res.json({ message: "SubVariation removed" });
  } else {
    res.status(404);
    throw new Error("SubVariation not found");
  }
});

// // @desc    Create a Variation
// // @route   POST /api/Variation
// // @access  Private/Admin
const createVariation = asyncHandler(async (req, res) => {
  const variation = new Variation({
    name: "Sample name",
  });

  const createdVariation = await variation.save();
  res.status(201).json(createdVariation);
});
// // @desc    Create a Variation
// // @route   POST /api/Variation
// // @access  Private/Admin
const createSubVariation = asyncHandler(async (req, res) => {
  const variation = new SubVariation({
    name: "Sample name",
  });

  const createdSubVariation = await variation.save();
  res.status(201).json(createdSubVariation);
});

// // @desc    Update a Variation
// // @route   PUT /api/variation/:id
// // @access  Private/Admin
const updateVariation = asyncHandler(async (req, res) => {
  const { name, subVariations } = req.body;

  const variation = await Variation.findById(req.params.id);

  if (variation) {
    variation.name = name;
    variation.subVariations = subVariations;
    // console.log(variation);
    const updatedVariation = await variation.save();
    res.json(updatedVariation);
  } else {
    res.status(404);
    throw new Error("Variation not found");
  }
});
const updateSubVariation = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const subVariation = await SubVariation.findById(req.params.id);
  // console.log(subVariation);
  if (subVariation) {
    subVariation.name = name;

    const updatedSubVariation = await subVariation.save();
    res.json(updatedSubVariation);
  } else {
    res.status(404);
    throw new Error("SubVariation not found");
  }
});

export {
  getVariation,
  createVariation,
  getSubVariation,
  createSubVariation,
  getVariationById,
  deleteVariation,
  updateVariation,
  getSubVariationById,
  deleteSubVariation,
  updateSubVariation,
};
