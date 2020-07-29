const Category = require("../models/Category");
const jsonData = require("./historyData.json");

Category.deleteMany({}).then(() => {
	Category.create(jsonData).then((categories) => {
		console.log(categories);
		process.exit();
	});
});
