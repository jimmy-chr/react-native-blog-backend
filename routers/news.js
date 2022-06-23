const express = require("express");
const router = express.Router();
const multer = require("multer");
const News = require("../news/news");
const imageProcess = require("../utils/imageProcess");

const storage = multer.memoryStorage();
const uploads = multer({ storage });

router.post("/create", uploads.single("thumbnail"), async (req, res) => {
  const news = new News();
  const id = news.createId();

  const imageName = await imageProcess(req, id);

  news.create(req.body, id, imageName);
  res.send("submit successful");
});

module.exports = router;
