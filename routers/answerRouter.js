const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Answer.findAll()
    .then(myAnswers => {
        res.send(myAnswers);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Answer.findByPk(id)
    .then(myAnswer => {
        res.send(myAnswer);
    })
})

// créer un nouveau Quizz en passant par postman
router.post('/', (req, res ) => {
    console.log(req.body);
    sequelize.models.Quizz.create(req.body)
    .then(quizzCreated => {
        res.send(quizzCreated);
    })
})

// supprimer un Quizz par son id en passant par postman
router.delete('/:id', (req, res) => {
    sequelize.models.Quizz.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"quizz deleted"})
    })  
})

// modifier ou mettre a jour un quizz en passant par postman
router.patch('/:id', (req, res) => {
    sequelize.models.Quizz.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
})

module.exports = router;