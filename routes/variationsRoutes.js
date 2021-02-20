import express from "express";
const router = express.Router();
import {
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
} from "../controllers/variationsControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getVariation).post(protect, admin, createVariation);
router
  .route("/sub")
  .get(getSubVariation)
  .post(protect, admin, createSubVariation);
router
  .route("/:id")
  .get(getVariationById)
  .delete(protect, admin, deleteVariation)
  .put(protect, admin, updateVariation);
router
  .route("/sub/:id")
  .get(getSubVariationById)
  .delete(protect, admin, deleteSubVariation)
  .put(protect, admin, updateSubVariation);

export default router;
