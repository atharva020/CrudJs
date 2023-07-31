const connection = require("./model");
const express =require("express");
const application =express();
const expressHandlerbars=require("express-Handlebars");
const bodyparser=require("body-parser");
const path = require('path');
const { engine } = require("express-handlebars");
const CourseController=require("./controllers/courses");


application.use(bodyparser.urlencoded(
    {
        extended:true
    }
));

application.set('views', path.join(__dirname,"/views/"));

application.engine( "hbs", engine({ 
    extname: "hbs",defaultLayout:"mainLayout" , 
    layoutsDir:__dirname+"/views/layouts/", 
}));




// application.engine("hbs",expressHandlerbars({
//     extname:"hbs",
//     defaultLayout:"mainLayout",
//     layoutsDir:__dirname+"views/layouts"
// }));

application.set("view engine","hbs");

application.get("/",(req,res)=>{
   // res.send('<h1>hello worldd<h1>')
   res.render("index",{})
})

application.use("/course",CourseController)

application.listen("3000",()=>{
console.log("Started");
});