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
        res
            .status(200)
            .json({msg: req.body})
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