const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.get('/', userController.index);
router.get('/:id', userController.show);

module.exports = router;