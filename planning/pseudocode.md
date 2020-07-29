# Pub Quiz Game API Pseudocode

## Connection

- db/connection.js

- \$ mongod to connect to MongoDB

- require mongoose

- connect mongoose to local host which creates the database pubquiz

- exports mongoose

## Create db directory data files

- create ./db/get-data.js, ./db/historyData.json, and ./db/mythologyData.json
- ./db/get-data.js

- require node fs module

- require above files and assign to variables

- function: fetch/axios from urls

- then: write the data to json files

- fs.writeFile(file, data[, options], callback)

## Retrieve data from an API and save to .json files

- Run node get-data.js in the console

- 50 results each for History and Mythology categories

- History url: https://opentdb.com/api.php?amount=50&category=23

- Mythology url: https://opentdb.com/api.php?amount=50&category=20

- returns two arrays with 50 questions each:

```json
[
	{
		"category": "History",
		"type": "multiple",
		"difficulty": "medium",
		"question": "In what year did Neil Armstrong and Buzz Aldrin land on the moon?",
		"correct_answer": "1969",
		"incorrect_answers": ["1965", "1966", "1973"]
	},
	{
		// 50 History question objects
	}
]
```

-- use fs.writefile to write data to ./db/historyData.json and ./db/mythologyData.json

## Define Mongoose Schema

- models/Category.js

- require db/connection.js

- assign mongoose.Schema to a constant Schema

- initialize schema with a configuration object

- categorySchema will have three Strings and an Array

1. category String
2. question String
3. answer String
4. incorrect Array of three Strings

## Define Mongoose Model

## Seed a database
