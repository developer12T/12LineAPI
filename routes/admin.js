const express = require('express')
const router = express.Router()
const { index } = require('../controller/sendMessagingController')

router.post('/', index);

module.exports = router;
