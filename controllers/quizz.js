const Quizz = require('../models/Quizz')

exports.getAllQuizzes = (req, res) => {
    sequelize.models.Quizz.findAll()
    .then(myQuizzs => {
        res.send(myQuizzs);
    })
};

exports.getQuizz = (req, res) => {
    const id= req.params.id;
    sequelize.models.Quizz.findByPk(id)
    .then(myQuizz => {
        res.send(myQuizz);
    })
};

exports.createQuizz = (req, res ) => {
    sequelize.models.Quizz.create(req.body)
    .then(quizzCreated => {
        res.send(quizzCreated);
    })
};

exports.updateQuizz = (req, res) => {
    sequelize.models.Quizz.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
};

exports.deleteQuizz = (req, res) => {
    sequelize.models.Quizz.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"quizz deleted"})
    })  
}