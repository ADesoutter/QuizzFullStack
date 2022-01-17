const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les questions
router.get('/', (req, res) => {
    sequelize.models.Question.findAll()
    .then(myQuestions => {
        res.send(myQuestions);
    })
})
   
// récupérer une question pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Question.findByPk(id)
    .then(myQuestion => {
        res.send(myQuestion);
    })
})

// créer une nouvelle question en passant par postman
router.post('/', (req, res ) => {
    console.log(req.body);
    sequelize.models.Question.create(req.body)
    .then(questionCreated => {
        res.send(questionCreated);
    })
})

// supprimer une question par son id en passant par postman
router.delete('/:id', (req, res) => {
    sequelize.models.Question.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"question deleted"})
    })  
})

// modifier ou mettre a jour une question en passant par postman
router.patch('/:id', (req, res) => {
    sequelize.models.Question.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
})

module.exports = router;

