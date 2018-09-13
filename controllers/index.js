var express = require('express')
//rendevous
var router = express.Router();



router.use('/home',require('./home'))

router.use('/results',require('./results'))


module.exports = router;
