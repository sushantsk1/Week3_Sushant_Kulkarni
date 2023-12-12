const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();


mongoose.connect("mongodb://localhost:27017");

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
