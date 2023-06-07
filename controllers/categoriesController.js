const BaseController = require("./baseController");

class CategoriesController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve ALL categories
  async getAllCategories(req, res) {
    try {
      console.log("IS GET ALL CATEGORIES ROUTE WORKING?");
      const categories = await this.model.findAll();
      return res.json(categories);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // create NEW category instance
  async createNewCategory(req, res) {
    try {
      console.log("IS CREATING CATEGORY ROUTE WORKING?");
      const { name } = req.body;

      const newCategory = await this.model.create({
        name: name,
      });
      console.log(newCategory);
      return res.json(newCategory);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CategoriesController;
