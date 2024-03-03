const {z} = require('zod')

//creating object schema
const signupSchema = z.object({
    username: z
            .string({required_error:"username is required"})
            .trim()
            .min(3,{message:"name must be atleast of 3 chars"})
            .max(250,{message:"name can't be more than 250 words"}),
    email: z
            .string({required_error:"email is required"})
            .trim()
            .email({message:"Invalid email"})
            .min(3,{message:"email must be atleast of 3 chars"})
            .max(250,{message: "email can't be more than 250 words"}),
    password: z
            .string({required_error: "password is required"})
            .min(8,{message:"password must be atleast of 8 chars"})
            .max(250,{message:"password can't be more than 250 words"}),
    phone: z
            .string({required_error: "phone is required"})
            .trim()
            .min(10,{message:"phone must be atleast of 10 chars"})
            .max(14,{message:"phone can't be more than 14 words"}),

}) 

module.exports= signupSchema