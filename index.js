const express = require("express");
const app = express();
const News = require("./news/news");

app.use(express.static("public"));

const news = new News();

const test = async () => {
  const data = await news.getByCategory("tech");
  console.log(data);
};

test();

app.listen(3000, () => {
  console.log("Port is listening");
});
