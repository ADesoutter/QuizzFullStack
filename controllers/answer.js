const Answer = require('../models/Answer')

exports.getAllAnswers = (req, res) => {
    sequelize.models.Answer.findAll()
    .then(myAnswers => {
        res.send(myAnswers);
    })
}

exports.getAnswer = (req, res) => {
    const id= req.params.id;
    sequelize.models.Answer.findByPk(id)
    .then(myAnswer => {
        res.send(myAnswer);
    })
};

exports.createAnswer = (req, res ) => {
    console.log(req.body);
    sequelize.models.Quizz.create(req.body)
    .then(answerCreated => {
        res.send(answerCreated);
    })
};

exports.updateAnswer = (req, res) => {
    sequelize.models.Answer.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
};

exports.deleteAnswer = (req, res) => {
    sequelize.models.Answer.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({ info:"answer deleted" })
    })  
}