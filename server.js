const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const applications = require("./routes/api/applications");
const cors = require('cors');
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());

//Look here to fix cors errors when deploying
// var whitelist = ["localhost:5000"]
app.use(cors())

// Passport config
require("./config/passport")(passport);
//users route
app.use("/api/users", users);
//applications route
app.use("/api/applications", applications);
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server up and running on port ${port} !`));