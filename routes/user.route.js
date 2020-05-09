var express = require('express')
var router = express.Router()
const db = require('../db')

const controller = require('../controllers/user.controller') 
const validate = require('../validate/user.validate')

router.get('/', controller.index)


router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 12345)
    res.send('Hello')
})


router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.get) 

router.post('/create', validate.postCreate, controller.postCreate)


module.exports = router