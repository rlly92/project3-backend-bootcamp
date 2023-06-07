const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ListingsController extends BaseController {
  constructor(model, users, category) {
    super(model);
    this.usersModel = users;
    this.categoryModel = category;
  }

  // Retrieve ALL Listings
  async getAllListings(req, res) {
    console.log("HELLO IS ANYTHING WORKING?");
    try {
      const listings = await this.model.findAll();
      return res.json(listings);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // create NEW Listings with category association and photo URL association
  async createListing(req, res) {
    console.log("is CreateListing even working?");
    try {
      const {
        title,
        price,
        description,
        shipping_detail,
        sku_number,
        quantity,
        selectedCategoryIDs,
      } = req.body;
      const { user_id } = req.params;

      const newListing = await this.model.create({
        user_id: user_id,
        title: title,
        price: price,
        description: description,
        shipping_detail: shipping_detail,
        sku_number: sku_number,
        quantity: quantity,
      });

      // retrieve the selected categories by using the selectedCategoryIds from the JSON body
      const selectedCategories = await this.categoryModel.findAll({
        where: {
          id: {
            [Op.or]: selectedCategoryIDs,
          },
          // Op stands for Operator, .or means or (|| like in if conditions)
        },
      });

      console.log(
        "selectedCategories from selectedCategoryIDs:",
        selectedCategories
      );
      console.log("selectedCategoryIDs:", selectedCategoryIDs);

      // ASSOCIATE NEW LISTING WITH SELECTED CATEGORIES:
      //Promise.all and .map allows for the extraction of categories (from array SelectedCategories) and the subsequent association of those categories with listings to be performed at the same time:
      await Promise.all(
        selectedCategories.map(async (category) => {
          await newListing.setCategories(category);
        })
      );

      console.log(newListing);
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // DELETE Listing:
  async deleteListing(req, res) {
    try {
      const count = await this.model.destroy({
        where: { id: "insert params id here" },
      });
      console.log("deleted successfully:", count);
      // do we need a response here? since on the front end, user will just hit delete button and be immediately routed back to listings page.
      return res.json(count);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingsController;
