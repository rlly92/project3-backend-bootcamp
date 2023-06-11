const BaseController = require("./baseController");

class CartsController extends BaseController {
  constructor(model, listings, users) {
    super(model);
    this.listingsModel = listings;
    this.usersModel = users;
  }

  // Retrieve ALL categories
  // async getAllCategories(req, res) {
  //   try {
  //     console.log("IS GET ALL CATEGORIES ROUTE WORKING?");
  //     const categories = await this.model.findAll();
  //     return res.json(categories);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
  // create NEW category instance

  async createNewCart(req, res) {
    try {
      console.log("IS CREATE NEW CART ROUTE WORKING?");
      const { user_id, status } = req.body;

      const newCart = await this.model.create({
        user_id: user_id,
        status: status,
      });
      console.log(newCart);
      return res.json(newCart);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CartsController;
