const express = require('express')
const router = express.Router()
const {home,register,login} = require('../Controllers/auth-controller')
const validate = require("../MiddleWares/validate-middleware")
const signupSchema = require("../Validators/auth-validator")

router.route('/').get(home)
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(login)

module.exports = router;