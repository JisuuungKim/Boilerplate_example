const express = require('express');
const celebrityController = require('../../controllers/celebrity.controller');

const router = express.Router();

router.post('/', celebrityController.createCelebrity);
router.get('/', celebrityController.getCelebrities);
router.get('/:name', celebrityController.getCelebrityByName);

module.exports = router;
