const express = require("express");
const app = express();
const cors = require("cors");
const indexRoutes = require("./routes/index.routes");
const studiosRoutes = require("./routes/studios.routes");
const moviesRoutes = require("./routes/movies.routes");

const db = require("./database");
db.connect();

app.use(express.json());
app.use(cors());

app.use("/index", indexRoutes);
app.use("/studios", studiosRoutes);
app.use("/movies", moviesRoutes);


module.exports = app;