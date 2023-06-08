// const express = require("express");
// const router = express.Router();

// class PhotosRouter {
//   constructor(controller, checkJwt) {
//     // checkJwt; <----------add back next to controller in constructor later
//     this.controller = controller;
//     this.checkJwt = checkJwt;
//   }

//   routes() {
//     router.use(this.checkJwt);
//     router.get("/", this.controller.createNewPhotoURL.bind(this.controller));

//     // COMMENT: routes with /:seller_id will always be the last. order matters since anything after /:params routes will assume that thing is a param.
//     router.post(
//       "/:listings_id",
//       this.controller.createNewPhotoURL.bind(this.controller)
//     );

//     return router;
//   }
// }

// module.exports = PhotosRouter;
