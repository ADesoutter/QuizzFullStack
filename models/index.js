const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

if(!process.env.NODE_ENV)
{
    dotenv.config(); 
}
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Category = require('./Category')(sequelize);
const Question = require('./Question')(sequelize);
const Quizz = require('./Quizz')(sequelize);
const Answer = require('./Answer')(sequelize);

//-------------- Relations start---------------//

Category.hasMany(Quizz);
Quizz.belongsTo(Category);

Quizz.hasMany(Question);
Question.belongsTo(Quizz);

Question.hasMany(Answer);
Answer.belongsTo(Question);

//-------------- Relations end---------------//

module.exports = sequelize;
