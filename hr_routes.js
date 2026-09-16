let express=require('express');
let router=express.Router();

router.get("/employees",(req,res)=>{
res.send("employees called");
});
