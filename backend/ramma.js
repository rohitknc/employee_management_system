let express=require("express");
var mysql=require("mysql");
app=express();

    app.get('/',(req,res)=>
    {
        res.send("heloo ragalu")
    })
    app.get('/ramma',(req,res)=>
    {
        res.send("heloo lll")
    })


module.exports=app;