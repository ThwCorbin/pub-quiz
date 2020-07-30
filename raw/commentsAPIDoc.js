// * apidoc comments ***********************************

// * GET /
/**
 * @api {get} / Respond with Welcome message
 * @apiName GetRoot
 * @apiGroup Root
 *
 * @apiSuccess {String} message Welcome message
 *
 * @apiSuccessExample Success-Response:
 *  	HTTP/1.1 200 OK
 *
 *  	####################################
 *	  #     Welcome to the Pub Quiz!     #
 *		####################################
 */

//  * GET /history
/**
 * @api {get} /history Respond with History questions
 * @apiName GetHistory
 * @apiGroup History
 *
 * @apiSuccess {Array} questions History questions (50)
 *
 * @apiSuccessExample Success-Response:
 *  	HTTP/1.1 200 OK
 * [
 *  {
 *    "incorrect_answers": [
 *      "Classic",
 *      "Baroque",
 *      "Renaissance"
 *     ],
 *    "_id": "5f21f0650619bc73ac0f57b3",
 *    "category": "History",
 *    "type": "multiple",
 *    "difficulty": "hard",
 *    "question": "Pianist Frederic Chopin was a composer of which musical era?",
 *    "correct_answer": "Romantic",
 *    "__v": 0
 *  },
 *  follwed by 49 more question objects
 * ]
 */

// * POST /history
/**
 * @api {post} /history Respond with body question
 * @apiName PostHistory
 * @apiGroup History
 *
 * @apiSuccess {Object} question History question (1)
 *
 * @apiSuccessExample Success-Response:
 *  	HTTP/1.1 200 OK
 *  {
 *    "incorrect_answers": [
 *      "blue",
 *      "red",
 *      "green"
 *     ],
 *    "_id": "5f22ec5dd2eeb78f7905794d",
 *    "category": "History",
 *    "type": "multiple",
 *    "difficulty": "hard",
 *    "question": "What is my favourite colour?",
 *    "correct_answer": "Pink",
 *    "__v": 0
 *  }
 */

// * PUT /history
/**
 * @api {put} /history/:id Respond with body question updated
 * @apiName PutHistory
 * @apiGroup History
 *
 * @apiSuccess {Object} question History question (1) updated
 *
 * @apiSuccessExample Success-Response:
 *  	HTTP/1.1 200 OK
 *  {
 *    "incorrect_answers": [
 *      "Louis XIII",
 *      "Louis XV",
 *      "Louis XVI"
 *     ],
 *    "_id": "5f21f0650619bc73ac0f57e3",
 *    "category": "History",
 *    "type": "multiple",
 *    "difficulty": "medium",
 *    "question": "Which Louis was known as The Sun King of France?",
 *    "correct_answer": "Louis XIV",
 *    "__v": 0
 *  }
 */

// * DEL /history
/**
 * @api {del} /history/:id Respond with body question deleted
 * @apiName DelHistory
 * @apiGroup History
 *
 * @apiSuccess {Object} question History question (1) updated
 *
 * @apiSuccessExample Success-Response:
 *  	HTTP/1.1 200 OK
 *  {
 *    "incorrect_answers": [
 *      "Louis XIII",
 *      "Louis XV",
 *      "Louis XVI"
 *     ],
 *    "_id": "5f21f0650619bc73ac0f57e3",
 *    "category": "History",
 *    "type": "multiple",
 *    "difficulty": "medium",
 *    "question": "Which Louis was known as The Sun King of France?",
 *    "correct_answer": "Louis XIV",
 *    "__v": 0
 *  }
 */
