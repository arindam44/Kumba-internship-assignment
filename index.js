const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRouter = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoURI = process.env.mongoURI || "mongodb://127.0.0.1:27017/Kumba";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/", userRouter);
