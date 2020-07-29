const fs = require("fs");
const axios = require("axios").default;
const urlHistory50 = "https://opentdb.com/api.php?amount=50&category=23";

axios(urlHistory50).then((resp) => {
	fs.writeFile(
		"./db/historyData.json",
		JSON.stringify(resp.data.results),
		(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log("See db/historyData.json for the data!");
			}
		}
	);
});
