const Router = require('express');
const router = new Router();
const deviceController = require('../controlleres/deviceController')

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;