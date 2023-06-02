const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve one user
  async getOneUser(req, res) {
    const { userID } = req.params;
    try {
      const user = await this.model.findByPk(userID);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async insertOne(req, res) {
  //   const { name, price } = req.body;
  //   try {
  //     const newProduct = await this.model.create({
  //       updated_at: new Date(),
  //       created_at: new Date(),
  //       name: name,
  //       price: price,
  //     });
  //     return res.json(newProduct);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
}

module.exports = UsersController;
