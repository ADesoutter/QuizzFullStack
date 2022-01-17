const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question');


router.get('/', questionController.getAllQuestions);
   
router.get('/:id', questionController.getQuestion);

router.post('/', questionController.createQuestion);

router.patch('/:id', questionController.updateQuestion);

router.delete('/:id', questionController.deleteQuestion);

module.exports = router;

