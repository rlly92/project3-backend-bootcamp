const express = require("express");
const router = express.Router();

class CartsRouter {
  constructor(controller, checkJwt) {
    // checkJwt; <----------add back next to controller in constructor later
    this.controller = controller;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.use(this.checkJwt);
    router.post("/create", this.controller.createNewCart.bind(this.controller));
    router.put(
      "/changecartstatus",
      this.controller.updateCartStatus.bind(this.controller)
    );

    // COMMENT: routes with /:params_id will always be the last. order matters since anything after /:params routes will assume that thing is a param.

    return router;
  }
}

module.exports = CartsRouter;
