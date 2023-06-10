// PLEASE DELETE THIS FILE BEFORE PRODUCTION: IT IS NO LONGER NEEDED/HAS BEEN DEPRECATED:

// const BaseController = require("./baseController");

// class PhotosController extends BaseController {
//   constructor(model) {
//     super(model);
//   }

//   // AFTER getting URL from Firebase, create NEW URL link in database in photos table to associate with listing:
//   async createNewPhotoURL(req, res) {
//     try {
//       console.log("IS CREATE NEW PHOTO URL ROUTE WORKING?");
//       const { photoURL } = req.body;
//       const { listingsID } = req.params;
//       const newPhotoURL = await this.model.create({
//         photo_URL: photoURL,
//         listing_id: listingsID,
//       });
//       console.log(newPhotoURL);
//       return res.json(newPhotoURL);
//     } catch (err) {
//       return res.status(400).json({ error: true, msg: err });
//     }
//   }

//   // Retrieve photos specific to listing:
//   async getPhotos(req, res) {
//     try {
//       console.log("IS GET ALL CATEGORIES ROUTE WORKING?");
//       // find by foreign key: listing_id:
//       // const categories = await this.model.findAll();
//       return res.json(categories);
//     } catch (err) {
//       return res.status(400).json({ error: true, msg: err });
//     }
//   }
// }

// module.exports = PhotosController;
