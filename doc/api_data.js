define({ "api": [
  {
    "type": "del",
    "url": "/history/:id",
    "title": "Respond with body question deleted",
    "name": "DelHistory",
    "group": "History",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>History question (1) updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 OK\n{\n  \"incorrect_answers\": [\n    \"Louis XIII\",\n    \"Louis XV\",\n    \"Louis XVI\"\n   ],\n  \"_id\": \"5f21f0650619bc73ac0f57e3\",\n  \"category\": \"History\",\n  \"type\": \"multiple\",\n  \"difficulty\": \"medium\",\n  \"question\": \"Which Louis was known as The Sun King of France?\",\n  \"correct_answer\": \"Louis XIV\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "raw/commentsAPIDoc.js",
    "groupTitle": "History"
  },
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
            "description": "<p>History questions (50)</p>"
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
    "filename": "raw/commentsAPIDoc.js",
    "groupTitle": "History"
  },
  {
    "type": "post",
    "url": "/history",
    "title": "Respond with body question",
    "name": "PostHistory",
    "group": "History",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>History question (1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 OK\n{\n  \"incorrect_answers\": [\n    \"blue\",\n    \"red\",\n    \"green\"\n   ],\n  \"_id\": \"5f22ec5dd2eeb78f7905794d\",\n  \"category\": \"History\",\n  \"type\": \"multiple\",\n  \"difficulty\": \"hard\",\n  \"question\": \"What is my favourite colour?\",\n  \"correct_answer\": \"Pink\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "raw/commentsAPIDoc.js",
    "groupTitle": "History"
  },
  {
    "type": "put",
    "url": "/history/:id",
    "title": "Respond with body question updated",
    "name": "PutHistory",
    "group": "History",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "question",
            "description": "<p>History question (1) updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 OK\n{\n  \"incorrect_answers\": [\n    \"Louis XIII\",\n    \"Louis XV\",\n    \"Louis XVI\"\n   ],\n  \"_id\": \"5f21f0650619bc73ac0f57e3\",\n  \"category\": \"History\",\n  \"type\": \"multiple\",\n  \"difficulty\": \"medium\",\n  \"question\": \"Which Louis was known as The Sun King of France?\",\n  \"correct_answer\": \"Louis XIV\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "raw/commentsAPIDoc.js",
    "groupTitle": "History"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Respond with Welcome message",
    "name": "GetRoot",
    "group": "Root",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \tHTTP/1.1 200 OK\n\n \t####################################\n\t  #     Welcome to the Pub Quiz!     #\n\t\t####################################",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "raw/commentsAPIDoc.js",
    "groupTitle": "Root"
  }
] });
