const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

// middleware for Auth0:
const checkJwt = auth({
  audience: "https://project3bootcamp/api",
  issuerBaseURL: `https://dev-uun7isc4ev72mwao.us.auth0.com/`,
});

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const ListingsRouter = require("./routers/listingsRouter");
const CategoriesRouter = require("./routers/categoriesRouter");
const CartsRouter = require("./routers/cartsRouter");
const CartslistingsRouter = require("./routers/cartslistingsRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const ListingsController = require("./controllers/listingsController");
const CategoriesController = require("./controllers/categoriesController");
const CartsController = require("./controllers/cartsController");
const CartslistingsController = require("./controllers/cartslistingsController");

// importing DB
const db = require("./db/models/index");
const { users, listings, categories, carts, carts_listings } = db;

// initializing Controllers -> note the lowercase for the first word
const usersController = new UsersController(users);
const listingsController = new ListingsController(listings, categories, users);
const categoriesController = new CategoriesController(categories);
const cartsController = new CartsController(carts, listings, users);
const cartslistingsController = new CartslistingsController(
  carts_listings,
  carts,
  listings,
  users
);

// inittializing Routers
const usersRouter = new UsersRouter(usersController, checkJwt).routes();
const listingsRouter = new ListingsRouter(
  listingsController,
  checkJwt
).routes();
const categoriesRouter = new CategoriesRouter(
  categoriesController,
  checkJwt
).routes();
const cartsRouter = new CartsRouter(cartsController, checkJwt).routes();
const cartslistingsRouter = new CartslistingsRouter(
  cartslistingsController,
  checkJwt
).routes();

// Define PORT and wrap app in express:
const PORT = process.env.PORT;
const app = express();

// using middleware, boilerplate for CORS, Express (JSON and URLencoded):
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using the routers
app.use("/users", usersRouter);
app.use("/listings", listingsRouter);
app.use("/categories", categoriesRouter);
app.use("/carts", cartsRouter);
app.use("/cartslistings", cartslistingsRouter);

// Auth0 Route that requires authentication:
app.get("/api/private", checkJwt, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

app.listen(PORT, () => {
  console.log("Application listening to port 8000");
});
