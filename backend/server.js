const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.sao5htp.mongodb.net/?retryWrites=true&w=majority
  `,
  { useNewUrlParser: true }
)
.then (() => console.log("Connected DB"))
.catch(err => console.log(err))

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
