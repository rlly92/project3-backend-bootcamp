const BaseController = require("./baseController");

class CartsController extends BaseController {
  constructor(model, listings, users) {
    super(model);
    this.listingsModel = listings;
    this.usersModel = users;
  }

  // THIS IS THE BACKEND LOGIC THAT WILL BE CALLED ON THE FRONTEND *AFTER* USERS HAVE SUBMIITED THEIR SIGNUP INFO
  // AND WILL BE REDIRECTED TO THE LISTINGS PAGE WITH AN ACTIVE CART ON DISPLAY IN THE NAVBAR:
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

  // THIS IS BE LOGIC FOR WHAT HAPPENS WHEN USER CLICKS ON "MY CART" ON THE NAVBAR:
  // FE WILL MAKE QUERY WITH THE USER ID TO DB FOR A CART WITH "ACTIVE" STATUS AND GET THAT CART ID:

  //
  //

  // AFTER CHECKOUT: THIS IS THE PUT REQUEST TO UPDATE THE STATUS OF THE CART:
  // NOTE TO SELF: The cartID in this instance might have to be sent via the params instead of the body, depending on FE logic.
  async updateCartStatus(req, res) {
    try {
      console.log("IS UPDATE CART ROUTE WORKING?");
      const { cartID, status } = req.body;

      // find the ID of the cart and update status:
      const updateCart = await this.model.update(
        { status },
        { where: { id: cartID } }
      );
      console.log(updateCart);
      return res.json(updateCart);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // WHEN USER ENTERS THE 'YOUR ORDERS MADE' PAGE ON THE FE, IT SENDS A req TO BACKEND TO SEARCH FOR CART IDs THAT BELONG TO USER
  //  AND CHECKS FOR THE CARTS THAT ARE "CHECKED OUT" IN THE STATUS COLUMN AND THEN SENDS ALL OF THOSE CART IDS TO FRONTEND:
}

module.exports = CartsController;
