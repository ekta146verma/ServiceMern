const mongoose = require('mongoose')
const MONGO_URL = "mongodb+srv://ekta146verma:ServiceMern146@cluster0.k5qtoit.mongodb.net/"

//mongoose.connect(MONGO_URL)

const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Connection successful to database")
    } catch (error) {
        console.error("Connnection failed")
        process.exit(0)
    }
}

module.exports = connectDB
