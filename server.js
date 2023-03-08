const express=require("express");
const app=express();
app.use(express.json());
const cors =require("cors");
app.use(cors())

app.post("/host/render",(req,res)=>{
    console.log("hello");
    console.log(req.body);
    res.send("hello sakkthi")
})


app.listen(8000,()=>{console.log("Server is started");});