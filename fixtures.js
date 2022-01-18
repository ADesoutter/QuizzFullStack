const sequelize = require("./models");
const faker = require('faker');

function generateQuizzs() {
    for(let i=1; i<=50;i++) {
        sequelize.models.Quizz.create({
            title: faker.random.word(1),
        })
    }
}

function generateCategories() {
    for(let i=1; i<=50;i++) {
        sequelize.models.Category.create({
            title: faker.animal.type(),
        })
    }
}

function generateQuestions() {
    for(let i=1; i<=50;i++) {
        sequelize.models.Question.create({
            statement: faker.lorem.words(9),
        })
    }
}

function generateAnswers() {
    for(let i=1; i<=50;i++) {
        sequelize.models.Answer.create({
            isCorrect: faker.datatype.boolean(),
            content: faker.random.word(1),
            
        })
    }
}


sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    sequelize.sync({force: true})
    .then(()=> {
        generateQuizzs();
        generateCategories();
        generateQuestions();
        generateAnswers();
    });
})
.catch((err) => {
    console.log(err);
})