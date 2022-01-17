const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les Quizzs
router.get('/', (req, res) => {
    sequelize.models.Quizz.findAll()
    .then(myQuizzs => {
        res.send(myQuizzs);
    })
})
   
// récupérer un Quizz pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Quizz.findByPk(id)
    .then(myQuizz => {
        res.send(myQuizz);
    })
})

// créer un nouveau Quizz en passant par postman
router.post('/', (req, res ) => {
    // Recevoir ce qu'il y a dans le body 
    // de la requête
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