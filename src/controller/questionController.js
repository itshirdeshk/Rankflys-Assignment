const {PrismaClient} = require('@prisma/client');
const prismaClient = new PrismaClient();

const getQuestions = async (req, res) => {
    try {
        const { take, orderBy } = req.queryParams;
        const questions = await prismaClient.question.findMany({
            take,
            orderBy,
        });

        const response = questions.map((q) => ({
            title: q.title,
            option1: q.option1,
            option2: q.option2,
            option3: q.option3,
            option4: q.option4,
            correct: q.correct
        }));

        res.json({ questions: response });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

const addQuestion = async (req, res) => {
    try {
        const { title, option1, option2, option3, option4, correct } = req.body;

        const newQuestion = await prismaClient.question.create({
            data: {
                title,
                option1,
                option2,
                option3,
                option4,
                correct
            }
        });

        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add question' });
    }
};

module.exports = { getQuestions, addQuestion };
