const fs = require("fs");

class News {
  constructor(filename = "news.json") {
    this.path = `./data/${filename}`;

    try {
      fs.readdirSync("data");
    } catch (error) {
      fs.mkdirSync("data");
    }

    try {
      fs.accessSync(this.path);
    } catch (error) {
      fs.writeFileSync(this.path, "[]");
    }
  }

  createId() {
    return new Date().getTime().toString();
  }

  async getAll() {
    return JSON.parse(await fs.promises.readFile(this.path));
  }

  async getSingle(id) {
    const data = await this.getAll();
    return data.find((news) => news.id === id);
  }

  async getByCategory(category) {
    const data = await this.getAll();
    return data.filter((news) => news.category === category);
  }

  async create(data, id, imageName) {
    const totalData = await this.getAll();
    totalData.push({
      ...data,
      id,
      thumbnail: `http://localhost:3000/${imageName}`,
    });

    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
  }
}

module.exports = News;
