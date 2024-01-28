const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/', userCtrl.show)
router.get('/home', userCtrl.show)

module.exports = router