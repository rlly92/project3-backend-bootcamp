const BaseController = require("./baseController");

class ListingsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve ALL Listings
  async getAllListings(req, res) {
    try {
      const listings = await this.model.findAll();
      return res.json(listings);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // create NEW Listings
  async createListing(req, res) {
    try {
      const {
        title,
        price,
        description,
        shipping_cost,
        shipping_detail,
        sku_number,
        quantity,
      } = req.body;
      const { seller_id } = req.params;

      const newListing = await this.model.create({
        seller_id: seller_id,
        title: title,
        price: price,
        description: description,
        shipping_cost: shipping_cost,
        shipping_detail: shipping_detail,
        sku_number: sku_number,
        quantity: quantity,
      });
      console.log(newListing);
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingsController;
