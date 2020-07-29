const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/categories", { useNewUrlParser: true });

module.exports = mongoose;
