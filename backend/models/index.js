const dbConfig = require("../config/keys.js").mongoURL;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig;
db.meals = require("./meal.model.js")(mongoose);

module.exports = db;
