const express = require('express')
const router = express.Router()

// router.get('/',(req,res)=>{
//     res.send("welcome to jessica page using router")
// }) 

router.route('/').get((req,res)=>{
    res
        .status(200)
        .send("welcome to jessica page using router and route method")
})

router.route('/register').get((req,res)=>{
    res
        .status(200)
        .send("Welcome to registration page using router and route")
})


module.exports = router;