/**
 * @api {get} /history Respond with History questions
 * @apiName GetHistory
 * @apiGroup History
 *
 * @apiSuccess {Array} questions History questions (50).
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
