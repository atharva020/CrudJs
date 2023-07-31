const mongoose=require("mongoose")

var CSchema =new mongoose.Schema({

    courseName:{
        type:String,
        required:"Required"
    },
    courseId:{
        type:String
    },
    courseDuration:{
        type:String
    },
    fee:{
        type:String
    }
});

mongoose.model("Course",CSchema)