const express = require('express');
const router = express.Router();

const quizzController = require('../controllers/quizz');

router.get('/', quizzController.getAllQuizzes);
   
router.get('/:id', quizzController.getQuizz);

router.post('/', quizzController.createQuizz);

router.patch('/:id', quizzController.updateQuizz);

router.delete('/:id', quizzController.deleteQuizz);

module.exports = router;