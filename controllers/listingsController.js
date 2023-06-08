const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ListingsController extends BaseController {
  constructor(model, categories, users) {
    super(model);
    this.usersModel = users;
    this.categoriesModel = categories;
  }

  // Retrieve ALL Listings
  async getAllListings(req, res) {
    console.log("IS getAllListings WORKING?");
    try {
      const listings = await this.model.findAll();
      return res.json(listings);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // create NEW Listings with category association:
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
        photo_url_1,
        photo_url_2,
        photo_url_3,
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
        photo_url_1: photo_url_1,
        photo_url_2: photo_url_2,
        photo_url_3: photo_url_3,
      });
      console.log(this.categoriesModel);
      // // retrieve the selected categories by using the selectedCategoryIds from the JSON body
      const selectedCategories = await this.categoriesModel.findAll({
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
          await newListing.addCategory(category);
        })
      );

      console.log(newListing);
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // DELETE Listing: GET THE CORRECT LISTING ID FIRST THEN REMOVE ASSOCIATION TO CATEGORY THEN DELETE LISTING:
  async deleteListing(req, res) {
    // METHOD A:

    //   console.log("IS deleteListing EVEN WORKING?");
    //   try {
    //     // Get listing ID via params first (the ListingID is provided via a route parameter)
    //     const { listingID } = req.params;
    //     // Pick out the correct listing: "findOne" method with the specified listingID:
    //     const listingToDelete = await this.model.findOne({
    //       where: { id: listingID },
    //       include: [{ model: this.categoriesModel }], // Include the associated categories
    //     });

    //     if (!listingToDelete) {
    //       return res
    //         .status(404)
    //         .json({ error: true, msg: "listingToDelete not found" });
    //     }

    //     // Remove the associations between listing and categories
    //     await listingToDelete.removeCategories(listingToDelete.Categories);

    //     // Delete the listing
    //     await this.model.destroy({
    //       where: { id: listingID },
    //     });

    //     console.log("Deleted listing:", listingToDelete);

    //     return res.json({ success: true, msg: "Listing deleted successfully" });
    //   } catch (err) {
    //     return res.status(400).json({ error: true, msg: err });
    //   }
    // }

    //  METHOD B:
    console.log("IS deleteListing EVEN WORKING?");
    try {
      // Get listing ID from params
      const { listing_id } = req.params;
      const listingToDelete = await this.model.findByPk(listing_id, {
        include: this.categoriesModel,
      });

      if (!listingToDelete) {
        return res.status(404).json({ error: true, msg: "Listing not found" });
      }

      // Remove the associations between listing and categories
      const removeAssociation = await listingToDelete.setCategories([]);
      console.log("Association has been removed:", removeAssociation);
      // Delete the listing
      const deleteListing = await this.model.destroy({
        where: { id: listing_id },
      });

      console.log("Listing deleted:", listing_id, deleteListing);

      return res.json({ success: true, msg: "Listing deleted successfully" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingsController;
