const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const categoryController = require('../controllers/category');

router.get('/', auth, categoryController.getAllCategories);

router.get('/:id', auth, categoryController.getCategory);

router.post('/', auth, categoryController.createCategory);

router.patch('/:id', auth, categoryController.updateCategory);

router.delete('/:id', auth, categoryController.deleteCategory);


module.exports = router;