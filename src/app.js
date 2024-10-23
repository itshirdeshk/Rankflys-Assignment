const express = require('express');
const questionRoutes = require("./route/question")

const app = express();
app.use(express.json());

app.use(questionRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
