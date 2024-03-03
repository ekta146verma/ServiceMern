const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        // console.log(error)
        const status = 422
        const message = err.errors[0].message
        const extraDetails = "You cant access"
        const error = {status,message,extraDetails}
        // res.status(400).json({msg:message})
        next(error)
    }
}

module.exports = validate