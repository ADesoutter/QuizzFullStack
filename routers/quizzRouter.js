const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const quizzController = require('../controllers/quizz');


router.get('/', auth, quizzController.getAllQuizzes);
   
router.get('/:id', auth, quizzController.getQuizz);

router.post('/', auth, quizzController.createQuizz);

router.patch('/:id', auth, quizzController.updateQuizz);

router.delete('/:id', auth, quizzController.deleteQuizz);

module.exports = router;