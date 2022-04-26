const { Router } = require('express');

const controllerUser = require('../controllers/controllerUser');

const router = Router();

router.post('/create', controllerUser.create);

module.export = router;