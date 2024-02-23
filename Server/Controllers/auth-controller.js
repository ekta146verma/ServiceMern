const User = require("../Models/user-model")
const bcrypt = require ("bcryptjs")

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

        const userCreated = await User.create({username, password, email, phone})

        res
            .status(200)
            .json({msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(),})
    } catch(error){
        res 
            .status(400)
            .send({msg:`Page not working ${error}`})
    }
}

const login = async (req,res)=>{
    try{
        const {password, email} = req.body
        const userExist = await User.findOne({email:email})
        if(!userExist){
            return res.status(400).json({msg: "Invalid credentials"})
        }
        const user = await bcrypt.compare(password, userExist.password)
        if(user){
            res.status(200).json({
                msg: "login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(401).json({msg: "Invalid mail or password"})
        }
    } catch(error){
        res
            .status(500)
            .send({msg:`Internal Server Error ${error}`})
    }
}

module.exports = {home,register,login}