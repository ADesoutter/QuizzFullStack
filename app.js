const http = require('http');
const server = http.createServer();
const sequelize = require("./models");
// const cors = require('cors');
const express = require('express');

console.log('Checking Database connection...');

const app = express();
// app.use(cors());

const answerRouter = require('./routers/answerRouter');
app.use('/answer', answerRouter);

const categoryRouter = require('./routers/categoryRouter');
app.use('/category', categoryRouter);

const questionRouter = require('./routers/questionRouter');
app.use('/question', questionRouter);

const quizzRouter = require('./routers/quizzRouter');
app.use('/quizz', quizzRouter);

const userRouter = require('./routers/userRouter');
app.use('/auth', userRouter);

app.use(express.json());

const PORT = 5000;

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // sequelize.sync({force: true})
    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
})

module.exports = app;