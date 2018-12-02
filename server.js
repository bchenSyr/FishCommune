// File name: app.js
// Application: entry point for FishCommune

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

//requring routes for
const usersRoutes = require("./routes/api/users");
const postsRoutes = require("./routes/api/posts");
const profileRoutes = require("./routes/api/profile");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.set("view engine", "ejs");

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", usersRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postsRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
