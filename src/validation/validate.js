const Joi = require('joi');

const questionSchema = Joi.object({
    limit: Joi.number().integer().min(1).max(100).required(),
    sort: Joi.string().valid('ASC', 'DESC').required()
});

const addQuestionSchema = Joi.object({
    title: Joi.string().required(),
    option1: Joi.string().required(),
    option2: Joi.string().required(),
    option3: Joi.string().required(),
    option4: Joi.string().required(),
    correct: Joi.number().integer().min(1).max(4).required(),
})

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};

module.exports = { validateRequest, questionSchema, addQuestionSchema };
