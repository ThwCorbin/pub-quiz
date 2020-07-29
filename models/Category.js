const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	category: { type: String, trim: true },
	difficulty: { type: String, trim: true },
	question: { type: String, trim: true },
	correct_answer: { type: String, trim: true },
	incorrect_answer: [{ type: String, trim: true }],
});
