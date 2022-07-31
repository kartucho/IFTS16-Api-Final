const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const productos = require("./controller/productos");
const users = require("./controller/users");
const comments = require("./controller/comments");
const loginController = require("./controller/login");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use("/productos", productos);
app.use("/comment", comments);
app.use("/users", users);
app.use("/login", loginController);

app.use(middleware.unknownEndpoint);
module.exports = app;