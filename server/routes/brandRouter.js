const Router = require('express');
const router = new Router();
const brandController = require('../controlleres/brandController')

router.post('/', brandController.create);
router.get('/', brandController.getAll);

module.exports = router;