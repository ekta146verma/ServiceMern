const User = require("../Models/user-model")
// const bcrypt = require ("bcryptjs")

const home = async (req,res)=>{
    try{
        res
            .status(200)
            .send("welcome to jessica page using controller method")
    } catch(error){
        console.log(error)
    }
}

const register = async (req,res)=>{
    try{
        console.log(req.body)
        const {username, password, email, phone} = req.body
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(400).json({msg:"User already exist"})
        }        

        await User.create({username, password, email, phone})

        res
            .status(200)
            .json({username, password, email, phone})
    } catch(error){
        res
            .status(400)
            .send({msg:`Page not working ${error}`})
    }
}

const login = async (req,res)=>{
    try{
        console.log(req.body)
        res
            .status(200)
            // .send("his is login page")
            .json({msg: req.body})
    } catch(error){
        res
            .status(400)
            .send({msg:`Page not working ${error}`})
    }
}

module.exports = {home,register,login}