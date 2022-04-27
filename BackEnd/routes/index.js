const { Router } = require('express');

const router = Router();

const routeCreateUser = require('./routeCreateUser');

router.use('/user', routeCreateUser);

module.exports = router;