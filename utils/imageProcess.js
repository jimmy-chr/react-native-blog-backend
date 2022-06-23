const fs = require("fs");
const sharp = require("sharp");

const imageProcess = async (req, id) => {
  fs.access("./data/uploads", (err) => {
    if (err) {
      fs.mkdirSync("./data/uploads");
    }
  });

  const formattedName = req.file.originalname.split(" ").join("-");
  const fileName = `${id}-${formattedName}`;
  try {
    await sharp(req.file.buffer)
      .resize({ width: 615, height: 350 })
      .toFile("./data/uploads/" + fileName);
  } catch (error) {
    console.log("Error processing image", error);
  }

  return fileName;
};

module.exports = imageProcess;
