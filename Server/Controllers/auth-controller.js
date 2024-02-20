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
        res
            .status(200)
            .send("Welcome to registration page using controller")
    } catch(error){
        res
            .status(400)
            .send({msg:`Page not working ${error}`})
    }
}

module.exports = {home,register}