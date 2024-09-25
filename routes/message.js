const express = require('express')
const router = express.Router()

const { index,boardcast } = require('../controller/messagingController')

router.post('/push', index);

router.post('/boardcast', boardcast);

module.exports = router;
