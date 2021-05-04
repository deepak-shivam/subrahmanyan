const express = require("express");
const passport = require("passport");

const app = express();

const routes = require("./routes/routes");

// Passport Middleware
app.use(passport.initialize());

// Passport Config.
require("./config/passport")(passport);

app.use(express.json());

app.use("/", routes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server started");
});
