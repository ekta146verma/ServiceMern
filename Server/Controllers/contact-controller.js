const Contact = require("../Models/contact-model")

const contactForm = async (req,res) =>{
    try {
        await Contact.create(req.body)
        return res.status(200).json({msg: "message send successfully"})
    } catch (error) {
        return res.status(400).json({msg: "message not sent"})
    }
}

module.exports = {contactForm}