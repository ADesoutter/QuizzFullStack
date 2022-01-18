const sequelize = require("./models");
const faker = require('faker');

console.log('Checking Database connection...');


function generateQuizzs() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Quizz.create({
            title: faker.random.word(1),
        })
    }
}

function generateCategories() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Category.create({
            title: faker.animal.type(),
        })
    }
}

function generateQuestions() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Question.create({
            statement: faker.lorem.word(6),
        })
    }
}

function generateAnswers() {
    for(let i=1; i<=10;i++) {
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