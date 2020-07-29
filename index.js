const app = require("express")();
const bodyParser = require("body-parser");
const Category = require("./models/Category");
app.use(bodyParser.json());

app.get("/", (req, resp) => {
	Category.find({}).then((categories) => {
		resp.json(categories);
	});
});

app.listen(3000, () => console.log("Listening on port 3000"));
