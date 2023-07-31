const mongoose = require("mongoose");
const express = require("express");

const CourseModel =mongoose.model("Course")
 
const router =express.Router();
router.get("/list",(req,res)=>{
    CourseModel.find((err,docs)=>{
        if (!err){
            res.send("course container")
        }
    });
});
module.exports=router;