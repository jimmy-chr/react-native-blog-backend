const News = require("../news/news");
const imageProcess = require("../utils/imageProcess");

const news = new News();

const createNews = async (req, res) => {
  const id = news.createId();
  try {
    const imageName = await imageProcess(req, id);
    news.create(req.body, id, imageName);
    res.json({ success: true, message: "Post created successfully." });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, server error!",
    });
    console.log("Error while creating news", error.message);
  }
};

const getAllNews = async (req, res) => {
  try {
    const data = await news.getAll();
    res.json({ success: true, news: data });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, server error!",
    });
    console.log("Error while getting all news", error.message);
  }
};

const getSingleNews = async (req, res) => {
  try {
    const data = await news.getSingle(req.params.id);
    if (!data) {
      return res.json({
        success: false,
        message: "Post not found!",
      });
    }
    res.json({ success: true, news: data });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, server error!",
    });
    console.log("Error while getting news item", error.message);
  }
};

const getNewsByCategory = async (req, res) => {
  try {
    const data = await news.getByCategory(req.params.category);
    if (!data) {
      return res.json({
        success: false,
        message: "Category not found!",
      });
    }
    res.json({ success: true, news: data });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, server error!",
    });
    console.log("Error while getting news category", error.message);
  }
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
};
