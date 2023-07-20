let express=require("express");
var mysql=require("mysql");
var json=require("jsonwebtoken");
var bcrypt=require("bcrypt");
var cors=require("cors");
var next=require('./ramma')
var app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.listen(2000,()=>
{
    console.log("here is running on 2000 port");
})
app.use("/mlkl",next);
var k1=(req,res)=>
{
    res.send('hello guru ');
}
app.use('/mowa',k1);
const knc=(req,res)=>{
res.send( req.params.id);
}
app.route('/:id').get(knc);