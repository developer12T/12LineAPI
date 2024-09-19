const express = require('express')
const router = express.Router()
const { allAudience, create } = require('../controller/audienceController')

router.get('/allaudience', allAudience)

module.exports = router
