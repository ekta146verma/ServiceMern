const express = require('express')
const router = express.Router()
const {home,register,login} = require('../Controllers/auth-controller')

// router.get('/',(req,res)=>{
//     res.send("welcome to jessica page using router")
// }) 

router.route('/').get(home)
router.route('/register').post(register)
router.route('/login').post(login)
 

// router.route('/').get((req,res)=>{
//     res
//         .status(200)
//         .send("welcome to jessica page using router and route method")
// })


// router.route('/register').get((req,res)=>{
//     res
//         .status(200)
//         .send("Welcome to registration page using router and route")
// })


module.exports = router;