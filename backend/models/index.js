const dbConfig = require("../config/keys.js");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.mongoURL;
db.user = require("./User.js")(mongoose);
db.meals = require("./meal.model.js")(mongoose);

module.exports = db;
