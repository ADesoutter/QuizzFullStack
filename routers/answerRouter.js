const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer');
const auth = require('../middleware/auth');

router.get('/', auth, answerController.getAllAnswers);
   
router.get('/:id', auth, answerController.getAnswer);

router.post('/', auth, answerController.createAnswer);

router.patch('/:id', auth, answerController.updateAnswer);

router.delete('/:id', auth, answerController.deleteAnswer);


module.exports = router;