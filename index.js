const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing Routers
const UsersRouter = require("./routers/usersRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");

// importing DB
const db = require("./db/models/index");
const { users } = db;

// initializing Controllers -> note the lowercase for the first word
const usersController = new UsersController(users);

// inittializing Routers
const usersRouter = new UsersRouter(usersController).routes();

// Define PORT and wrap app in express:
const PORT = process.env.PORT;
const app = express();

// using middleware, boilerplate for CORS, Express (JSON and URLencoded):
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using the routers
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
