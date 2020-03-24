// Imports
import morgan from "morgan";
import cors from "cors";
import history from "connect-history-api-fallback";
import path from "path";

// Express
import express from "express";
const app = express();

// Configure
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.get("/", function(req, res) {
//   res.send("Hello World!");
// });

// Middleware for vue.js
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// Listener
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function() {
  console.log(`App listening on port ${app.get("port")}`);
});
