import "dotenv/config";
import express from "express";

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.use("/", (req, res)=> {
    res.json("server is healthy")
})

app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
    
})