const Router = require('express');
const router = new Router();
const userController = require('../controlleres/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);

// add as second parametr, and this middleware will be ckeck user auth
router.get('/auth', authMiddleware,  userController.check);

module.exports = router;