const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer');

router.get('/', answerController.getAllAnswers);
   
router.get('/:id', answerController.getAnswer);

router.post('/', answerController.createAnswer);

router.patch('/:id', answerController.updateAnswer);

router.delete('/:id', answerController.deleteAnswer);


module.exports = router;