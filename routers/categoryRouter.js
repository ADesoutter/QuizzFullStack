const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Category.findAll()
    .then(myCategories => {
        res.send(myCategories);
    })
})

// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Category.findByPk(id)
    .then(myCategory => {
        res.send(myCategory);
    })
})

// créer une nouvelle catégorie en passant par postman
router.post('/', (req, res ) => {
    console.log(req.body);
    sequelize.models.Category.create(req.body)
    .then(categoryCreated => {
        res.send(categoryCreated);
    })
})

// supprimer un Quizz par son id en passant par postman
router.delete('/:id', (req, res) => {
    sequelize.models.Category.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"quizz deleted"})
    })  
})

// modifier ou mettre a jour un quizz en passant par postman
router.patch('/:id', (req, res) => {
    sequelize.models.Category.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
})


module.exports = router;