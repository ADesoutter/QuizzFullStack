const Category = require('../models/Category')

exports.getAllCategories = (req, res) => {
    sequelize.models.Category.findAll()
    .then(myCategories => {
        res.send(myCategories);
    })
}; 

exports.getCategory = (req, res) => {
    const id= req.params.id;
    sequelize.models.Category.findByPk(id)
    .then(myCategory => {
        res.send(myCategory);
    })
};

exports.createCategory = (req, res ) => {
    sequelize.models.Category.create(req.body)
    .then(categoryCreated => {
        res.send(categoryCreated);
    })
};

exports.updateCategory = (req, res) => {
    sequelize.models.Category.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
};

exports.deleteCategory = (req, res) => {
    sequelize.models.Category.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"quizz deleted"})
    })  
};