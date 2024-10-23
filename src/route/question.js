const express = require('express');
const { questionSchema, validateRequest, addQuestionSchema } = require('../validation/validate');
const { handleQueryParams } = require('../middleware/validation');
const { getQuestions, addQuestion } = require('../controller/questionController');

const router = express.Router();

router.post('/api/v1/questions',
    validateRequest(questionSchema),
    handleQueryParams,
    getQuestions
);

router.post('/api/v1/questions/add', validateRequest(addQuestionSchema), addQuestion);

module.exports = router;
