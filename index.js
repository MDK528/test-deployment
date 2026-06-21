import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use("/", (req, res)=> {
    res.json({
        message:"server is healthy v4.2", 
        status: "Github-Actions"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is up and running at http://localhost:${PORT}`);
    
})