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
    sequelize.models.Answer.findByPk(req.params.id)
    .then(
        (answer) => {
            if(!answer) {
                return res.status(404).json({
                    error: new Error('Réponse non trouvé !')
                });
            }
            if(answer.userId !== req.auth.userId) {
                return res.status(401).json({
                    error: new Error('Requête non autorisé')
                });
            }
            sequelize.models.Answer.destroy ({
                where:{id: req.params.id}
            }).then(() => {
                res.send({ info:"answer deleted" })
            })  
        }
    )
}