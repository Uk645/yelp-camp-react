var express = require("express");
var bodyParser = require("body-parser");
var app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("this is the yelp-camp-api index page");
})

app.listen(9000,()=>{
    console.log("yelp-camp-api started on 9000");
})