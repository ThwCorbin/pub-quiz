const app = require("express")();
const bodyParser = require("body-parser");
const Category = require("./models/Category");
const { get } = require("mongoose");
app.use(bodyParser.json());

app.get("/", (req, resp) => {
	let message = `
	####################################
	#     Welcome to the Pub Quiz!     #
	####################################
	`;
	resp.json(message);
});

app.get("/history", (req, resp) => {
	Category.find({}).then((categories) => {
		resp.json(categories);
	});
});

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

// "_id": "5f21f0650619bc73ac0f57e3",
// "question": "Which Louis was known as &#039;The Sun King of France&#039;?"
app.put("/history/:id", (req, resp) => {
	Category.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((category) => {
		resp.json(category);
	});
});

// delete
app.delete("/history/:id", (req, resp) => {
	Category.findByIdAndRemove({ _id: req.params.id }).then((category) => {
		resp.json(category);
	});
});

app.listen(3000, () => console.log("Listening on port 3000"));
