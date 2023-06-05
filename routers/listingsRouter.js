const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.use(this.checkJwt);
    router.get("/", this.controller.getAllListings.bind(this.controller));
    router.post(
      "/:seller_id",
      this.controller.createListing.bind(this.controller)
    );

    return router;
  }
}

module.exports = ListingsRouter;
