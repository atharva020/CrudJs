const mongoose = require("mongoose");
const express = require("express")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Red", {useNewUrlParser: true},(error)=>{
    if(error){
        console.log("not done");
    }
    else{
        console.log(" donee");
    }
})

const Course =require("./course.model");