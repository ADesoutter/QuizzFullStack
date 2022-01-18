const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question');
const auth = require('../middleware/auth');

router.get('/', auth, questionController.getAllQuestions);
   
router.get('/:id', auth, questionController.getQuestion);

router.post('/', auth, questionController.createQuestion);

router.patch('/:id', auth, questionController.updateQuestion);

router.delete('/:id', auth, questionController.deleteQuestion);

module.exports = router;

