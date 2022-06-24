const express = require("express");
const router = express.Router();
const uploads = require("../middleware/multer");
const { createNews } = require("../controllers/news");
const { validator, result, validateFile } = require("../middleware/validator");

router.post(
  "/create",
  uploads.single("thumbnail"),
  validator,
  result,
  validateFile,
  createNews
);

module.exports = router;
