const app = require("express")();
const bodyParser = require("body-parser");
const Category = require("./models/Category");
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

app.post("/history", (req, resp) => {
	Category.create(req.body).then((category) => {
		resp.json(category);
	});
});

app.listen(3000, () => console.log("Listening on port 3000"));
