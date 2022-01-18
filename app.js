const sequelize = require("./models");
// const cors = require('cors');
const express = require('express');

const app = express();
// app.use(cors());

// const quizzRouter = require('./routers/quizzRouter');
// app.use('/quizz', quizzRouter);

const categoryRouter = require('./routers/categoryRouter');
app.use('/category', categoryRouter);

const questionRouter = require('./routers/questionRouter');
app.use('/question', questionRouter);

const answerRouter = require('./routers/answerRouter');
app.use('/answer', answerRouter);

const userRouter = require('./routers/userRouter');
app.use('/auth', userRouter);

app.use(express.json());

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})

module.exports = app;