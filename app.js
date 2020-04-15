// Imports
import morgan from "morgan";
import cors from "cors";
import history from "connect-history-api-fallback";
import path from "path";
import mongoose from "mongoose";

// Express
import express from "express";
const app = express();

// DB Connection
import { dbUri, dbOptions } from "./properties";

mongoose
  .connect(dbUri, dbOptions)
  .then(() => {
    console.log("Connection to the database successfully");
  })
  .catch((err) => {
    err;
  });

// Configure
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });
const ENTRYPOINT = "/api";
app.use(ENTRYPOINT, require("./routes/note"));
app.use(ENTRYPOINT, require("./routes/user"));
app.use(ENTRYPOINT, require("./routes/login"));

// Middleware for vue.js
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// Listener
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log(`App listening on port ${app.get("port")}`);
});
