const express = require("express");
const mongoose = require("mongoose");
const router = require("Router");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoURI = process.env.PORT || "mongodb://127.0.0.1:27017";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
