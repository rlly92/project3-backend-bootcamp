const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller, checkJwt) {
    // checkJwt; <----------add back next to controller in constructor later
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.use(this.checkJwt);
    router.get("/", this.controller.getAllListings.bind(this.controller));

    // COMMENT: routes with /:seller_id will always be the last. order matters since anything after /:params routes will assume that thing is a param.
    router.post("/create", this.controller.createListing.bind(this.controller));
    router.delete(
      "/:listing_id",
      this.controller.deleteListing.bind(this.controller)
    );

    return router;
  }
}

module.exports = ListingsRouter;
