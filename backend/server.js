const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5001" }));

const db = require("./models");
db.mongoose
  .connect(db.url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport.js")(passport);

app.use("/api/users", users);
require("./routes/api/meal.routes")(app);

// test message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
