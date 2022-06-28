const express = require("express");
const app = express();
const newsRouter = require("./routers/news");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static("public"));
app.use(express.static("data/uploads"));
app.use("/api", newsRouter);

app.listen(3000, () => {
  console.log("Port is listening");
});
