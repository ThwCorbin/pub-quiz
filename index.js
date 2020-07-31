const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const Category = require("./models/Category");
app.use(bodyParser.json());
app.use("/doc", express.static("doc"));

// * {get} / Respond with welcome message
app.get("/", (req, resp) => {
	let message = `
	####################################
	#     Welcome to the Pub Quiz!     #
	####################################
	`;
	resp.json(message);
});

// * {get} /history Respond with History questions
app.get("/history", (req, resp) => {
	Category.find({}).then((categories) => {
		resp.json(categories);
	});
});

// * {post} /history Respond with body question
// {
// 	"incorrect_answers": [
// 			"blue",
// 			"red",
// 			"green"
// 	],
// 	"category": "History",
// 	"type": "multiple",
// 	"difficulty": "hard",
// 	"question": "What is my favourite colour?",
// 	"correct_answer": "pink"
// }
app.post("/history", (req, resp) => {
	Category.create(req.body).then((category) => {
		resp.json(category);
	});
});

// * {put} /history/:id Respond with body question updated
// "_id": "5f21f0650619bc73ac0f57e3",
// "question": "Which Louis was known as &#039;The Sun King of France&#039;?"
app.put("/history/:id", (req, resp) => {
	Category.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((category) => {
		resp.json(category);
	});
});

// * {del} /history/:id Respond with body question deleted
app.delete("/history/:id", (req, resp) => {
	Category.findByIdAndRemove({ _id: req.params.id }).then((category) => {
		resp.json(category);
	});
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
	console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
