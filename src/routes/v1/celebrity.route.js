const express = require('express');
const celebrityController = require('../../controllers/celebrity.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const celebrityValidation = require('../../validations/celebrity.validation');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(celebrityValidation.create), celebrityController.createCelebrity)
  .get(auth(), celebrityController.getCelebrities);

router.get('/:name', celebrityController.getCelebrityByName);
router.route('/:id').put(auth(), validate(celebrityValidation.updateCelebrity), celebrityController.updateCelebrityById);

// todo: 보통 auth안에 validate 넣는 이유는?
module.exports = router;
