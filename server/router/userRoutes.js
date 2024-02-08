const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
// router.get('/signup', userController.SignupData);


module.exports = router;