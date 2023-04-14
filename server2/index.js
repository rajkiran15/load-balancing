const express = require("express");
const app = express();
const PORT = 3002;

app.get("/",(req,res)=>{
    res.send("hii how are you"+PORT);
})

app.listen(PORT,() => {
    console.log('server running on port '+" " +PORT);
})