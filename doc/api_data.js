define({ "api": [
  {
    "type": "get",
    "url": "/history",
    "title": "Respond with History questions",
    "name": "GetHistory",
    "group": "History",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "questions",
            "description": "<p>History questions (50).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \tHTTP/1.1 200 OK\n[\n {\n   \"incorrect_answers\": [\n     \"Classic\",\n     \"Baroque\",\n     \"Renaissance\"\n    ],\n   \"_id\": \"5f21f0650619bc73ac0f57b3\",\n   \"category\": \"History\",\n   \"type\": \"multiple\",\n   \"difficulty\": \"hard\",\n   \"question\": \"Pianist Frederic Chopin was a composer of which musical era?\",\n   \"correct_answer\": \"Romantic\",\n   \"__v\": 0\n },\n follwed by 49 more question objects\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "raw-api-docs/commentsAPIDoc.js",
    "groupTitle": "History"
  }
] });
