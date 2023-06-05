const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller) {
    this.controller = controller;
    // this.checkJwt = checkJwt;
  }

  routes() {
    router.get("/", this.controller.getAllListings.bind(this.controller));
    router.post(
      "/:seller_id",
      // this.checkJwt,
      this.controller.createListing.bind(this.controller)
    );

    return router;
  }
}

module.exports = ListingsRouter;
