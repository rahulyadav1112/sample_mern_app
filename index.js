let express=require('express');
let app=express();
//localhost:3000/

app.get("/",(req,res)=>{
    res.send("home page called");
});
//localost:3000/aboutus
app.get("/aboutus",(req,res)=>{
    res.send("about page called");
});
//run the server in port 3000
app.listen(3000,()=>{
    console.log("server running on port 3000")
})