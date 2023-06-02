const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:userID", this.controller.getOneUser.bind(this.controller));

    return router;
  }
}

module.exports = UsersRouter;
