const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/categories", { useNewUrlParser: true });

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = "mongodb://localhost/categories";
}

module.exports = mongoose;
