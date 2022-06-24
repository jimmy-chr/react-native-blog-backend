const News = require("../news/news");
const imageProcess = require("../utils/imageProcess");

const createNews = async (req, res) => {
  const news = new News();
  const id = news.createId();
  try {
    const imageName = await imageProcess(req, id);

    news.create(req.body, id, imageName);
    res.send("submit successful");
  } catch (error) {
    console.log("Error while creating news", error.message);
  }
};

module.exports = {
  createNews,
};
