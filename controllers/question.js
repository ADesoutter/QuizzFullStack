const Question = require('../models/Question')

exports.getAllQuestions = (req, res) => {
    sequelize.models.Question.findAll()
    .then(myQuestions => {
        res.send(myQuestions);
    })
};

exports.getQuestion = (req, res) => {
    const id= req.params.id;
    sequelize.models.Question.findByPk(id)
    .then(myQuestion => {
        res.send(myQuestion);
    })
};

exports.createQuestion = (req, res ) => {
    console.log(req.body);
    sequelize.models.Question.create(req.body)
    .then(questionCreated => {
        res.send(questionCreated);
    })
};

exports.updateQuestion = (req, res) => {
    sequelize.models.Question.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
};

exports.deleteQuestion = (req, res) => {
    sequelize.models.Question.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"question deleted"})
    })  
};