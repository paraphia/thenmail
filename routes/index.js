const router = require('express').Router();

router.use('/mail', require('./mail'));
router.use('/user', require('./user'));

module.exports = router;