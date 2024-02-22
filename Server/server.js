require("dotenv").config("./Vars/.env")
const express = require("express");
const app = express();
const router = require('./Router/auth-router')
const connectDB = require('./utils/db')

app.use(express.json())

// Mount te Router: to use the router in your main express app, you can "mount" it at a specific url prefix
app.use("/api/auth", router);

// app.get('/', (req,res) =>{
//     res.status(200).send("This is Ekta's File")
// });

// app.get('/register',(req,res)=>{
//     res.send("This is registration page")
// })

const PORT = 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})


